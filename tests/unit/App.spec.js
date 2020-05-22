import { mount } from "@vue/test-utils";
import App from "@/App";
import TopNav from "@/components/nav/Header/TopNav";
import AuthRouter from "@/AuthRouter";

describe("App Component", () => {
  const wrapper = mount(App);

  it("App component has AuthRouter and TopNav", () => {
    const topNav = wrapper.findComponent(TopNav);
    const authRouter = wrapper.findComponent(AuthRouter);

    expect(topNav.exists()).toBe(true);
    expect(authRouter.exists()).toBe(true);
  });
});
