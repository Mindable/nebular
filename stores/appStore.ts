export const useAppStore = defineStore('app', () => {
  const loading = ref<boolean>(true)

  const setLoadingTrue = () => {
    loading.value = true
  }

  const setLoadingFalse = () => {
    loading.value = false
  }

  const isLoading = () => {
    return loading.value
  }

  return {
    loading,
    setLoadingTrue,
    setLoadingFalse,
    isLoading,
  }
})
