/* very basic persistence logic */

const store = window && window.localStorage;
const colorModeIndex_Key = "epvm:color-mode-index";


function persistData(key, value) {
  store && store.setItem(key, value);
}

function retrieveData(key) {
  return store && store.getItem(key);
}

function clearData(key) {
  return store && store.removeItem(key);
}

export function persistColorModeIndex(value) {
  persistData(colorModeIndex_Key, value) ;
}

export function retrieveColorModeIndex(curVal) {
  if (curVal === undefined) {
    return retrieveData(colorModeIndex_Key);
  } else {
    const persistedColorModeIndex = retrieveColorModeIndex()
    if (persistedColorModeIndex !== null) {
      return persistedColorModeIndex
    } else {
      return curVal
    }
  }
}

export function clearColorModeIndex() {
  clearData(colorModeIndex_Key) ;
}