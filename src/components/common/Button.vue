<template>
  <button>{{ text }}</button>
</template>

<script>
const props = {
  text: {
    type: String,
    require: true
  },
  disabled: {
    type: Boolean,
    default: () => false
  }
};

export default {
  props
};
</script>

<style>
</style>