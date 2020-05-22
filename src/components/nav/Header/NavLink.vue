<template>
  <a :href="routeTo">{{ text }}</a>
</template>

<script>
const props = {
  text: {
    type: String,
    require: true
  },
  routeTo: {
    type: String,
    default: "#"
  }
};

export default {
  props
};
</script>

<style scoped>
</style>