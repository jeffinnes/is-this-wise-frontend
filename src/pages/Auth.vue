<template>
  <a :href="baseURL + '/auth/github'">Log In with GitHub</a>
</template>

<script>
export default {
  data() {
    return {
      baseURL: process.env.VUE_APP_BACKEND_BASE,
    };
  },
};
</script>

<style>

</style>
