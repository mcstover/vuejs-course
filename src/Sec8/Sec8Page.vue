<template>
  	<div class="sec8 grid-container">
		<sec8-header></sec8-header>
		<button class="button tiny secondary" @click="sendPropToChild">Send Prop to Child</button>
		<p>Sent Prop: {{sentProp}}</p>
        <hr>
        <div class="grid-x grid-margin-x grid-margin-y">
			<sec8-detail
				:sentProp="sentProp"
				@sendUpProp="resetRecievedProp"
				:resetPropFromParent="setPropParentMethod"
				:userAge="age" />
			<sec8-edit
				:userAge="age" />
        </div>
    </div>
</template>

<script>
import Sec8Header from './Sec8Header.vue';
import Sec8Detail from './Sec8Detail.vue';
import Sec8Edit from './Sec8Edit.vue';

export default {
	data: function() {
		return {
			sentProp: 'a property',
			age: 38
		}
	},
	components: {
		'sec8-header': Sec8Header,
		'sec8-detail': Sec8Detail,
		'sec8-edit': Sec8Edit
	},
	methods: {
		sendPropToChild() {
			this.sentProp = Math.random()
		},
		resetRecievedProp($event) {
			this.sentProp = $event;
		},
		setPropParentMethod() {
			this.sentProp = 'set in parent method';
		}
	}
}
</script>

<style>

</style>

