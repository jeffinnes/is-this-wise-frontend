import superagent from 'superagent';

export default {
  state() {
    return {
      userRatingHistory: [],
      allRatings: [],
    };
  },
  getters: {
    userRatingHistory(state) {
      return state.userRatingHistory;
    },
    allRatings(state) {
      return state.allRatings;
    },
  },
  mutations: {
    setUserRatings(state, payload) {
      state.userRatingHistory = payload.userRatingHistory;
    },
    setAllRatings(state, payload) {
      state.allRatings = payload.allRatings;
    },
  },
  actions: {
    async fetchUserRatings(context) {
      superagent
        .get(`${process.env.VUE_APP_BACKEND_BASE}/api/v1/user-ratings`)
        .withCredentials()
        .set('Content-Type', 'application/json')
        .then((response) => {
          if (response.body) {
            context.commit('setUserRatings', response.body.ratingHistory);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async fetchAllRatings() {
      // Get all the ratings
    },
  },
};
