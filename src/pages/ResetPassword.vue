<template>
  <auth-wrapper>
    <template slot="title">New Password</template>
    <template slot="image">
      <img src="@/assets/signin.png" alt />
    </template>

    <form-wrapper :process="process" nameSubmit="Save">
      <label for>New Password</label>
      <input type="password"/>

      <label for>Confirm Password</label>
      <input type="password"/>
    </form-wrapper>
  </auth-wrapper>
</template>

<script>
import AuthWrapper from "@/layout/AuthWrapper";
import FormWrapper from "@/layout/FormWrapper";

export default {
  components: {
    AuthWrapper,
    FormWrapper
  }
};
</script>

<style>
</style>