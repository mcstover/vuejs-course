<template>
  	<div class="ex6 grid-container">
		<ex6-header></ex6-header>
        <hr>
        <div class="grid-x grid-margin-x grid-margin-y">
			<ex6-list></ex6-list>
			<ex6-detail></ex6-detail>
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
	components: {
		'ex6-header': Ex6HeaderVue,
		'ex6-list': Ex6ListVue,
		'ex6-detail': Ex6DetailVue,
		'ex6-footer': Ex6FooterVue
	}
}
</script>

<style>

</style>

