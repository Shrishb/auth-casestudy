import { mount } from "@vue/test-utils";
import AuthWrapper from "@/layout/AuthWrapper";

describe("AuthWrapper Component", () => {
  const wrapper = mount(AuthWrapper);

  it("AuthWrapper component has left,right container and form classes", () => {
    let classes = wrapper.classes();
    
    expect(classes).toContain('login-container');

    expect(wrapper.find('.login-left-container').exists()).toBe(true);
    expect(wrapper.find('.login-right-container').exists()).toBe(true);
    expect(wrapper.find('.login-form').exists()).toBe(true);
  });
});
