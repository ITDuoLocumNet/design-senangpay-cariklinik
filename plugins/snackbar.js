export default ({ store }, inject) => {
  const snackbarFunction = {
    show: (message = '', color = 'success', timeout = '3000') => {
      return store.dispatch('snackbar/snackbar', {
        show: true,
        message,
        color,
        timeout,
      })
    },
    error: (error, color = 'error', timeout = '3000') => {
      const noAuth = /Unauthorized/i.test(error.message)
      const message = error.message.replace(/graphql error:/gi, '')
      store.dispatch('snackbar/snackbar', {
        show: true,
        message,
        color,
        timeout,
      })

      // no auth redirect
      if (noAuth) {
        setTimeout(() => {
          window.location.replace(`/sign-in`)
        }, 500)
      }
    },
    hide: () => {
      return store.dispatch('snackbar/snackbar', {
        show: false,
        color: 'transparent',
      })
    },
  }
  inject('snackbar', snackbarFunction)
}
