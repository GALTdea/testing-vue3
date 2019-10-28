<template>
  <div id="app">
  	<p>{{ message }}</p>
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


