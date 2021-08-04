<template>
  <base-card class="intro-block">
    <h1 v-if="userFullName">Welcome back {{ userFullName }}!</h1>
    <p class="intro-text">
      Human history has produced a plethora of wisdom nuggets, but how much of
      it is actually any good?
    </p>
    <p class="intro-text">
      "Is this wise?" is an attempt to crowdsource the answer to that question.
    </p>
    <p class="call-to-action">Check out what others think of the advice below.
      When you're ready to lend a hand, create an account and start rating!</p>
  </base-card>

  <div class="user-choice">
    <base-button link :to="'/quick-advice'">
      I'm just here for some free advice.
    </base-button>
    <base-button link :to="'/rate-advice'">
      I want to help!
    </base-button>
  </div>

  <base-card class="rated-advice">
    <aggregate-advice-item v-for="adviceObj in allRatings"
    :key="adviceObj._id"
    :adviceText="adviceObj.adviceText"
    :goodRatings="adviceObj.timesRatedGood"
    :badRatings="adviceObj.timesRatedBad"
    ></aggregate-advice-item>
  </base-card>
</template>

<script>
import AggregateAdviceItem from '../components/advice/AggregateAdviceItem.vue';

export default {
  name: 'Home',
  components: {
    AggregateAdviceItem,
  },
  data() {
    return {
      userFullName: null,
      isLoading: false,
    };
  },
  methods: {
    async fetchAllRatings() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('fetchAllRatings');
      } catch (error) {
        console.log(error.message);
      }
      this.isLoading = false;
    },
  },
  computed: {
    allRatings() {
      return this.$store.getters.allRatings;
    },
  },
  created() {
    this.fetchAllRatings();
  },
  mounted() {
    this.userFullName = this.$store.getters.userFullName;
  },
};
</script>

<style scoped>
  div.intro-block {
    grid-column: 3 / 11;
    font-size: 1.6rem;
  }

  div.user-choice {
    grid-column: 3 / 11;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  div.rated-advice {
    grid-column: 3 / 11;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  p {
    text-align: center;
  }

  p.intro-text {
    font-size: 2.5rem;
    margin-top: 1rem;
  }

  p.call-to-action{
    margin-top: 1.3rem;
  }

  div.intro-block {
    background-color: rgba(45, 52, 54, 1);
  }

</style>
