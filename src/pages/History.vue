<template>
  <base-card class="greeting">
    <h2>Take a trip down memory lane and review your past ratings!</h2>
  </base-card>
  <base-card class="hist-card">
    <p v-if="isLoading">Loading...</p>
    <div class="history" v-else-if="!isLoading && hasHistory">
      <advice-item v-for="advice in userRatingHistory"
      :key="advice._id"
      :adviceSlipId="advice.adviceSlipID"
      :rating="advice.rating">
      </advice-item>
    </div>
    <h2 v-else>No rating history yet...</h2>
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

<style scoped>
  div.greeting {
    grid-column: 2 / 11;
  }

  div.greeting h2,
  div.hist-card h2 {
    padding: .7rem;
    text-align: center;
  }

  div.hist-card {
    grid-column: 2 / 11;
  }

  .history {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
