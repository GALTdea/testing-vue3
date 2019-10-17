<template>
  <div>
    <!-- todos pertains to the props todos -->
    <div v-bind:key="todo.id" v-for="todo in todos">
      <h3>{{ todo.title }}</h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Todos",
    props: ["todos"],
    
  }
</script>

<!-- Scopped limits style for this component only -->
<style scoped>
  
</style>