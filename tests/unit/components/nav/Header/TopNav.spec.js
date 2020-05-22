import { mount } from "@vue/test-utils";
import TopNav from "@/components/nav/Header/TopNav";

import NavLink from '@/components/nav/Header/NavLink';
import UserRole from '@/components/nav/Header/UserRole';

describe("TopNav Component", () => {
  const wrapper = mount(TopNav);

  it("TopNav component has NavLink and UserNav", () => {
    const auth = wrapper.findComponent(NavLink);
    const form = wrapper.findComponent(UserRole);

    expect(form.exists()).toBe(true);
    expect(auth.exists()).toBe(true);
  });
});
