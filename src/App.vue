<template>
  <div id="app">
    <TopNav />
    <AuthRouter />
  </div>
</template>

<script>
import TopNav from "@/components/nav/Header/TopNav";
import AuthRouter from "./AuthRouter";
import { push } from "./utils/browserHistory";

export default {
  name: 'App',
  components: {
    AuthRouter,
    TopNav
  }
}
</script>

<style>
</style>
