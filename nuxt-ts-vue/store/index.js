export const state = () => ({
    data: {},
    index: false,
    navShow: false,
})

export const mutations = {
    data (state, data) {
        state.data = data
    },
    isIndex (state) {
        state.index = true
    },
    closeMenu(state){
        state.navShow = !state.navShow;
        document.body.style.overflowY = state.navShow ? 'hidden' : '';
    }
}

export const actions = {
    // 默认加载信息
    /* async nuxtServerInit({ commit }, { req }) {
        const res = await this.$axios.get('info')
        commit('data', res.data.body);
    }, */
}
