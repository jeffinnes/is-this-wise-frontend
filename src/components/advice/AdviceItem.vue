<template>
  <div class="main">
    <base-spinner v-if="isLoading"></base-spinner>
    <div v-else-if="!isLoading && adviceText">
      <p>Advice: {{ adviceText }}</p>
      <p>You though this advice was: {{ rating }}</p>
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
      // ToDo this end point doesn't work.
      // Come back to this after getting the advice text storing properly
      // See Jira issue ITW-24
      const response = await superagent.get(`https://api.adviceslip.com/advice/${this.adviceSlipId}`);
      console.log(response);
      this.adviceText = 'slipObj.slip.advice;';
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
}
</style>
