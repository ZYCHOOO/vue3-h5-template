// 相关环境变量

const ENV_CONFIGS = {
  // APP_ID is an example
  APP_ID: {
    development: { value: 'aaa', label: '示例-开发环境-appid' },
    test: { value: 'bbb', label: '示例-测试环境-appid' }
  }
}

export const getEnvVariables = (variableName) => {
  const env = process.env.NODE_ENV
  return ENV_CONFIGS[variableName][env].value
}
