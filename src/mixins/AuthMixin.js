import AuthWrapper from "@/layout/AuthWrapper";
import FormWrapper from "@/layout/FormWrapper";

import * as auth from "@/utils/auth-client";

export default {
  components: {
    AuthWrapper,
    FormWrapper,
  },
  data() {
    return {
      process: {
        loading: false,
        error: null,
      },
      email: null,
      password: null,
    };
  },
  methods: {
      async loginUser() {
      const { email, password } = this;
      const result = await auth.login({
        email,
        password,
      });

      if(result){
        
      }

    },
    async resetPassword() {
      let result = auth.login({
        email,
        password,
      });
    },
  },
};