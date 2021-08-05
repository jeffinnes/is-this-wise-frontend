<template>
  <div class="agg-advice-item">
    <p class="advice-text">{{ adviceText }}</p>
    <div class="agg-bar-row">
      <div class="agg-bar">
        <div class="good-bar" :style="goodBarShift"></div>
      </div>
    </div>
    <div class="labels">
      <p>Good ({{ goodRatings }})</p>
      <p>Bad ({{ badRatings }})</p>
    </div>
    <div class="total">
      <p>Total Ratings: {{ goodRatings + badRatings }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['adviceText', 'goodRatings', 'badRatings'],
  data() {
    return {};
  },
  computed: {
    goodPercent() {
      const num = this.goodRatings / (this.goodRatings + this.badRatings);
      return Math.round((num + Number.EPSILON) * 100);
    },
    badPercent() {
      const num = this.badRatings / (this.goodRatings + this.badRatings);
      return Math.round((num + Number.EPSILON) * 100);
    },
    goodBarShift() {
      return {
        transform: `translate(-${100 - this.goodPercent}%)`,
      };
    },
  },
};
</script>

<style scoped>
  div.agg-advice-item {
    font-size: 1.3rem;
    width: 20rem;
    min-height: 20rem;
    margin: 1rem;
    background-color: rgba(236, 194, 133, 1);
    color: rgba(45, 52, 54, 1);
    padding: 1rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 10rem 5rem 3rem 2rem;
  }

  p.advice-text {
    font-size: 1.6rem;
    text-align: center;
    padding: 0.9rem;
    grid-column: 1 / 13;
  }

  div.agg-bar-row {
    grid-column: 2 / 12;
    display: flex;
  }

  div.agg-bar {
    border: .2rem solid rgba(45, 52, 54, 1);
    background-color: rgb(178, 34, 34);
    height: 25%;
    width: 100%;
    margin: auto;
    overflow: hidden;
  }

  div.good-bar {
    width: 100%;
    height: 100%;
    background-color: rgb(26, 102, 26);
  }

  div.labels {
    grid-column: 2 / 12;
    display: flex;
    justify-content: space-between;
  }

  div.total {
    grid-column: 2 / 12;
    display: flex;
    justify-content: center;
  }
</style>
