
<template>
	<div id="app">
		<AddTodo v-on:add-todo="" />
	  	<!-- call the todos and pass in todos from the data. brings the data to the component. n this case it's being passed in a a prop -->
	    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
    </div>
</template>

<script>
import Todos from './Todos';
import AddTodo from './AddTodo';
import VueResource from 'vue-resource'
//Vue.http.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
// import axios from 'axios';
// const element = document.getElementById("todoApp")
// const props = JSON.parse(element.getAttribute('data'))

  export default {
    name: "app",
    props: ['todos'],
    components: {
    	Todos,
    	AddTodo,

    },

    data() {
      return {
        title: "",

      }
    },

    methods: {
		deleteTodo(id){
	    		this.todos = this.todos.filter(todo => todo.id !== id)
	    	}
    },

    addTodo(newTodo){
    	this.todos = [...this.todos, newTodo]
    }, 

    created(){
    	// Vue.http.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    	// Axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
    }
  }


</script>


<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

  .btn {
    display: inline-block !important;
    border: none !important;
    background: red !important;
    color: #fff !important;
    padding: 7px 20px !important;
    cursor: pointer !important;
  }

  .btn:hover {
    background: #666 !important;
  }
</style>
