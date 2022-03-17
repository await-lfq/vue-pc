<template>
  <div class="modal-container" :class="{hidden:isShowAnimation}">
    <!-- 弹窗按钮 -->
    <button @click="isShowAnimation = true;">弹窗</button>
    <!-- 内容 -->
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
    <div class="box">4</div>
    <div class="box">5</div>
    <!-- 弹窗 -->
    <div @transitionend="f" :class="{animation:isShowAnimation}" class="model-box">
      <button @click="isShowAnimation=false">取消弹窗</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 是否显示动画
      isShowAnimation: false,
    }
  },
  methods: {
    f () {
      console.log(22);
    }
  }

}
</script>

<style scoped lang="scss">
// 弹窗容器
.modal-container {
  width: 100%;
  height: 100vh;
  &.hidden {
    overflow: hidden;
  }
  // 内容
  .box {
    width: 100vw;
    height: 100vh;
    background-color: yellow;
    text-align: center;
  }
  // 弹窗
  .model-box {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    &.animation {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>