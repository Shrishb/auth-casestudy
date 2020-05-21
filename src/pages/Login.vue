<template>
  <auth-wrapper>
    <template slot="title">Sign In</template>
    <template slot="image">
      <img src="@/assets/signin.png" alt />
    </template>

    <form-wrapper :process="process" nameSubmit="Login" @submit="loginUser">
      <label for>Email:</label>
      <input type="email" v-model="email"/>

      <label for>Password:</label>
      <input type="password" v-model="password"/>

      <a @click="goTo('/reset')">Want to reset Password?</a>

    </form-wrapper>
  </auth-wrapper>
</template>

<script>
import AuthMixin from "@/mixins/AuthMixin";
import { push } from "@/utils/browserHistory";
export default {
  mixins: [AuthMixin],
  mounted() {
  },
  data() {
    return {
    };
  },
  computed: {},
  methods: {
    goTo(route) {
      push(route);
    }
  }
};
</script>

<style>
</style>