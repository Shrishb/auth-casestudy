// Common structure for Auth pages

<template>
  <section class="login-container">
    <div class="login-left-container">
      <div class="login-title">
        <h1>
          <slot name="title" />
        </h1>
      </div>
      <div class="login-form">
        <slot />
      </div>
    </div>
    <div class="login-right-container">
      <slot name="image" />
    </div>
  </section>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss">
section.login-container {
  display: flex;
  flex-wrap: wrap;
  padding: 0 80px;
  @media screen and (max-width: 1155px) {
    padding: 0 40px;
  }
  .login-left-container {
    flex: 1;
    @media screen and (max-width: 1023px) {
      flex: 0 0 100%;
    }
    .login-title {
      h1 {
        font-size: 3rem;
        font-weight: 400;
      }
    }
  }
  .login-right-container {
    img {
      width: 100%;
    }
  }
}
</style>
