<template>
  <auth-wrapper>
    <template slot="title">New Password</template>
    <template slot="image">
      <img src="@/assets/new-password.png" alt="Reset" />
    </template>
    <div class="form-wrapper">
      <form-wrapper :process="process" nameSubmit="Save" @submit="resetPassword">
        <label for="newPassword">
          <b>New Password:</b>
        </label>
        <input type="password" id="newPassword" v-model="newPassword"/>
        <p v-if="newPasswordError" class="error">Please enter new passsword</p>
        <label for="confirmPassword">
          <b>Confirm Password:</b>
        </label>
        <input type="password" id="confirmPassword" v-model="confirmPassword"/>
        <p v-if="confirmPasswordError" class="error">Please enter confirm password</p>
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
  mixins: [AuthMixin]
};
</script>

<style>
</style>