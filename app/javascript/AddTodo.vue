<template>
  <div>
    
    <div>
      <form @submit="addTodo">
        <!-- v-model gives input acces to the title attribute -->
        <input type="text" v-model="title" name="title" placeholder="Add Todo">
        
        <input type="submit" value="Submit" class="btn">
      </form>
    </div>
  </div>
</template>

<script>
  import uuid from 'uuid';
  export default {
    name: "AddTodo",
    data() {
      return {
        title: '',
      }
    },

    methods: {
      // uuid generates an id for testing purposes. when submiting to the json, json will generate it automatically
      addTodo(e){
        e.preventDefault();

        const newTodo = {
          id: uuid.v4(),
          title: this.title, 
          completed: false,
        }
        // send to parent
        this.$emit('add-todo', newTodo)

        this.title = '';
      }
    },
    
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