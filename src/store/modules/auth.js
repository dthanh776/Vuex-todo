const state = {
    auth: {
        authenticated: true
    }
};

const getters = {
    isAuthenticated: (state) => state.auth.authenticated
};

const actions = {};

const mutations = {
    TOGGLE_AUTH(state) {
        state.auth.authenticated = !state.auth.authenticated;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
