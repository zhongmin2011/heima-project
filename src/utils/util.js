/**
 * @func: setLocalStorageItem
 * @desc: 设置localStorage
 * @param: key {String} key名
 * @param: value {AnyType} 值
 */
export const setLocalStorageItem = (key, value) => {
    if (typeof value !== 'string') {
      value = JSON.stringify(value)
    }
    localStorage.setItem(key, value)
}

/**
 * @func: getLocalStorageItem
 * @desc: 设置localStorage
 * @param: key {String} key名
 * @param: value {AnyType} 值
 */
export const getLocalStorageItem = (key) => {
    localStorage.getItem(key)
}