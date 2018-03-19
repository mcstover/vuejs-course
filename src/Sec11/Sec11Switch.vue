<template>
  <div>
	  <div
	  	id="on"
		@click="updateSwitch(true)"
		:class="{active: value}">On</div>
	  <div
	  	id="off"
		@click="updateSwitch(false)"
		:class="{active: !value}">Off</div>
  </div>
</template>

<script>
export default {
//   data() {
// 	  return {
// 		  isOn: true
// 	  }
//   }
  props: [ 'value' ],
  methods: {
	  updateSwitch(isOn) {
		  // v-model responds to input events
		  this.$emit('input', isOn);
	  }
  }
}
</script>

<style scoped>
#on, #off {
	display:inline-block;
	padding:.3rem;
	background-color: #EEE;
	cursor:pointer;
	margin: 0 0 .3rem;
}
#on.active, #off.active {
	background-color: #333;
	color: #CCC;
}
</style>
