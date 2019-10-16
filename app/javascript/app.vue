<template>
  <div id="app">
    <p>{{ message }}</p>
    <h1>Testing from App component app.vue</h1>
  </div>
</template>

<script>
export default {
  props: ["message"]
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
