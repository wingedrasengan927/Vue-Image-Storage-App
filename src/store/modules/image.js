import api from '../../API/imgur'
import router from '../../router'

const state = {
    images: []
}

const getters = {
    allImages : state => state.images
}

const mutations = {
    setImages(state, images) {
        state.images = images
    }
}

const actions = {
    async fetchImages({ rootState, commit }) {
        const { token } = rootState.auth
        const response = await api.fetchImages(token);
        commit('setImages', response.data.data);
    },
    async uploadImages( { rootState }, images) {
        const { token } = rootState.auth
        await api.uploadImages(token, images);
        router.push('/')
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}