<template>
  <!-- v-binding a css class on condition that todo.iscomplete -->
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
    <p> {{todo.title}} </p>
  </div>
</template>

<script>
  export default {
    name: "TodoItem",
    props: ["todo"]
    
  }
</script>

<!-- Scopped limits style for this component only -->
<style scoped>
  .todo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }

  .is-complete {
    text-decoration: line-through;
  }

  .del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }
</style>