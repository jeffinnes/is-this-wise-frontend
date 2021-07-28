<template>
  <base-card class="intro-block">
    <h1 v-if="userFullName">Welcome back {{ userFullName }}!</h1>
    <h3>
      Human history has produced a plethora of wisdom nuggets, but how much of
      it is actually any good?
    </h3>
    <h3>
      "Is this wise?" is an attempt to crowdsource the answer to that question.
    </h3>
    <p>Check out what others think of the advice below.
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

  div.intro-block {
    background-color: rgba(45, 52, 54, 1);
  }
</style>
