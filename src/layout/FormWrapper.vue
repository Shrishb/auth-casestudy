// Common structure for Auth pages
<template>
  <section class="form-wrapper">
    <div>
      <slot>
        <!-- form content here -->
      </slot>
      <slot v-if="error" name="error">
        <MessageBox :message="message" classColour="is-danger" />
      </slot>
      <slot v-if="success" name="success">
        <MessageBox :message="message" />
      </slot>
        <Spinner v-if="loading"/>
      <section>
        <button @click="$emit('submit')">{{nameSubmit}}</button>
      </section> 
    </div>
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
    },
    message() {
      let response ={};
      let { error, success,data: responseData } = this;
      let {token, error: errorMessage} = responseData;

      if (success) {
        response["text"] = "Logged in Succesfully";
        response["data"] = token;
      }

      if (error) {
        response["text"] = "Error Occured";
        response["data"] = errorMessage;
      }

      return response;
    }
  }
};
</script>

<style lang="scss">
.form-wrapper div {
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  input {
    all: unset;
    margin-top: 1rem;
    border-bottom: 2px solid #ccc;
    width: 400px;
    margin-bottom: 2rem;
    @media screen and (max-width: 1155px) {
      width: 100%;
    }
  }
  p.error {
    color: #ff0102;
    margin-top: 0rem;
    &:before {
      content: "\274C";
      height: 8px;
      width: 8px;
    }
  }
  a {
    margin-top: 1rem;
    color: #2a7fe1;
    cursor: pointer;
  }
  button {
    margin: 3rem 0;
    padding: 0.5rem 5rem 0.7rem 1rem;
    background: #dbdcde;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 5px;
    position: relative;
    border: none;
    &:after {
      content: "\21e2";
      position: absolute;
      height: 10px;
      width: 10px;
      right: 0;
      margin-right: 20px;
    }
  }
}
</style>