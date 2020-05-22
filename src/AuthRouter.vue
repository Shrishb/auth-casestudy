<!-- Router.vue -->
<template>
  <component :is="routedComponent"></component>
</template>

<script>
import { listen } from "./utils/browserHistory";
import routes from './routes';

export default {
  data() {
    return { current: window.location.pathname };
  },
  mounted() {
    listen((route, previousRoute) => {
      this.current = route
    });
    window.addEventListener(
      "popstate",
      event => (this.current = window.location.pathname)
    );
  },
  computed: {
    routedComponent() {
      return routes[this.current];
    }
  },
  render(createElement) {
    return createElement(this.routedComponent);
  }
};

</script>
