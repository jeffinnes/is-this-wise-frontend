<template>
  <base-card class="intro-card">
    <div class="intro-block">
      <h2 v-if="userFullName">Hello {{ userFullName }}</h2>
      <h3>What do you think about this advice?</h3>
    </div>
  </base-card>

  <base-card class="advice-card">
    <div class="advice-container">
      <base-ripple v-if="!canRequest"></base-ripple>
      <span v-else>{{ advice }}</span>
    </div>

    <div class="user-choice">
      <base-button v-if="canRequest" @click="submitRating('good')">This is Good</base-button>
      <base-button v-if="canRequest" @click="getAdvice">¯\_(ツ)_/¯</base-button>
      <base-button v-if="canRequest" @click="submitRating('bad')">This is Bad</base-button>
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
      adviceID: null,
      canRequest: true,
      userFullName: null,
    };
  },
  methods: {
    getAdvice() {
      // Disable the button preventing the user from requesting during the API rate limit cooldown
      this.canRequest = false;

      setTimeout(() => {
        superagent
          .get('https://api.adviceslip.com/advice')
          .then((adviceRes) => {
            const adviceObj = JSON.parse(adviceRes.text);
            this.advice = adviceObj.slip.advice;
            this.adviceID = adviceObj.slip.id;
            this.canRequest = true;
          })
          .catch((err) => {
            console.error(err);
          });
      }, 9000);

      // this.requestDelay();
    },
    submitRating(rating) {
      superagent
        .post(`${process.env.VUE_APP_BACKEND_BASE}/api/v1/submit-rating`)
        .withCredentials()
        .set('Content-Type', 'application/json')
        .send({
          adviceID: this.adviceID,
          adviceText: this.advice,
          submittedRating: rating,
        })
        .then((response) => {
          console.log(response.body);
          this.getAdvice();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    requestDelay() {
      setTimeout(() => {
        this.canRequest = true;
      }, 9000);
    },
  },
  mounted() {
    this.getAdvice();
    this.userFullName = this.$store.getters.userFullName;
  },
};
</script>

<style scoped>
  div.intro-block h2 {
    margin-bottom: 1rem;
  }

  div.intro-card {
    grid-column: 4 / 9;
  }

  div.advice-container {
    height: 20rem;
    background-color: rgba(240, 248, 255, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 3 / 10;
    font-size: 2.7rem;
    text-align: center;
    padding: 1rem;
    margin-bottom: 1.5rem;
  }

  div.advice-card {
    grid-column: 3 / 10;
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
