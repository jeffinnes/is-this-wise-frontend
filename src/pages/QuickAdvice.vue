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
      <button @click="getAdvice">More Please!</button>
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
