<template>
  <p v-if="isLoading">Loading...</p>
  <ul v-else-if="!isLoading && hasHistory">
    <li v-for="advice in userRatingHistory" :key="advice._id">
      {{advice._id}}: {{advice.adviceSlipID}} - {{advice.rating}}
    </li>
  </ul>
  <p v-else>No rating history yet...</p>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    userRatingHistory() {
      return this.$store.getters.userRatingHistory;
    },
    hasHistory() {
      return this.$store.getters.hasHistory;
    },
  },
  methods: {
    async fetchUserRatings() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('fetchUserRatings');
      } catch (error) {
        console.log(error.message);
      }
      this.isLoading = false;
    },
  },
  created() {
    this.fetchUserRatings();
  },
  mounted() {
  },
};
</script>

<style>
</style>
