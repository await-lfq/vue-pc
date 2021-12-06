<template>
  <div>
    子窗口
    <button @click="handlerClick">按钮</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      parentWindow: "", // 父窗口
    }
  },
  created () {

  },
  methods: {
    /**
     * @description 点击按钮并跳转
     */
    handlerClick () {
      this.$sendMessageToParent("lfq");
      if (this.parentWindow) {
        this.parentWindow.focus();
        return;
      }
      const { href } = this.$router.resolve("/pageCommunication");
      this.parentWindow = window.open(href, "parent");
    }
  }

}
</script>

<style lang="scss" scoped>
</style>