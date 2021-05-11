<template>
  <div class="scroll-loading">
    <!-- <div class="box1" ref="box1">
      <div style="height:500px;background:yellow">1</div>
      <div style="height:500px;background:yellow">2</div>
      <div style="height:500px;background:yellow">3</div>
      <div style="height:500px;background:yellow">4</div>
    </div>  -->
    <div style="height:500px;background:yellow">1</div>
    <div style="height:500px;background:yellow">2</div>
    <div style="height:500px;background:yellow">3</div>
    <div style="height:500px;background:yellow">4</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    mounted() {
      // 元素滚动
      // this.$refs.box1.addEventListener("scroll", () => {
      //   if ((this.$refs.box1.scrollHeight - this.$refs.box1.scrollTop) === this.$refs.box1.clientHeight) {
      //     console.log("触发了"); // 可以发请求，加载数据
      //   }
      // })
      // body滚动

      window.addEventListener("scroll", () => {
        //变量scrollTop是滚动条滚动时，距离顶部的距离
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        //变量windowHeight是可视区的高度
        var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
        //变量scrollHeight是滚动条的总高度
        var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        console.log(scrollTop,windowHeight,scrollHeight);
        //滚动条到底部的条件
        if (Math.round(scrollTop + windowHeight) == scrollHeight) {
          //到了这个就可以进行业务逻辑加载后台数据了
          console.log("到了底部");
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  // 方式1
  .method {
    text-align: center;
  }

  .box1 {
    height: 300px;
    background-color: red;
    overflow: auto;
  }
</style>