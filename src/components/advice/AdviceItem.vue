<template>
  <div class="main">
    <base-spinner v-if="isLoading"></base-spinner>
    <div v-else-if="!isLoading && adviceText">
      <p class="advice-text">"{{ adviceText }}"</p>
      <p>You though this was <span :class="rating">{{ rating }}</span> advice.</p>
    </div>
    <p v-else>Something went wrong...</p>
  </div>
</template>

<script>
import superagent from 'superagent';

export default {
  props: ['adviceSlipId', 'rating'],
  data() {
    return {
      isLoading: false,
      adviceText: null,
    };
  },
  methods: {
    async fetchAdviceText() {
      this.isLoading = true;
      const response = await superagent.get(`${process.env.VUE_APP_BACKEND_BASE}/api/v1/advice-text/${this.adviceSlipId}`);
      this.adviceText = response.body.adviceText;
      this.isLoading = false;
    },
  },
  beforeMount() {
    this.fetchAdviceText();
  },
};
</script>

<style scoped>
.main {
  background-color: blanchedalmond;
  color: black;
  font-size: 2rem;
  margin: 1rem .5rem;
  border: dimgray 1px solid;
  padding: .5rem;
  width: 95%;
}

.advice-text {
  font-weight: bold;
}

.good {
  font-weight: bold;
  color: green;
}

.bad {
  font-weight: bold;
  color: crimson;
}
</style>
