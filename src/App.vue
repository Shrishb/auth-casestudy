<template>
  <div id="app">
    <TopNav />
    <AuthRouter />
  </div>
</template>

<script>
import TopNav from "@/components/nav/Header/TopNav";
import AuthRouter from "./AuthRouter";

export default {
  name: 'App',
  components: {
    AuthRouter,
    TopNav
  }
}
</script>

<style lang="scss">
  #app{
    max-width: 1200px;
    margin: 0 auto;
  }
  *{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

</style>
