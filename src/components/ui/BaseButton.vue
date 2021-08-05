<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '/',
    },
    mode: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  text-align: center;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: rgb(175, 73, 72);
  border: .3rem solid rgba(45, 52, 54, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  font-family: "Literata", serif;
  font-size: 1.5rem;
  width: 15rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: rgb(116, 74, 111);
  border-color: #270041;
}

.flat {
  /* background-color: transparent;
  color: #3a0061;
  border: none; */
}

.outline {
  /* background-color: transparent;
  border-color: #270041;
  color: #270041; */
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  /* background-color: #edd2ff; */
}
</style>
