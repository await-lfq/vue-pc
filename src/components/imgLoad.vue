<template>
  <img ref="img" src="../assets/images/loading.gif" :data-src="src" alt="">
</template>
<script>
export default {
  data () {
    return {
      innerHeight: window.innerHeight, // 浏览器可视区域的高度
      el: "", // 图片元素
    }
  },
  props: {
    // 图片路径
    src: {
      type: String,
      required: true,
    },
    // 懒加载图片
    isLazy: {
      type: Boolean,
      required: false,
    }

  },
  mounted () {
    this.el = this.$refs.img; // 获取元素
    if (this.isLazy) { // 需要懒加载
      this.lazyFunc(this.el.offsetTop) // 初始化显示第一张图片
      window.addEventListener("scroll", this.debounce()) // 监听页面的滚动
    } else { // 不需要懒加载
      this.el.src = this.el.getAttribute("data-src");
    }
  },
  methods: {
    // 防抖函数
    debounce () {
      let timer;
      return () => {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          if (this.el.getAttribute("data-src")) {
            this.lazyFunc(this.el.offsetTop); // 懒加载函数
          }
        }, 100)
      }
    },
    // 懒加载函数
    lazyFunc (top) {
      if (this.innerHeight + document.documentElement.scrollTop > top) {
        const temp = new Image(); // 创建一个临时图片对象，使图片全部加载完之后再显示图片
        temp.src = this.el.getAttribute("data-src");
        temp.onload = () => { // 等图片加载完之后
          this.el.src = this.el.getAttribute("data-src");
          this.el.setAttribute("data-src", "");
        }
      }
    },
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 100vw;
  height: 110vh;
  object-fit: cover;
  display: block;
}
</style>