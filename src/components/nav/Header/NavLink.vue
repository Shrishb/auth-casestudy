<template>
  <a href="#">{{ text }}</a>
</template>

<script>
const props = {
  text: {
    type: String,
    require: true
  }
};

export default {
  props
};
</script>

<style scoped>
</style>