<template>
  <header>
    <router-link to="/" class="nav-link">Is this wise?</router-link>
  </header>

  <nav>
    <router-link v-if="isLoggedIn" to="/rate-advice" class="nav-link">Rate Advice</router-link>
    <router-link v-if="isLoggedIn" to="/history" class="nav-link">My History</router-link>
    <div v-if="isLoggedIn" class="nav-link" @click="logout">Logout</div>
    <router-link v-else to="/login" class="nav-link">Login</router-link>
  </nav>

  <main class="content-box">
    <router-view />
  </main>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout');
      this.$router.replace('/');
    },
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
  background-image: url('./assets/background/HillsandMountains-sunset.svg');
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

a.nav-link,
div.nav-link {
  color: rgba(234, 246, 229, 1);
  height: 100%;
  padding: 0 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 500ms ease-in-out, color 300ms ease-in-out;
}

a.nav-link:hover,
div.nav-link:hover {
  color: rgb(45, 52, 54);
  background-color: rgb(255, 115, 91);
}

main.content-box {
  grid-column: span 12;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: max-content;
  color: rgba(234, 246, 229, 1);
  padding: 2rem 0;
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
  }
}

@media screen and (max-width: 620px) {
  #app {
    grid-template-rows: 4.5rem 4.5rem auto;
  }

  header {
    grid-column: span 12;
    justify-content: center;
  }

  nav {
    grid-column: span 12;
    justify-content: space-between;
  }
}

@media screen and (max-width: 450px) {
  html {
    background-size: auto 900px;
  }

  #app {
    overflow: scroll;
  }

  nav a.nav-link,
  div.nav-link {
    text-align: center;
    width: 33%;
    padding: 0;
    border: wheat 1px solid
  }
}
</style>
