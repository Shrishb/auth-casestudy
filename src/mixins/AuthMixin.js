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
      newPassword: "",
      confirmPassword: "",
      emailError: false,
      passwordError: false,
      newPasswordError: false,
      confirmPasswordError: false,
    };
  },
  methods: {
    async loginUser() {
      this.checkLogin();

      const { email, password, emailError, passwordError } = this;

      if (!emailError && !passwordError) {
        this.process["loading"] = true;

        const result = await auth.login({
          email,
          password,
        });
        
        this.updateProcess(result);
      }
    },
    checkLogin() {
      this.resetProcess();
      const { email, password, checkLength } = this;

      this.emailError = checkLength(email);
      this.passwordError = checkLength(password);
    },
    checkReset() {
      this.resetProcess();
      const { newPassword, confirmPassword, checkLength } = this;

      this.newPasswordError = checkLength(newPassword);
      this.confirmPasswordError = checkLength(confirmPassword);
    },
    async resetPassword() {
      this.checkReset();

      const {
        confirmPassword,
        newPassword,
        newPasswordError,
        confirmPasswordError,
      } = this;

      if (!confirmPasswordError && !newPasswordError) {
        this.process["loading"] = true;

        const result = await auth.reset({
          password:newPassword,
          confirmPassword
        });

        this.updateProcess(result);
      }
    },
    resetProcess() {
      this.process = {
        loading: false,
        error: null,
        success: null,
        data: null,
      };
    },
    updateProcess(result){
      const { token } = result;

      if (token) {
        this.process["success"] = true;
        this.process["loading"] = false;
      } else {
        this.process["error"] = true;
        this.process["loading"] = false;
      }
      this.process["data"] = result;
    },
    checkLength(field){
      return field.length > 0 ? false : true
    }
  },
};