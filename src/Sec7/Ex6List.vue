<template>
	<div class="cell small-12 medium-8">
		<ul class="">
			<ex6-item v-for="item in servers" v-bind:key="item.id" v-bind="item" @showStatus="bubbleStatus"></ex6-item>
		</ul>
	</div>
</template>

<script>
import Ex6ListItemVue from './Ex6ListItem.vue';

export default {
	props: [
		'servers'
	],
	components: {
		'ex6-item': Ex6ListItemVue
	},
	methods: {
		bubbleStatus($event) {
			this.$emit('showStatus', $event);
		}
	}
}
</script>

<style scoped>
	ul {
		margin: 0;
	}
</style>


