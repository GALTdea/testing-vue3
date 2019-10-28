<template>
  <div id="app">
  	<p>{{ message }}</p>
  	<p>{{ message1 }}</p>
	  <!-- <div> -->
	     <!-- <form @submit="addItem"> 
	    	 <div>Message:{{ message }}</div>

	      <input  v-model="message"  placeholder="Add Title...">
	     
	      <input type="submit" value="Submit" class="btn">
	    </form> -->

	    <!-- <input v-model="message" placeholder="edit me"> -->
		<!-- <p>Message is: {{ message }}</p> -->
	  <!-- </div> -->
  	<!-- 	
  	  <div class="msg">
  	  	<div>title</div>
	    {{ message.title }}

	    <div>msg1</div>
	    {{ message.msg1 }}

	    <div>msg2</div>
	    {{ message.msg2 }}
	  </div> -->
    
    	
  </div>
</template>

<script>
	export default {
		props: ['message1', 'message'],

		// data: {
		//  	message: {
		//         title: '',
		//         msg1: '',
		//         msg2: '',
		//         msg3: '',
		//       }
		// },

		// methods: {
		// 	addItem: function() {
		// 		this.message.push({
		//         	id: null,
		//         	title: '',
		//         	msg1: '',
		//         	msg2: '',
		//         	msg3: '',
		//         })
		        
	 //      	}
    

		// }
	}	


</script>

<style scoped>
p {
  font-size: 1em;
  text-align: center;
}
.msg{
	text-align: center;
}
</style>


