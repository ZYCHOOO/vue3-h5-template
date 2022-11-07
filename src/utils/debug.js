import eruda from 'eruda'
import { getEnvValue } from './environment'
import { DEBUG_WHITE_LIST } from './enums'

export function initDebugTool () {
  const currentEnv = getEnvValue('NODE_ENV')
  if (DEBUG_WHITE_LIST.includes(currentEnv)) {
    eruda.init()
  }
}
