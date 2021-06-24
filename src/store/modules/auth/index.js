/* eslint-disable no-underscore-dangle */
import { Promise } from 'core-js';
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
        console.log('Running authcheck');
        superagent
          .get(`${process.env.VUE_APP_BACKEND_BASE}/auth/check`)
          .withCredentials()
          .set('Content-Type', 'application/json')
          .then((response) => {
            if (response.body.user) {
              console.log('response.body.user');
              console.log(response.body.user);
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
