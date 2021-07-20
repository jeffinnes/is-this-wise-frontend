<template>
  <base-card>
    <p v-if="isLoading">Loading...</p>
    <div v-else-if="!isLoading && hasHistory">
      <advice-item v-for="advice in userRatingHistory"
      :key="advice._id"
      :adviceSlipId="advice.adviceSlipID"
      :rating="advice.rating">
      </advice-item>
    </div>
    <p v-else>No rating history yet...</p>
  </base-card>
</template>

<script>
import AdviceItem from '../components/advice/AdviceItem.vue';

export default {
  components: {
    AdviceItem,
  },
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
  mounted() {},
};
</script>

<style>
</style>
