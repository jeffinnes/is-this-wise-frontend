import { createStore } from 'vuex';

import authModule from './modules/auth/index';
import ratingsModule from './modules/ratings/index';

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth: authModule,
    ratings: ratingsModule,
  },
});
