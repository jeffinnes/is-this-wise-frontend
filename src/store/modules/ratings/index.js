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
    hasHistory(state) {
      return state.userRatingHistory.length > 0;
    },
    allRatings(state) {
      console.log(state.allRatings);
      return state.allRatings;
    },
  },
  mutations: {
    setUserRatings(state, payload) {
      state.userRatingHistory = payload;
    },
    setAllRatings(state, payload) {
      state.allRatings = payload;
    },
  },
  actions: {
    async fetchUserRatings(context) {
      const response = await superagent.get(`${process.env.VUE_APP_BACKEND_BASE}/api/v1/user-ratings`)
        .withCredentials()
        .set('Content-Type', 'application/json');

      if (response.body) {
        context.commit('setUserRatings', response.body.ratingHistory);
      }
    },
    async fetchAllRatings(context) {
      const response = await superagent.get(`${process.env.VUE_APP_BACKEND_BASE}/api/v1/all-ratings`);
      console.log(response.body);
      if (response.body) {
        context.commit('setAllRatings', response.body);
      }
    },
  },
};
