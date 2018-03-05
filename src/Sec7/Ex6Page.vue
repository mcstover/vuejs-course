<template>
  	<div class="ex6 grid-container">
		<ex6-header></ex6-header>
        <hr>
        <div class="grid-x grid-margin-x grid-margin-y">
			<ex6-list :servers="servers" @showStatus="showServerStatus"></ex6-list>
			<ex6-detail :selectedServer="selectedServer" @fixServer="fixServerStatus"></ex6-detail>
        </div>
        <hr>
		<ex6-footer></ex6-footer>
    </div>
</template>

<script>
import Ex6FooterVue from './Ex6Footer.vue';
import Ex6HeaderVue from './Ex6Header.vue';
import Ex6ListVue from './Ex6List.vue';
import Ex6DetailVue from './Ex6Detail.vue';

export default {
	data: function() {
		return {
			servers: [
				{id: 1, status: 'Normal'},
				{id: 2, status: 'Critical'},
				{id: 3, status: 'Unknown'},
				{id: 4, status: 'Normal'},
				{id: 5, status: 'Critical'}
			],
			selectedServer: null
		};
	},
	components: {
		'ex6-header': Ex6HeaderVue,
		'ex6-list': Ex6ListVue,
		'ex6-detail': Ex6DetailVue,
		'ex6-footer': Ex6FooterVue
	},
	methods: {
		showServerStatus($serverNumber) {
			this.selectedServer = this.servers[$serverNumber - 1];
		},
		fixServerStatus($status) {
			let serverIndex = this.selectedServer.id - 1;
			this.servers[serverIndex].status = $status;
		}
	},
	created() {
		this.selectedServer = this.servers[0];
	}
}
</script>

<style>

</style>

