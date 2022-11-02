function setSessionStorage (key, value) {
  const result = typeof value === 'object'
    ? JSON.stringify(value) : value
  return sessionStorage.setItem(key, result)
}

function getSessionStorage (key, value) {
  return sessionStorage.getItem(key, value)
}

function removeSessionStorage (key) {
  return sessionStorage.removeItem(key)
}

const tokenKey = 'token'

export function setToken (token) {
  return setSessionStorage(tokenKey, token)
}
export function getToken () {
  return getSessionStorage(tokenKey) || ''
}
export function removeToken () {
  return removeSessionStorage(tokenKey)
}
