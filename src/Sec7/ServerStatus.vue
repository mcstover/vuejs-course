<template>
<div class="server">
  <h2>
    Server {{ this.index }} - {{ status }} - <button @click="changeStatus">Change</button>
  </h2>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      status: 'Critical'
    }
  },
  props: [
    'index'
  ],
  methods: {
    changeStatus() {
      this.status = 'Normal'
    }
  }
}
</script>

<style>
.server {
  display: block;
  margin: .5rem;
  padding: .5rem;
  border-radius: .25rem;
  border: 1px solid #EEE;
}
</style>
