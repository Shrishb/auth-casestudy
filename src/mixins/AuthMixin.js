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
        data: null,
      },
      email: "",
      password: "",
      emailError: false,
      passwordError: false,
    };
  },
  methods: {
    async loginUser() {
      this.checkLogin();
      
      const { email, password, emailError, passwordError } = this;

      if (!emailError || !passwordError) {
        this.process["loading"] = true;

        const result = await auth.login({
          email,
          password,
        });

        const {token } = result;

        if (token) {
          this.process["success"] = true;
          this.process["loading"] = false;
        }else{
          this.process["error"] = true;
          this.process["loading"] = false;
        }
        this.process["data"] = result;

      }
    },
    checkLogin() {
      this.resetProcess();
      const { email, password } = this;

      this.emailError = email.length>0? false : true;
      this.passwordError = password.length>0? false : true ;
    },
    async resetPassword() {
      let result = auth.login({
        email,
        password,
      });
    },
    resetProcess(){
      this.process = {
        loading: false,
        error: null,
        success: null,
        data: null,
      };
    }
  },
};