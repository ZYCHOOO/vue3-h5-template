const plugins = []
const DEBUG_WHITE_LIST = ['development', 'test']
const IS_DEBUG = DEBUG_WHITE_LIST.includes(process.env.VUE_APP_ENV)

// 非调试环境，去除代码中的所有console.log(development-env, test-env)
if (!IS_DEBUG) {
  plugins.push('transform-remove-console')
}

module.exports = {
  plugins,
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
