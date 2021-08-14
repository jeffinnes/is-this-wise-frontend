<template>
  <a :href="url" :class="provider">
    <img :src="iconSrc" :alt="iconAlt">
    {{ text }}
  </a>
</template>

<script>
export default {
  props: ['url', 'provider', 'text', 'iconSrc', 'iconAlt'],
};
</script>

<style scoped>
  a {
    height: 3rem;
    font-size: 1.5rem;
    border-radius: .2rem;
    display: flex;
    align-items: center;
    margin: 1rem auto;
    padding: .5rem;
  }

  a.github {
    background-color: rgb(254, 240, 210);
    box-shadow: 0 0.2rem 0.8rem rgba(254, 240, 210, 0.3);
    color: rgb(0, 0, 0);
  }

  a.facebook {
    background-color: rgb(24, 119, 242);
    box-shadow: 0 0.2rem 0.8rem rgba(24, 119, 242, 0.3);
    color: white;
  }

  a.google {
    background-color: rgb(255, 255, 255);
    box-shadow: 0 0.2rem 0.8rem rgba(24, 119, 242, 0.3);
    color: rgba(0, 0, 0, 0.54);
  }

  a img {
    height: 100%;
    width: auto;
    margin-right: 2.5rem;
  }
</style>
