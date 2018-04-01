<template>
  	<div class="sec15 grid-container">
		<h2>HTTP via vue-resource</h2>
		<hr>
		<div>
			<input placeholder="name" v-model="pet.name">
			<br>
			<input placeholder="type" v-model="pet.type">
			<br>
			<button class="button tiny rounded" @click="savePet">Save Pet</button>
		</div>
  		<div>
			<button class="button tiny success" @click="getPets">Show Pets</button>
			<ul>
				<li v-for="(pet, index) in pets" :key="index">{{ pet.name }} is a {{ pet.type }}</li>
			</ul>
		</div>
    </div>
</template>

<script>
export default {
	data: function() {
		return {
			pet: {
				name: '',
				type: ''
			},
			pets: []
		}
	},
	methods: {
		savePet() {
			console.log(this.pet.name, this.pet.type);
			this.$http.post('https://vuejs-course-f2784.firebaseio.com/pets.json', this.pet).then( response => {
				console.log(response);
			}, error => {
				console.log(error);
			});
		},
		getPets() {
			this.$http.get('https://vuejs-course-f2784.firebaseio.com/pets.json').then( response => {
				console.log(response);
				return response.json();
			}, error => {
				console.log(error);
			}).then( data => {
				console.log(data);
				let petArray = [];
				for (let pet in data) {
					petArray.push(data[pet]);
				}
				this.pets = petArray;
			});
		}
	}
}
</script>

<style scoped>
li {display: block}
</style>

