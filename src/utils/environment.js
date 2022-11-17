/**
 * 相关环境变量
 * 两种方式都可以，根据喜好来使用
 * getEnvVariables - 获取ENV_CONFIGS中对应的值（更直观，方便管理，写的多一些）
 * getEnvValue - 使用.env文件获取对应的值（写的更少）
 */

const ENV_CONFIGS = {
  // APP_ID is an example
  APP_ID: {
    development: { value: 'aaa', label: '示例-开发环境-appid' },
    test: { value: 'bbb', label: '示例-测试环境-appid' },
    stage: { value: 'ccc', label: '示例-预发布环境-appid' },
    production: { value: 'ddd', label: '示例-发布环境-appid' }
  },
  // CIPHER_KEY is also an example
  CIPHER_KEY: {
    development: { value: 'aaa', label: '示例-开发环境-cipherKey' },
    test: { value: 'bbb', label: '示例-测试环境-cipherKey' },
    stage: { value: 'ccc', label: '示例-预发布环境-cipherKey' },
    production: { value: 'ddd', label: '示例-发布环境-cipherKey' }
  }
}

export const getEnvVariables = (variableName) => {
  const env = process.env.NODE_ENV
  return ENV_CONFIGS[variableName][env].value
}

export const getEnvValue = (envKey) => {
  return process.env[envKey] || null
}
