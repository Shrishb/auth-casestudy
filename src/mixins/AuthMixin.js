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
        success: null,
        data:null
      },
      email: null,
      password: null,
    };
  },
  methods: {
      async loginUser() {
      const { email, password } = this;
      this.process["loading"] = true;

      const result = await auth.login({
        email,
        password,
      });

      if(result){
        this.process["success"] = true;
        this.process["data"] = result;
        this.process["loading"] = false;
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