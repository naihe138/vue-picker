'use strict'
export const DEFTAULT_ITEM_HEIGHT = 44

// 兼容pc 移动端
export const HAS_TOUCH = 'ontouchstart' in window
export const START_EVENT = HAS_TOUCH ? 'touchstart' : 'mousedown'
export const MOVE_EVENT = HAS_TOUCH ? 'touchmove' : 'mousemove'
export const END_EVENT = HAS_TOUCH ? 'touchend' : 'mouseup'

export const getClient = e => {
  let clientX = HAS_TOUCH ? e.changedTouches[0].clientX : e.clientX
  let clientY = HAS_TOUCH ? e.changedTouches[0].clientY : e.clientY
  return {
    x: clientX,
    y: clientY
  }
}
