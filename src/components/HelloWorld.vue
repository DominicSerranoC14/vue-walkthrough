<template>
  <div class="hello">
    <h1>{{ msg }} World</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>