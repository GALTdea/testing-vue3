<template>
  <div id="app">
  	<p>{{ message }}</p>

  <input v-model="message" placeholder="edit me">
  <!-- <p>Message is: {{ message }}</p> -->
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


