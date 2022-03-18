<template>
  <div>
    <button @click="showAlert">按钮</button>
  </div>
</template>

<script>
export default {
  methods: {
    showAlert () {
      this.$alert("这是一个弹窗");
    }
  },
}
</script>

<style>
</style>