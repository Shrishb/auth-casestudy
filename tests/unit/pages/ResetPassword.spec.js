import { mount } from "@vue/test-utils";
import Login from "@/pages/Login";
import AuthWrapper from "@/layout/AuthWrapper";
import FormWrapper from "@/layout/FormWrapper";

describe("Login Component", () => {
  const wrapper = mount(Login);

  it("Login component has AuthWrapper and FormWrapper", () => {
    const auth = wrapper.findComponent(AuthWrapper);
    const form = wrapper.findComponent(FormWrapper);

    expect(form.exists()).toBe(true);
    expect(auth.exists()).toBe(true);
  });

  it("error messages do not show if showEmail and showPassword is false", () => {
    const errorText = wrapper.find("p");

    expect(errorText.exists()).toBe(false);
  });

  it("error messages show if showEmail and showPassword is true", async () => {
    wrapper.setData({ emailError: true, passwordError: true });

    await wrapper.vm.$nextTick;

    expect(wrapper.find(".error").exists()).toBe(true);
    expect(wrapper.html()).toContain("Please enter valid email");
    expect(wrapper.html()).toContain("Please enter password");
  });
});
