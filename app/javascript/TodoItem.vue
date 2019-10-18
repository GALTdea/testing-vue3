<template>
  <!-- v-binding a css class on condition that todo.iscomplete -->
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
    <p> 
      <input type="checkbox" v-on:change="markComplete" >
      {{todo.title}}
      <!-- this will emit and event, in this case the click, we need to give it a name "del-todo" we can also emit parameters, todo.id because we need to know which one we're deleting -->
      <button @click="$emit('del-todo', todo.id)" class="del">x</button>
      <!-- to catch the emit we go to the app.vue component tag and call it there -->

    </p>
  </div>
</template>

<script>
  export default {
    name: "TodoItem",
    props: ["todo"], 
    methods: {
      markComplete() {
        this.todo.completed = !this.todo.completed;
      }
    }
    
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