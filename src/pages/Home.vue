<template>
  <base-card class="intro-block">
    <h1 v-if="userFullName">Welcome back {{ userFullName }}!</h1>
    <p class="intro-text">
      Human history has produced a plethora of wisdom nuggets, but how much of
      it is actually any good?
    </p>
    <p class="intro-text">
      "Is this wise?" is an attempt to crowdsource the answer to that question.
    </p>
    <p class="call-to-action">Check out what others think of the advice below.
      When you're ready to lend a hand, create an account and start rating!</p>
  </base-card>

  <div class="user-choice">
    <router-link to="/quick-advice"><span>I'm just here for some free advice.</span></router-link>
    <router-link to="/rate-advice"><span>I want to help!</span></router-link>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: 'Home',
  data() {
    return {
      userFullName: null,
    };
  },
  components: {

  },
  mounted() {
    this.userFullName = this.$store.getters.userFullName;
  },
};
</script>

<style scoped>
  p {
    text-align: center;
  }

  p.intro-text {
    font-size: 2.5rem;
  }

  p.call-to-action{
    margin-top: 1.3rem;
  }

  div.intro-block {
    background-color: rgba(45, 52, 54, 1);
  }
</style>