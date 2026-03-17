import { defineBuildConfig } from 'unbuild'
import vue from 'unplugin-vue/rollup'

export default defineBuildConfig({
  failOnWarn: false,
  entries: ['src/index'],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: false,
    inlineDependencies: true,
  },
  hooks: {
    'rollup:options'(ctx, options) {
        options.plugins = options.plugins || []
        options.plugins.push(vue())
    }
  }
})
