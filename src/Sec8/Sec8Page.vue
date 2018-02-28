<template>
  	<div class="sec8 grid-container">
		<sec8-header></sec8-header>
        <hr>
        <div class="grid-x grid-margin-x grid-margin-y">
			<sec8-detail></sec8-detail>
			<sec8-edit></sec8-edit>
        </div>
    </div>
</template>

<script>
import Sec8Header from './Sec8Header.vue';
import Sec8Detail from './Sec8Detail.vue';
import Sec8Edit from './Sec8Edit.vue';

export default {
	components: {
		'sec8-header': Sec8Header,
		'sec8-detail': Sec8Detail,
		'sec8-edit': Sec8Edit
	}
}
</script>

<style>

</style>

