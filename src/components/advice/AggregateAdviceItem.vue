<template>
  <div class="agg-advice-item">
    <p class="advice-text">{{ adviceText }}</p>
    <div class="agg-bar-row">
      <div class="agg-bar" :style="goodBarShift">

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
      // These
      const colorStopGood = this.goodPercent - 1;
      const colorStopMid = this.goodPercent;
      const colorStopBad = this.goodPercent + 1;

      return {
        background: `linear-gradient(90deg, rgba(26,102,26,1) 0%, rgba(26,102,26,0.85) ${colorStopGood}%, rgba(255,255,255,0) ${colorStopMid}%, rgba(178,34,34,0.85) ${colorStopBad}%, rgba(178,34,34,1) 100%)`,
      };
    },
  },
};
</script>

<style scoped>
  div.agg-advice-item {
    font-size: 1.3rem;
    font-family: 'Montserrat', sans-serif;
    margin: 1rem;
    background-color: rgba(236, 194, 133, 1);
    color: rgba(45, 52, 54, 1);
    padding: 1rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    grid-column: span 4;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto 5rem 3rem 2rem;
  }

  p.advice-text {
    font-size: 1.6rem;
    line-height: 2rem;
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

  div.labels p {
    font-weight: 700;
  }

  div.total {
    grid-column: 2 / 12;
    display: flex;
    justify-content: center;
    font-weight: 700;
  }

  @media screen and (max-width: 1200px) {
    div.agg-advice-item {
      grid-column: span 6;
    }
  }

  @media screen and (max-width: 620px) {
    div.agg-advice-item {
      grid-column: 2 / 12;
    }
  }

  @media screen and (max-width: 450px) {
    div.agg-advice-item {
      grid-column: span 12;
    }

    p {
      font-size: 1.8rem;
    }
  }
</style>
