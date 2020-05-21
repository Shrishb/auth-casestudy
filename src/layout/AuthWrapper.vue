<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body zero-pad">
      <div class="container is-fluid is-paddingless is-marginless">
        <div class="columns is-centered is-marginless has-background-primary">
          <div class="column is-6">
            <br />
            <h1 class="title has-text-white" v-if="this.$slots['title']">
              <slot name="title" />
            </h1>
          </div>
          <div>
              <slot name="image" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  components: {
  }
};
</script>

<style scoped>
</style>
