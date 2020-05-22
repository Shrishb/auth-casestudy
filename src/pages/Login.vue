<template>
  <auth-wrapper>
    <template slot="title">Sign In</template>
    <template slot="image">
      <img src="@/assets/signin.png" alt="Sign in" />
    </template>
    <form-wrapper :process="process" nameSubmit="Login" @submit="loginUser">
      <label for="email">
        <b>Email:</b>
      </label>
      
      <input type="email" id="email" placeholder="Enter email" v-model="email" />
      <p v-if="emailError" class="error">Please enter valid email</p>

      <label for="password">
        <b>Password:</b>
      </label>
      <input type="password" id="password" placeholder="Enter password" v-model="password" />
      <p v-if="passwordError" class="error">Please enter password</p>

      <a id="reset" @click="goTo('/reset')">Want to reset password?</a>
    </form-wrapper>
  </auth-wrapper>
</template>

<script>
import AuthMixin from "@/mixins/AuthMixin";
import { push } from "@/utils/browserHistory";
export default {
  mixins: [AuthMixin],
  mounted() {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    goTo(route) {
      push(route);
    }
  }
};
</script>