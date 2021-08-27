<template>
  <div class="advice-item">
    <base-ripple v-if="isLoading"></base-ripple>
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
  .advice-item {
    background-color: rgba(236, 194, 133, 1);
    color: rgba(45, 52, 54, 1);
    font-family: 'Montserrat', sans-serif;
    font-size: 1.3rem;
    margin: 1rem;
    padding: 1rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    grid-column: span 4;
  }

  .advice-text {
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .good {
    font-weight: bold;
    color: green;
  }

  .bad {
    font-weight: bold;
    color: crimson;
  }

  @media screen and (max-width: 750px) {
    .advice-item {
      grid-column: span 6;
    }
  }

  @media screen and (max-width: 450px) {
    .advice-item {
      grid-column: 2 / 12;
    }

    p {
      font-size: 1.8rem;
    }
  }
</style>
