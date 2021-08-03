<template>
  <header>
    <router-link to="/" class="nav-link">Is this wise?</router-link>
  </header>

  <nav>
    <router-link to="/history" class="nav-link">My History</router-link>
    <router-link to="/login" class="nav-link">Login</router-link>
  </nav>

  <main class="content-box">
    <router-view />
  </main>
</template>

<script>
export default {
  data() {
    return {
      ready: false,
    };
  },
  methods: {
    /* async checkAuth() {
      console.log('app.vue check auth');
      await this.$store.dispatch('authCheck');
      console.log('app.vue check auth complete');
      this.ready = true;
    }, */
  },
  calculated: {
    authenticated() {
      // ToDo I think I was going to use this to control the nav contents
      // but it doesn't work
      return this.$store.getters.isAuthenticated;
    },
  },
  created() {
    // this.checkAuth();
  },
};
</script>

<style>
/*Font Key
For headers
font-family: 'Roboto Slab', serif;

For most other body stuff
font-family: 'Raleway', sans-serif;
font-family: 'Montserrat', sans-serif;
*/
html {
  height: 100%;
  font-size: 10px;
  background-image: url('./assets/background/HillsandMountains-sunset.png');
  background-size: cover;
  background-attachment: fixed;
}

body {
  /* background-color: rgb(2, 60, 104); */
  font-family: 'Raleway', sans-serif;
  height: 100%;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* background-color: rgb(2, 60, 104); */
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 4.5rem auto;
  height: 100%;
}

h1 {
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto Slab', serif;
}

h2 {
  font-size: 3rem;
  font-weight: bold;
  font-family: 'Roboto Slab', serif;
}

h3 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  font-family: 'Roboto Slab', serif;
}

header,
nav {
  grid-column: span 6;
  height: 4.5rem;
  background-color: rgba(45, 52, 54, 1);
  font-family: 'Roboto Slab', serif;
  font-size: 2rem;
  color: rgba(234, 246, 229, 1);
  display: flex;
  align-items: center;
}

nav {
  justify-content: flex-end;
}

a.nav-link {
  color: rgba(234, 246, 229, 1);
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 500ms ease-in-out, color 300ms ease-in-out;
}

a.nav-link:hover {
  color: rgb(45, 52, 54);
  background-color: rgb(255, 115, 91);
}

main.content-box {
  grid-column: span 12;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  color: rgba(234, 246, 229, 1);
  padding: 2rem 0;
}

/* Home page */

div.intro-block {
  grid-column: 3 / 10;
  font-size: 1.6rem;
  margin: 0 auto 0 auto;
}

div.user-choice {
  grid-column: 3 / 10;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

/* Quick advice rules */

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

/* Responsive Rules */

@media screen and (max-width: 1200px) {
}

@media screen and (max-width: 950px) {
}

@media screen and (max-width: 750px) {
  header {
    grid-column: span 4;
  }

  nav {
    grid-column: span 8;
    justify-content: space-around;
  }

  a.nav-link {
    width: 100%;
  }
}

@media screen and (max-width: 620px) {
  input {
    font-size: 2rem;
  }

  div.breadcrumb span#page-title {
    display: none;
  }
}

@media screen and (max-width: 450px) {
}
</style>
