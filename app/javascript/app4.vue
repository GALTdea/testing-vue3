<template>
  <div>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="title" name="title" placeholder="Add Todo...">
      <input type="submit" value="Submit" class="btn">

    </form>
  </div>
</template>

<script>
  // import uuid from 'uuid';
  export default {
    name: "AddTodo",
    data() {
      return {
        title: '',
        todos: [
        {
          id: 1,
          title: "Todo 1",
          completed: false
        },
        {
          id: 2,
          title: "Todo 2",
          completed: false
        },
        {
          id: 3,
          title: "Todo 3",
          completed: false
        },


        ]
      }
    },
    methods: {
      addTodo() {
        const newTodo = {
          title: this.title,
          completed: false
        }
        // Send up to parent
        this.$emit('add-todo', newTodo);

        this.title = '';
      }
    }
  }
</script>

<style scoped>
  form {
    display: flex;
  }

  input[type="text"] {
    flex: 10;
    padding: 5px;
  }

  input[type="submit"] {
    flex: 2;
  }
</style>