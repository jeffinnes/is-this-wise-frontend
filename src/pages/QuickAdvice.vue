<template>
  <base-card class="intro-card">
    <div class="intro-block">
      <h1>Looking for some advice?</h1>
    </div>
  </base-card>

  <base-card class="advice-card">
    <div class="advice-container">
      <base-ripple v-if="!canRequest"></base-ripple>
      <span v-else>{{ advice }}</span>
    </div>

    <div class="user-choice">
      <base-button v-if="canRequest" @click="getAdvice">More Please!</base-button>
      <div v-if="!canRequest">
        <p class="cooldown">Receiving wisdom from the ancients</p>
      </div>
    </div>
  </base-card>
</template>

<script>
import superagent from 'superagent';

export default {
  data() {
    return {
      advice: '',
      canRequest: true,
    };
  },
  methods: {
    getAdvice() {
      this.canRequest = false;

      superagent
        .get('https://api.adviceslip.com/advice')
        .then((adviceRes) => {
          const adviceObj = JSON.parse(adviceRes.text);
          this.advice = adviceObj.slip.advice;
        })
        .catch((err) => {
          console.error(err);
        });

      this.requestDelay();
    },
    requestDelay() {
      setTimeout(() => {
        this.canRequest = true;
      }, 9000);
    },
  },
  mounted() {
    this.getAdvice();
  },
};
</script>

<style scoped>
div.intro-card {
  grid-column: 4 / 10;
  text-align: center;
}

div.advice-container {
  height: 20rem;
  background-color: rgba(240, 248, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 3 / 11;
  font-size: 2.7rem;
  text-align: center;
  padding: 1rem;
  margin-bottom: 1.5rem;
}

div.advice-card {
  grid-column: 3 / 11;
  padding: 3rem;
}

div.user-choice {
  display: flex;
  justify-content: space-around;
}

p.cooldown {
    height: 5rem;
    font-size: 2rem;
  }
</style>
