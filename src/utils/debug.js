import eruda from 'eruda'
import { getEnvValue } from './environment'
import { DEBUG_WHITE_LIST } from './enums'

export function initDebugTool () {
  const currentEnv = getEnvValue('NODE_ENV')
  console.log(DEBUG_WHITE_LIST, 111)
  if (DEBUG_WHITE_LIST.includes(currentEnv)) {
    eruda.init()
  }
}
