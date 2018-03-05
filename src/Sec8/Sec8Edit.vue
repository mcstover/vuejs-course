<template>
	<div class="cell small-12 medium-4">
		<h3>Edit User:</h3>
		<i>{{ userAge }}</i>
		<button class="button small" @click="editAge">Edit Age</button>
	</div>
</template>

<script>
import { eventBus } from '../main';

export default {
	props: {
		userAge: Number
	},
	methods: {
		editAge() {
			this.userAge += 2;
			// eventBus.$emit('ebUpdateAge', this.userAge);
			eventBus.incrementAge(this.userAge);
		}
	}
}
</script>

<style scoped>
	div {
		border: 1px solid #EEE;
		border-radius: .125rem;
		padding: .375rem;
	}
</style>
