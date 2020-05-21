<template>
  <div class="loader"></div>
</template>

<script>
export default {};
</script>

<style scoped>
.loader {
  border: 8px solid #ccc;
  border-radius: 50%;
  border-top: 8px solid black;
  width: 30px;
  height: 30px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  margin-top: 1;
}
/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>