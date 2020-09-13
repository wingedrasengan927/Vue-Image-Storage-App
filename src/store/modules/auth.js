import api from '../../API/imgur'
import qs from 'qs'

const state = {
    token: window.localStorage.getItem('imgur_token')
}

const actions = {
    // we do not call mutations directly
    // instead we use commit functions
    logIn: () => {
        return api.login();
    },
    finalizeLogin({ commit }, hash) {
        const query = qs.parse(hash.replace('#', ''));
        const token = query.access_token
        commit('setToken', token);
        window.localStorage.setItem('imgur_token', query.access_token)
    },
    logOut: ({ commit }) => {
        commit('setToken', null)
        window.localStorage.removeItem('imgur_token')
    }
}

const getters = {
    isLoggedIn: state => !!state.token // !! converts the truthy or falsy value to boolean true or false
}

const mutations = {
    setToken(state, token) {
        state.token = token;
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}