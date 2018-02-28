<template>
	<div class="cell small-12 medium-8">
		<ul class="">
			<ex6-item v-for="index in 5" v-bind:key="index" v-bind:index="index"></ex6-item>
		</ul>
	</div>
</template>

<script>
import Ex6ListItemVue from './Ex6ListItem.vue';

export default {
	components: {
		'ex6-item': Ex6ListItemVue
	}
}
</script>

<style scoped>
	div {
		/* border: 1px solid #CCC;
		border-radius: .25rem; */
	}
	ul {
		margin: 0;
	}
</style>


