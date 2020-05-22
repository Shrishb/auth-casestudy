<template>
  <article :class="['message', classColour]">
    <section class="message-body">
      <div class="media">
        <div class="media-content">
          <span> {{ message.text}}</span>
          <br />
          <span>Response: {{ message.data}}</span>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
const props = {
  message: {
    type: Object,
    required: true
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
  .message.is-info{
    background-color: #f6fbfe;
    .message-body {
      color: #12537e;
      border-radius: 4px;
      border-style: solid;
      border-width: 0 0 0 4px;
      border-color: #209cee;
      padding: 1.25em 1.5em;
    }
  }

  .message.is-danger{
    background-color: #fff5f7;
    .message-body {
      border-color: #ff3860;
      color: #cd0930;
      border-radius: 4px;
      border-style: solid;
      border-width: 0 0 0 4px;
      padding: 1.25em 1.5em;
    }
  }
.message {
  margin-top: 1rem;
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