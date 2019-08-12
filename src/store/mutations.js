const mutations = {
  // user_signin: (state, user) => {
  //   sessionStorage.setItem('user', JSON.stringify(user))
  //   console.log(user)
  //   Object.assign(state, user)
  // }
  changeShowTabbar (state) {
    state.isShowTabbar = !state.isShowTabbar
  },

  changeLoading (state) {
    state.isLoading = !state.isLoading
  }
}

export default mutations
