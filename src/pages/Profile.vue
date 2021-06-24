<template>
  <ul>
    <li v-for="advice in userRatingHistory" :key="advice._id">
      {{ advice._id }} - {{ advice.rating }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    userRatingHistory() {
      console.log(this.$store.getters.userRatingHistory);
      return this.$store.getters.userRatingHistory;
    },
  },
  methods: {
    async fetchUserRatings() {
      try {
        this.$store.dispatch('fetchUserRatings');
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  beforeMount() {
    this.fetchUserRatings();
  },
  mounted() {
  },
};
</script>

<style>
</style>
