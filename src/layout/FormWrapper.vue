// Common structure for Auth pages
<template>
  <section>
    <div v-if="!loading">
      <slot v-if="!loading">
        <!-- form content here -->
      </slot>
      <slot v-if="error" name="error">
        <article class="message is-danger">
          <div class="message-body">
            <strong>Error:</strong>
            <!-- {{_error}} -->
          </div>
        </article>
      </slot>
      <slot v-if="success" name="success">
        <article class="message is-success">
          <div class="message-body">
            <strong>Success:</strong>
            {{success}}
          </div>
        </article>
      </slot>

      <section>
        <button name="spe-form-button" @click="$emit('submit')">{{nameSubmit}}</button>
      </section>
    </div>
    <div v-if="loading"></div>
  </section>
</template>

<script>
const props = {
  process: {
    type: Object
  },
  nameSubmit: {
    type: String,
    default: "Submit"
  }
};

export default {
  props,
  computed: {
    loading() {
      if (this.process) return this.process.loading;
      else return false;
    },
    error() {
      if (this.process) return this.process.error;
      else return false;
    },
    success() {
      if (this.process) return this.process.success;
      else return false;
    }
    // _error() {
    //   let error = this.error;
    //   if (error) {
    //     if (_.isString(error)) {
    //       if (error.indexOf("Email already exists") > -1)
    //         return "You already have an account!";
    //     }
    //     return error;
    //   } else {
    //     return "";
    //   }
    // }
  }
};
</script>