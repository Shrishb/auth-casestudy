// Common structure for Auth pages
<template>
  <section>
    <div v-if="!loading">
      <slot>
        <!-- form content here -->
      </slot>
      <slot v-if="error" name="error">
        <MessageBox />
      </slot>
      <slot v-if="success" name="success">
        <MessageBox />
      </slot>

      <section>
        <button @click="$emit('submit')">{{nameSubmit}}</button>
      </section>
    </div>
    <div v-if="loading"></div>
  </section>
</template>

<script>
import MessageBox from "../components/common/MessageBox";
import Spinner from "../components/common/Spinner";

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
  components: {
    MessageBox,
    Spinner
  },
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
    },
    data() {
      if (this.process) return this.process.data;
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