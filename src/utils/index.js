/**
 * url中params参数转换object
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj (url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
    decodeURIComponent(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')
      .replace(/\+/g, ' ') +
    '"}'
  )
}

/**
 * 获取url中参数
 * @param {string} url
 * @param {string} queryKey
 * @returns {string}
 */
export function getQueryString (url, queryKey) {
  const reg = new RegExp(`&{1}${queryKey}\\=[a-zA-Z0-9_-]+`, 'g')
  const matchResult = url.replace(/\?/g, '&').match(reg)[0]
  return matchResult.substr(matchResult.indexOf('=') + 1)
}
