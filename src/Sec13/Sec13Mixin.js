export let grainMixin = {
	data: function() {
		return {
			filteredText: '',
			grains: ['Barley', 'Durum', 'Semolina', 'Buckwheat']
		}
	},
	computed: {
		// computed properties can be more performant than a filter in some cases
		// - such as filtering an array... which isn't really a text transformation
		filteredGrains() {
			return this.grains.filter((element) => {
				return element.match(this.filteredText);
			});
		}
	}
}
