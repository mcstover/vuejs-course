<template>
<div>
  <server-status v-for="(server, index) in 5" v-bind:key="index" v-bind:index="index"></server-status>
</div>
</template>

<script>
import ServerStatus from './ServerStatus'

export default {
  components: {
    'server-status': ServerStatus
  }
}
</script>
