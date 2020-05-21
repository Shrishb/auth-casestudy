import AuthWrapper from "@/layout/AuthWrapper";
import FormWrapper from "@/layout/FormWrapper";

import * as auth from "@/utils/auth-client";

export default {
  components: {
    AuthWrapper,
    FormWrapper
  },
  data() {
    return {
      process: {
        loading: false,
        error: null,
      },
    };
  },
  methods: {
    loginUser() {
      auth.login({
        email,
        password,
      });
    },
    resetPassword() {
      let { newPassword, access_token } = this.payload;
    },
  },
};
