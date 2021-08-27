<template>
  <base-card class="greeting">
    <h2>Take a trip down memory lane with a review of your past ratings!</h2>
    <p>You are wiser now... do you still agree with your past self?</p>
  </base-card>

  <base-card class="hist-card">
    <base-ripple v-if="isLoading"></base-ripple>
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
    grid-column: 3 / 11;
  }

  div.greeting h2,
  div.hist-card h2 {
    padding: .7rem;
    text-align: center;
  }

  div.greeting p {
    font-size: 2rem;
    text-align: center;
  }

  div.hist-card {
    grid-column: 2 / 12;
  }

  .history {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: 1fr;
  }

  @media screen and (max-width: 750px) {
    div.greeting {
      grid-column: 2 / 12;
    }

    div.hist-card {
      grid-column: span 12;
    }
  }

  @media screen and (max-width: 620px) {
    div.greeting {
      grid-column: span 12;
    }
  }
</style>
