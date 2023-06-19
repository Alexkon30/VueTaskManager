const localStorageAvailable = () => {
  let test = 'test'
  try {
    localStorage.setItem(test, test)
    localStorage.removeItem(test)
    return true
  } catch (e) {
    return false
  }
}

const setupLocalStorage = (store) => {
  let previous = localStorage.getItem('data')
  if (previous) {
    store.replaceState(JSON.parse(previous))
  }
}

export const VuexLocalStorage = (store) => {
  if (!localStorageAvailable()) {
    return false
  }
  setupLocalStorage(store)
  store.subscribe((mutation, state) => {
    localStorage.setItem('data', JSON.stringify(state))
  })
}
