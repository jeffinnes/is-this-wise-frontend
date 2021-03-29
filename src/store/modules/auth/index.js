/* eslint-disable no-underscore-dangle */
import superagent from 'superagent';

// Not name spacing this module
export default {
  state() {
    return {
      userID: null,
      userFullName: null,
    };
  },
  getters: {
    userID(state) {
      return state.userID;
    },
    userFullName(state) {
      return state.userFullName;
    },
    isAuthenticated(state) {
      // Converts it into a boolean in a single line (In case future me doesn't remember why)
      return !!state.userID;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.userID = payload._id;
      state.userFullName = payload.name;
    },
  },
  actions: {
    async authCheck(context) {
      superagent
        .get(`${process.env.VUE_APP_BACKEND_BASE}/auth/check`)
        .withCredentials()
        .set('Content-Type', 'application/json')
        .then((response) => {
          if (response.body.user) {
            context.commit('setUser', response.body.user);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
