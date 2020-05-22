<!-- AuthRouter.vue -->
<template>
  <component :is="routedComponent"></component>
</template>

<script>
import { listen } from "./utils/browserHistory";
import routes from './routes';
import Default from "./pages/Default";

export default {
  data() {
    return { current: window.location.pathname };
  },
  mounted() {
    //browser navigation listener
    listen((route, previousRoute) => {
      this.current = route
    });

    //detect back and forth in the browser
    window.addEventListener(
      "popstate",
      event => (this.current = window.location.pathname)
    );
  },
  computed: {
    routedComponent() {
      return routes[this.current] || Default;
    }
  },
  render(createElement) {
    return createElement(this.routedComponent);
  }
};

</script>
