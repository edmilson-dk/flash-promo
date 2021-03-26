function useStorage() {
  function addToStorage(item: any, key: string) {
    window.localStorage.setItem(
      key,
      JSON.stringify(item)
    );
    return;
  }

  function removeToStorage(key: string) {
    window.localStorage.removeItem(key);
    return;
  }

  function getToStorage(key: string) {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : {};
  }

  return {
    addToStorage,
    removeToStorage,
    getToStorage
  }
}

export default useStorage;