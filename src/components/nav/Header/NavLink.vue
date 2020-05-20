<template>
  <a href="#">{{ title }}</a>
</template>

<script>
const props = {
  title: {
    type: String,
    require: true
  }
};

export default {
  props
};
</script>

<style>
</style>