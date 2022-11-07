import eruda from 'eruda'
import { getEnvValue } from './environment'
import { DEBUG_WHITE_LIST } from './enums'

export function initDebugTool () {
  const currentEnv = getEnvValue('VUE_APP_ENV')
  if (DEBUG_WHITE_LIST.includes(currentEnv)) {
    eruda.init()
  }
}
