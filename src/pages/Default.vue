<template>
  <auth-wrapper>
    <template slot="title">Page Not Found</template>
  </auth-wrapper>
</template>

<script>
import AuthMixin from "@/mixins/AuthMixin";
export default {
  mixins: [AuthMixin]
};
</script>