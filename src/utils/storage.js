export function setStorage (key, value) {
  const result = typeof value === 'object'
    ? JSON.stringify(value) : value
  return sessionStorage.setItem(key, result)
}

export function getStorage (key) {
  return sessionStorage.getItem(key)
}

export function removeStorage (key) {
  return sessionStorage.removeItem(key)
}

export function removeAllStorage () {
  return sessionStorage.clear()
}
