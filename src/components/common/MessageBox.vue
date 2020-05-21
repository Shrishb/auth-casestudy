<template>
  <article :class="['message', classColour]">
    <section class="message-body">
      <div class="media">
        <div class="media-content"></div>
      </div>
    </section>
  </article>
</template>

<script>
const props = {
  text: {
    type: String,
    default: "Success"
  },
  classColour: {
    type: String,
    default: "is-info"
  }
};

export default {
  props
};
</script>

<style lang="scss" scoped>
.message {

  .is-info{
    background-color: #f6fbfe;
  }

  .is-danger{
    background-color: #fff5f7;
  }

  .message-body {
    border-color: #209cee;
    color: #12537e;
  }

  .media {
    padding-top: 0;
    border: 0;
    margin-top: 0;
  }
  .media-content {
    flex-basis: auto;
    flex-grow: 1;
    flex-shrink: 1;
    text-align: left;
    overflow-y: hidden;
    overflow-x: auto;
    margin-top: 0;
  }
}
</style>