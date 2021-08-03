<template>
  <base-card class="intro-card">
    <div class="intro-block">
      <h1>Looking for some advice?</h1>
    </div>
  </base-card>

  <base-card class="advice-card">
    <div class="advice-container">
      <span>{{ advice }}</span>
    </div>

    <div class="user-choice">
      <base-button @click="getAdvice">More Please!</base-button>
    </div>
  </base-card>
</template>

<script>
import superagent from 'superagent';

export default {
  data() {
    return {
      advice: '',
    };
  },
  methods: {
    getAdvice() {
      superagent
        .get('https://api.adviceslip.com/advice')
        .then((adviceRes) => {
          const adviceObj = JSON.parse(adviceRes.text);
          this.advice = adviceObj.slip.advice;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  mounted() {
    this.getAdvice();
  },
};
</script>

<style scoped>
div.intro-card {
  grid-column: 4 / 9;
  text-align: center;
}

div.advice-card {
  grid-column: 3 / 10;
  padding: 3rem;
}
</style>
