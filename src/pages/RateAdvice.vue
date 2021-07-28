<template>
  <div class="intro-block">
    <h1 v-if="userFullName">Hello {{ userFullName }}</h1>
    <h1>Ready to help rate some advice?</h1>
    <h2>You are in the right spot!</h2>
  </div>

  <div class="advice-container">
    <span>{{ advice }}</span>
  </div>

  <div class="user-choice">
    <button v-if="canRequest" @click="submitRating('good')">This is Good</button>
    <button v-if="canRequest" @click="getAdvice">¯\_(ツ)_/¯</button>
    <button v-if="canRequest" @click="submitRating('bad')">This is Bad</button>
    <p v-if="!canRequest">
      Waiting for the API rate limit cooldown... (Wouldn't an animation be better?)
      <base-spinner></base-spinner>
    </p>
  </div>
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

      superagent
        .get('https://api.adviceslip.com/advice')
        .then((adviceRes) => {
          const adviceObj = JSON.parse(adviceRes.text);
          this.advice = adviceObj.slip.advice;
          this.adviceID = adviceObj.slip.id;
        })
        .catch((err) => {
          console.error(err);
        });

      this.requestDelay();
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
div.user-choice button {
  border-top: 1px solid #00df7e;
  background: #24db8c;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#00b667),
    to(#24db8c)
  );
  background: -webkit-linear-gradient(top, #00b667, #24db8c);
  background: -moz-linear-gradient(top, #00b667, #24db8c);
  background: -ms-linear-gradient(top, #00b667, #24db8c);
  background: -o-linear-gradient(top, #00b667, #24db8c);
  padding: 5px 10px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  -webkit-box-shadow: rgba(0, 0, 0, 1) 0 1px 0;
  -moz-box-shadow: rgba(0, 0, 0, 1) 0 1px 0;
  box-shadow: rgba(0, 0, 0, 1) 0 1px 0;
  text-shadow: rgba(0, 0, 0, 0.4) 0 1px 0;
  color: #453645;
  font-size: 14px;
  font-family: "Literata", serif;
  text-decoration: none;
  vertical-align: middle;
  font-size: 1.5rem;
  width: 15rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

div.user-choice button:hover {
  border-top-color: #00703f;
  background: #00703f;
  color: #ccc;
}

div.user-choice button:active {
  border-top-color: #014727;
  background: #014727;
}

div.user-choice button span {
  text-align: center;
}
</style>