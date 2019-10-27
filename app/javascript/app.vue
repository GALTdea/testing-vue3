<template>
  <div id="app">
    <p>This is a test</p>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
 props: ['message'],
// props: {
//   title: String,
//   msg1: String,
//   msg2: String,
//   msg3: String,
//   }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>




<!-- t.string "title"
    t.text "msg1"
    t.text "msg2"
    t.text "msg3 -->