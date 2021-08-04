<template>
  <div>
    <p>{{ adviceText }}</p>
    <p>Times Rated Good: {{ goodRatings }}</p>
    <p>Times Rated Bad: {{ badRatings }}</p>
  </div>
</template>

<script>
export default {
  props: ['adviceText', 'goodRatings', 'badRatings'],
};
</script>

<style scoped>
  div {
    width: 20rem;
    min-height: 20rem;
  }
</style>
