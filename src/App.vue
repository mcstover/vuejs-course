<template>
	<div id="app">
		<sec8-page></sec8-page>
		<!-- <ex6-page></ex6-page> -->
		<!-- Globally included Component -->
    	<!-- <simple-status></simple-status> -->
	</div>
</template>

<script>
// import Ex6Page from './Sec7/Ex6Page.vue';
import Sec8Page from './Sec8/Sec8Page.vue';

export default {
  name: 'app',
  components: {
	//   'ex6-page': Ex6Page,
	  'sec8-page': Sec8Page
  },
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
