import { mount } from "@vue/test-utils";
import FormWrapper from "@/layout/FormWrapper";
import Spinner from "@/components/common/Spinner";
import MessageBox from "@/components/common/MessageBox";

function createWrapper(props = {}) {
  return mount(FormWrapper, {
    ...props
  });
}

describe("FormWrapper Component", () => {
  
  test("FormWrapper component has form classes", () => {
    let wrapper = createWrapper();

    let classes = wrapper.classes();

    expect(classes).toContain("form-wrapper");
    expect(wrapper.text()).toContain('Submit')
  });

  test("Submit button has display name from nameSubmit", async () => {
    let wrapper = createWrapper();
    wrapper.setProps({nameSubmit:"Next"})
    await wrapper.vm.$nextTick;

    expect(wrapper.text()).toContain('Next')
  });

  test("Spinner component is displayed is loading is true", async () => {
    let wrapper = createWrapper();
    wrapper.setProps({process:{ loading: true }})
    await wrapper.vm.$nextTick;

    const spinner = wrapper.findComponent(Spinner);

    expect(spinner.exists()).toBe(true);
  });

  test("MessageBox component is displayed is error is true", async () => {
    let wrapper = createWrapper();
    wrapper.setProps({process:{ data: {error:"error" }, error:"error"}});
    await wrapper.vm.$nextTick;

    const messageBox = wrapper.findComponent(MessageBox);

    expect(messageBox.exists()).toBe(true);
  });
});