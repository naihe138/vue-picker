import vue from 'rollup-plugin-vue'
import autoprefixer from 'autoprefixer'
import precss from 'precss'
export default [
  {
    input: './test.vue',
    output: {
      format: 'esm',
      file: 'dist/test.esm.js'
    },
    plugins: [
      vue({
        style: {
          postcssPlugins: [
            precss(),
            autoprefixer()
          ]
        }
      })
    ]
  }
]