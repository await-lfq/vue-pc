<template>
  <div>
    父窗口
    <button @click="handlerClick">按钮</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sonWindow: "", // 子窗口
    }
  },
  created () {

  },
  methods: {
    /**
     * @description 点击按钮并跳转
     */
    handlerClick () {
      this.$sendMessageToChild("cjy");
      if (this.sonWindow) {
        this.sonWindow.focus();
      } else {
        const { href } = this.$router.resolve("/pageCommunication2");
        this.sonWindow = window.open(href, "child");
      }
    }
  }

}
</script>

<style lang="scss" scoped>
</style>