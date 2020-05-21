<template>
  <auth-wrapper>
    <template slot="title">New Password</template>
    <template slot="image">
      <img src="@/assets/new-password.png" alt="Reset" />
    </template>
    <div class="form-wrapper">
      <form-wrapper :process="process" nameSubmit="Save">
        <label for><b>New Password:</b></label>
        <input type="password"/>
        <label for><b>Confirm Password:</b></label>
        <input type="password"/>
      </form-wrapper>
    </div>
  </auth-wrapper>
</template>

<script>
import AuthMixin from "@/mixins/AuthMixin";

import AuthWrapper from "@/layout/AuthWrapper";
import FormWrapper from "@/layout/FormWrapper";

export default {
  components: {
    AuthWrapper,
    FormWrapper
  },
  mixins:[AuthMixin]
};
</script>

<style>
</style>