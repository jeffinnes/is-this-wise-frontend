<template>
  <div class="login-container">
    <base-card class="login-card">
      <login-button
        :href="baseURL + '/auth/github'"
        provider="github"
        :iconSrc="githubLogo"
        iconAlt="GitHub Octocat Logo"
        text="Log in with GitHub"
      ></login-button>
      <login-button
        :href="baseURL + '/auth/facebook'"
        provider="facebook"
        :iconSrc="facebookLogo"
        iconAlt="Facebook Logo"
        text="Log in with Facebook"
      ></login-button>
    </base-card>
  </div>
</template>

<script>
import LoginButton from '../components/ui/LoginButton.vue';
import githubLogo from '../assets/oauth-logos/github/GitHub-Mark-120px-plus.png';
import facebookLogo from '../assets/oauth-logos/facebook/f_logo_RGB-Blue_58.png';

export default {
  components: {
    LoginButton,
  },
  data() {
    return {
      baseURL: process.env.VUE_APP_BACKEND_BASE,
      githubLogo,
      facebookLogo,
    };
  },
};
</script>

<style scoped>
  div.login-container {
    grid-column: 5 / 9;
  }
</style>
