<template>
  <div id="app">
  	<p>{{ message }}</p>

  <!-- <input v-model="message" placeholder="edit me"> -->
 <!-- vue.esm.js:650 [Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "message"
 -->
  </div>
</template>

<script>
	export default {
		props: [ 'message'],
	
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


