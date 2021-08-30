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
    authCheck(context) {
      return new Promise((resolve, reject) => {
        superagent
          .get(`${process.env.VUE_APP_BACKEND_BASE}/auth/check`)
          .withCredentials()
          .set('Content-Type', 'application/json')
          .then((response) => {
            if (response.body.user) {
              context.commit('setUser', response.body.user);
            }
            resolve();
          })
          .catch((err) => {
            console.log(err);
            reject();
          });
      });
    },
    logout(context) {
      return new Promise((resolve, reject) => {
        // Gotta send it withCredentials or the backend doesn't know which session to end
        // Seems obvious now that I know it...
        superagent.get(`${process.env.VUE_APP_BACKEND_BASE}/auth/logout`)
          .withCredentials()
          .then((response) => {
            if (response.body.user) {
              context.commit('setUser', response.body.user);
            }
            resolve();
          })
          .catch((err) => {
            console.log(err);
            reject();
          });
      });
    },
  },
};
