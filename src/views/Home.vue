<template>
  <div class="intro-block">
    <h1>Welcome!</h1>
    <p>
      Human history has produced a plethora of wisdom nuggets, but how much of
      it is actually any good?
    </p>
    <p>
      "Is this wise?" is an attempt to crowdsource the answer to that question.
    </p>
  </div>

  <div class="user-choice">
    <router-link to="/quick-advice"><span>I'm just here for some free advice.</span></router-link>
    <a href="#"><span>I want to help!</span></a>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: 'Home',
  components: {

  },
};
</script>
