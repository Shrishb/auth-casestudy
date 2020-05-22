import AuthMixin from "@/mixins/AuthMixin";
import { shallowMount } from "@vue/test-utils";

let wrapper;

const Component = {
  template: "<div></div>",
};

describe("AuthMixin.js", () => {
  beforeEach(() => {
    wrapper = shallowMount(Component, {
      mixins: [AuthMixin],
    });
  });

  describe("test methods", () => {
    test("test checkLogin return true when email and password is empty", () => {
        wrapper.vm.checkLogin();

        expect(wrapper.vm.emailError).toBeTruthy();
        expect(wrapper.vm.passwordError).toBeTruthy();
    });

    test("test checkLogin return false when email and password is not empty", () => {
        wrapper.setData({  email: "test@test.com",
            password: "efddfgdffdhdf"});

        wrapper.vm.checkLogin();

        expect(wrapper.vm.emailError).toBeFalsy();
        expect(wrapper.vm.passwordError).toBeFalsy();
    });

    test("test resetProcess resets process variable", () => {
        wrapper.vm.resetProcess();

        expect(wrapper.vm.process).toEqual({
            loading: false,
            error: null,
            success: null,
            data: null,
          });
    });
  
    test("test checkLength return true if string length less than 0", () => {
      expect(wrapper.vm.checkLength("")).toBeTruthy();
    });

    test("test checkLength return true if string length greater than 0", () => {
      expect(wrapper.vm.checkLength("test")).toBeFalsy();
    });

    test("test updateProcess updates the process object based if token exists", () => {
      const result = {token:"123"};

      wrapper.vm.updateProcess(result);

      expect(wrapper.vm.process).toEqual({
        loading: false,
        error: null,
        success: true,
        data: result,
      });
      
    });

    test("test updateProcess updates the process object based if token does not exist", () => {
      const result = {};

      wrapper.vm.updateProcess(result);

      expect(wrapper.vm.process).toEqual({
        loading: false,
        error: true,
        success: null,
        data: result,
      });
      
    });
  });
});
