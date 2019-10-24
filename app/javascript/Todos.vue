<template>
  <div>
    <!-- todos pertains to the props todos -->
    <div v-bind:key="todo.id" v-for="todo in todos">
      <TodoItem v-bind:todo="todo"  v-on:del-todo="$emit('del-todo', todo.id)" />
    </div>
  </div>
</template>

<script>
  // const element = document.getElementById("todoApp")
  // const props = JSON.parse(element.getAttribute('data'))
  
  import TodoItem from './TodoItem.vue';

  export default {
    name: "Todos",
    components: {
      TodoItem
    },
    props: ["todos"],
    
  }
</script>

<!-- Scopped limits style for this component only -->
<style scoped>
  
</style>