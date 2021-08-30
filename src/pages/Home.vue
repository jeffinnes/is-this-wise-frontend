<template>
  <base-card class="intro-block">
    <h1 v-if="userFullName">Welcome back {{ userFullName }}!</h1>
    <p class="intro-text">
      Human history has produced a plethora of advice, but how much of
      it is actually any good? "<span class="bold">Is this wise?</span>"
      is an attempt to crowdsource the answer to that question.
    </p>
    <p class="call-to-action">Check out what others think of the advice below.
      When you're ready to lend a hand, create an account or login and start rating!</p>
  </base-card>

  <div class="user-choice">
    <base-button link :to="'/quick-advice'">
      I'm just here for some free advice.
    </base-button>
    <base-button v-if="isLoggedIn" link :to="'/rate-advice'">
      I'm ready to help!
    </base-button>
    <base-button v-else link :to="'/login'">
      Login to start rating!
    </base-button>
  </div>

  <base-card class="rated-advice">
    <base-ripple v-if="isLoading"></base-ripple>
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
      isLoading: false,
    };
  },
  methods: {
    async fetchAllRatings() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('fetchAllRatings');
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error.message);
      }
      this.isLoading = false;
    },
  },
  computed: {
    allRatings() {
      return this.$store.getters.allRatings;
    },
    userFullName() {
      return this.$store.getters.userFullName;
    },
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  created() {
    this.fetchAllRatings();
  },
};
</script>

<style scoped>
  div.intro-block {
    grid-column: 3 / 11;
    padding: 2rem;
  }

  div.user-choice {
    grid-column: 3 / 11;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  div.rated-advice {
    grid-column: 3 / 11;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: 1fr;
  }

  span.bold {
    font-weight: bold;
  }

  p.intro-text {
    font-size: 2.5rem;
    margin-top: 1rem;
  }

  p.call-to-action{
    margin-top: 1.3rem;
    font-size: 1.9rem;
  }

  div.intro-block {
    background-color: rgba(45, 52, 54, 1);
  }

  @media screen and (max-width: 750px) {
  div.rated-advice {
    grid-column: 2 / 12;
  }

  h1 {
    font-size: 2rem;
  }

  p.intro-text {
    font-size: 1.5rem;
  }

  p.call-to-action{
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 620px) {
  div.rated-advice {
    grid-column: 3 / 11;
  }

  div.intro-block {
    grid-column: 1 / 13;
  }

  div.user-choice {
    grid-column: 1/13;
  }
}

@media screen and (max-width: 450px) {
  div.rated-advice {
    grid-column: span 12;
  }
}
</style>
