<template>
	<div id="app">
	  	<!-- call the todos and pass in todos from the data. brings the data to the component. n this case it's being passed in a a prop -->
	    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
    </div>
</template>

<script>
import Todos from './Todos';

  export default {
    name: "app",
    
    components: {
    	Todos
    },

    data() {
      return {
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

        ], 
      }
    },

    methods: {
		deleteTodo(id){
	    		this.todos = this.todos.filter(todo => todo.id !== id)
	    	}
    },
  }
</script>


<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
