<template>
  <div>
    <button @click="showAlert">按钮</button>
  </div>
</template>

<script>
export default {
  
  methods: {
    showAlert () {
      this.$alert("不要一直点我");
    },
  },
}
</script>

<style>
</style>