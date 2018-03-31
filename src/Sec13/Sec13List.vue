<template>
  	<div class="sec13-list">
		<input v-model="filteredText">
		<ul>
			<li v-for="(item, index) in filteredList" :key="index">{{ item }}</li>
		</ul>
    </div>
</template>

<script>
export default {
	data: function() {
		return {
			filteredText: '',
			items: ['Apple', 'Banana', 'Mango', 'Melon', 'Pear', 'Starfruit']
		}
	},
	computed: {
		// computed properties can be more performant than a filter in some cases
		// - such as filtering an array... which isn't really a text transformation
		filteredList() {
			return this.items.filter((element) => {
				return element.match(this.filteredText);
			});
		}
	}
}
</script>

<style scoped>
li {display: block}
</style>

