<template>
  <div class="list" ref="list">
    <ul :style="ulStyle">
      <li v-for="(item, index) in column" :key="'item' + index">{{ item.label }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
  import { computed, onBeforeUnmount, onMounted, PropType, reactive, ref, watch } from 'vue';
  import { TColumn, TItem } from './types';
  import { getClient, START_EVENT, MOVE_EVENT, END_EVENT, isPC } from './utils';
  const DEFAULT_DURATION = 200;
  // 惯性滑动思路:
  // 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `LIMIT_TIME` 且 move
  // 距离大于 `LIMIT_DISTANCE` 时，执行惯性滑动
  const LIMIT_TIME = 300;
  const LIMIT_DISTANCE = 15;
  const IS_PC = isPC();

  const props = defineProps({
    defaultIndex: {
      type: Number,
      default: 0,
    },
    column: {
      type: Array as PropType<TColumn>,
      default: () => [],
    },
    boxHeight: {
      type: Number,
      default: 0,
    },
    itemHeight: {
      type: Number,
      default: 0,
    },
    rowNumber: {
      type: Number,
      default: 0,
    },
  });
  const emit = defineEmits<{
    (event: 'change', item: TItem): void;
  }>();
  const list = ref<HTMLDivElement | null>(null);
  const ulStyle = reactive({
    transform: `translate3d(0px, 0px, 0px)`,
    transitionDuration: `0ms`,
    transitionProperty: `none`,
    lineHeight: `${props.itemHeight}px`,
  });
  let bottom = 0;
  let top = 0;
  let startTop = 0;
  let selectIndex = 0;
  const count = computed<number>(() => props.column.length);
  const getRoNumber = computed(() => Math.floor(Number(props.rowNumber / 2)));
  const init = () => {
    setTop(props.defaultIndex);
    const halfBox = (props.boxHeight - props.itemHeight) / 2;
    bottom = halfBox + props.itemHeight;
    top = halfBox - count.value * props.itemHeight;
  };
  // 根据index 设置滚动位置
  const setTop = (index = 0) => {
    const { boxHeight, itemHeight } = props;
    startTop = (boxHeight - itemHeight) / 2 - index * itemHeight;
    ulStyle.transform = `translate3d(0px, ${startTop}px, 0px)`;
    selectIndex = index;
    change();
  };
  const change = () => {
    emit('change', props.column[selectIndex]);
  };
  let touchStartTime = 0;
  let startY = 0;
  let disY = 0;
  let momentumTop = 0;

  const handleStart = (e: MouseEvent) => {
    touchStartTime = Date.now();
    startY = getClient(e).y;
    momentumTop = startTop;

    ulStyle.transitionDuration = `0ms`;
    ulStyle.transitionProperty = `none`;
    if (IS_PC) {
      document.addEventListener(MOVE_EVENT, handleMove, false);
      document.addEventListener(END_EVENT, handleEnd, false);
    }
  };

  let scheduledAnimationFrame = false;
  const throttleMove = (callback: (e: any) => void, ev: any) => {
    if (scheduledAnimationFrame) {
      return;
    }

    scheduledAnimationFrame = true;
    requestAnimationFrame(() => {
      scheduledAnimationFrame = false;
      callback(ev);
    });
  };

  const handleMove = (e: MouseEvent) => {
    throttleMove(handleMoveCallBack, e);
  };

  const handleMoveCallBack = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    disY = getClient(e).y - startY;
    startY = getClient(e).y;
    if (startTop >= bottom) {
      startTop = bottom;
    } else if (startTop <= top) {
      startTop = top;
    } else {
      startTop += disY;
    }
    ulStyle.transform = `translate3d(0px, ${startTop}px, 0px)`;
    const now = Date.now();

    if (now - touchStartTime > LIMIT_TIME) {
      touchStartTime = now;
      momentumTop = startTop;
    }
  };

  const handleEnd = () => {
    if (IS_PC) {
      document.removeEventListener(MOVE_EVENT, handleMove, false);
      document.removeEventListener(END_EVENT, handleEnd, false);
    }
    const distance = startTop - momentumTop;
    const duration = Date.now() - touchStartTime;
    const allowMomentum = duration < LIMIT_TIME && Math.abs(distance) > LIMIT_DISTANCE;
    if (allowMomentum) {
      toMove(distance, duration);
    } else {
      setTransformTop();
    }
  };
  const toMove = (distance, duration) => {
    const speed = Math.abs(distance / duration);
    distance = startTop + (speed / 0.002) * (distance < 0 ? -1 : 1);
    ulStyle.transitionProperty = `all`;
    ulStyle.transitionDuration = `1000ms`;
    setTop(Math.min(Math.max(Math.round(-distance / props.itemHeight), 0), count.value - 1));
  };
  const setTransformTop = () => {
    const itemHeight = props.itemHeight;
    ulStyle.transitionProperty = `all`;
    ulStyle.transitionDuration = `${DEFAULT_DURATION}ms`;
    if (startTop >= bottom - itemHeight) {
      setTop();
    } else if (startTop <= top + itemHeight) {
      setTop(count.value - 1);
    } else {
      let index = Math.round(startTop / itemHeight);
      startTop = index * itemHeight;
      if (startTop > bottom) {
        startTop = bottom - itemHeight;
        index = -getRoNumber;
      } else if (startTop < top) {
        startTop = top + itemHeight;
        index = count.value + 1;
      }
      ulStyle.transform = `translate3d(0px, ${startTop}px, 0px)`;
      index = getRoNumber.value - index;
      if (selectIndex !== index) {
        selectIndex = index;
        change();
      }
    }
  };
  let wheelTimer: any = null;
  const mousewheel = (e: WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();
    ulStyle.transitionDuration = `0ms`;
    ulStyle.transitionProperty = `none`;
    const { deltaX, deltaY } = e;
    if (Math.abs(deltaX) < Math.abs(deltaY)) {
      startTop = startTop - deltaY;
      let b = bottom - props.itemHeight;
      let t = top + props.itemHeight;
      let shouldMove = true;
      if (startTop > b) {
        startTop = b;
        shouldMove = false;
      } else if (startTop < t) {
        startTop = t;
        shouldMove = false;
      }
      ulStyle.transform = `translate3d(0px, ${startTop}px, 0px)`;
      if (shouldMove) {
        clearInterval(wheelTimer);
        wheelTimer = setTimeout(setTransformTop, 100);
      }
    }
  };
  const handleMouseWheel = (e: WheelEvent) => {
    throttleMove(mousewheel, e);
  };
  onMounted(() => {
    const el = list.value;
    if (el) {
      init();
      // 监听开始事件
      el.addEventListener(START_EVENT, handleStart, false);
      if (IS_PC) {
        el.addEventListener('wheel', handleMouseWheel, false);
      } else {
        el.addEventListener(MOVE_EVENT, handleMove, false);
        el.addEventListener(END_EVENT, handleEnd, false);
      }
    }
  });
  watch(() => props.column, init);
  watch(
    () => props.defaultIndex,
    (v) => {
      setTop(v);
    },
  );

  onBeforeUnmount(() => {
    const el = list.value;
    if (el) {
      el.removeEventListener(START_EVENT, handleStart, false);
      if (IS_PC) {
        el.removeEventListener('wheel', handleMouseWheel, false);
        el.removeEventListener(MOVE_EVENT, handleMove, false);
        el.removeEventListener(END_EVENT, handleEnd, false);
      }
    }
  });
</script>

<style lang="scss" scoped>
  .list {
    margin: 0;
    padding: 0;
    flex: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    ul {
      margin: 0;
      padding: 0;
      transition-timing-function: cubic-bezier(0.23, 1, 0.68, 1);
      line-height: 44px;
    }
    li {
      margin: 0;
      padding: 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      padding: 0 5px;
      color: #000;
    }
  }
</style>
