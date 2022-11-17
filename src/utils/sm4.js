// 国密sm4加解密
import { getEnvVariables } from '@/utils/environment'

const SM4 = require('gm-crypt').sm4

const getSm4Config = (mode) => {
  return {
    mode,
    key: getEnvVariables('CIPHER_KEY')
  }
}

export const getEncryptedData = (originalData, mode) => {
  const sm4Config = getSm4Config(mode)
  const sm4 = new SM4(sm4Config)
  return sm4.encrypt(originalData)
}

export const getDecryptedData = (decryptedData, mode) => {
  const sm4Config = getSm4Config(mode)
  const sm4 = new SM4(sm4Config)
  return sm4.decrypt(decryptedData)
}
