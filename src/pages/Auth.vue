<template>
  <div class="login-container">
    <base-card class="login-card">
      <h2 class="login-cta">Login In</h2>
      <login-button
        :href="baseURL + '/auth/github'"
        provider="github"
        :iconSrc="githubLogo"
        iconAlt="GitHub Octocat Logo"
        text="Log in with GitHub"
      ></login-button>
      <login-button
        :href="baseURL + '/auth/google'"
        provider="google"
        :iconSrc="googleLogo"
        iconAlt="Google Logo"
        text="Log in with Google"
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
import githubLogo from '../assets/oauth-logos/github/GitHub-Mark.png';
import facebookLogo from '../assets/oauth-logos/facebook/fb_logo.svg';
import googleLogo from '../assets/oauth-logos/google/google_light_normal.svg';

export default {
  components: {
    LoginButton,
  },
  data() {
    return {
      baseURL: process.env.VUE_APP_BACKEND_BASE,
      githubLogo,
      facebookLogo,
      googleLogo,
    };
  },
};
</script>

<style scoped>
  div.login-container {
    grid-column: 5 / 9;
  }

  h2.login-cta {
    text-align: center;
    margin: 1rem 0 2.5rem 0;
  }
</style>
