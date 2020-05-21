<template>
  <auth-wrapper>
    <template slot="title">Sign In</template>
    <template slot="image">
      <img src="@/assets/signin.png" alt />
    </template>

    <form-wrapper :process="process" nameSubmit="Login">
      <label for>Email</label>
      <input type="email" name id />

      <label for>Password</label>
      <input type="email" name id />

      <a @click="goTo('/articles')"> Want to reset Password? </a>
    </form-wrapper>
  </auth-wrapper>
</template>

<script>

import AuthMixin from "@/mixins/AuthMixin";
import { push } from "@/utils/browserHistory";
export default {
  mixins: [AuthMixin],
  mounted() {
    this.loginUser();
  },
  data() {
    return {};
  },
  computed: {
  },
  methods: {
      goTo(route) {
      push(route)
    }
  }
};
</script>

<style>
</style>