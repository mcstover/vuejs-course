<template>
	<div id="app">
		<sec13-page></sec13-page>
		<!-- <sec12-page></sec12-page> -->
    	<!-- <sec11-page></sec11-page> -->
		<!-- <sec10-quotes></sec10-quotes> -->
		<!-- <sec9-page></sec9-page>
		<hr>
		<sec8-page></sec8-page>
		<hr>
		<ex6-page></ex6-page> -->
		<!-- Globally included Component -->
    	<!-- <simple-status></simple-status> -->
	</div>
</template>

<script>
// import Ex6Page from './Sec7/Ex6Page.vue';
// import Sec8Page from './Sec8/Sec8Page.vue';
// import Sec9Page from './Sec9/Sec9Page.vue';
// import Sec10Quotes from './Sec10Quotes/Sec10Page.vue';
// import Sec11Page from './Sec11/Sec11Page.vue';
// import Sec12Page from './Sec12/Sec12Page.vue';
import Sec13Page from './Sec13/Sec13Page.vue';

export default {
  name: 'app',
  components: {
	  Sec13Page
	// Sec12Page
    // Sec11Page
	  // 'sec10-quotes': Sec10Quotes
	//   'ex6-page': Ex6Page,
	//   'sec8-page': Sec8Page,
	//   'sec9-page': Sec9Page
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
