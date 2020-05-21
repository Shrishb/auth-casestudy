<template>
  <auth-wrapper>
    <template slot="title">Sign In</template>
    <template slot="image">
      <img src="@/assets/signin.png" alt />
    </template>
    <div class="form-wrapper">
      <form-wrapper :process="process" nameSubmit="Login" @submit="loginUser">
        <label for><b>Email:</b></label>
        <input type="email" v-model="email" />
        <p class="error">The email is wrong</p>

        <label for>Password:</label>
        <input type="password" v-model="password" />
        <p class="error">The email is wrong</p>

        <a @click="goTo('/reset')">Want to reset Password?</a>
      </form-wrapper>
    </div>
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

<style lang="scss">
.form-wrapper section div {
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  input {
    all: unset;
    margin-top: 1rem;
    border-bottom: 2px solid #ccc;
    width: 400px;
    @media screen and (max-width: 1155px) {
      width: 100%;
    }
  }
  p.error {
    margin-bottom: 2rem;
    color: #ff0102;
    &:before {
      content: "\274C";
      height: 8px;
      width: 8px;
    }
  }
  a {
    margin-top: 1rem;
    color: #2a7fe1;
    cursor: pointer;
  }
  button {
    margin: 3rem 0;
    padding: 0.5rem 5rem 0.7rem 1rem;
    background: #dbdcde;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 5px;
    position: relative;
    border:none;
    &:after {
      content: "\21e2";
      position: absolute;
      height: 10px;
      width: 10px;
      right: 0;
      margin-right: 20px;
    }
  }
}
</style>