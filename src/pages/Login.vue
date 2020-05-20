<template>
<TopNav />
</template>

<script>
import * as auth from "@/utils/auth-client";
import TopNav from '@/components/nav/Header/TopNav';

export default {
  components: {
    TopNav
  },
  mounted() {
    this.loginUser();
  },
  data() {
    return {};
  },
  computed: {
    name() {
      return this.data;
    }
  },
  methods: {
    loginUser() {
      auth.login({
        email: "eve.holt@reqres.in",
        password: "cityslicka"
      });
    }
  }
};
</script>

<style>
</style>