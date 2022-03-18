<template>
  <div>
    <img-load v-for="item in imgList" :isLazy="true" :src="item.url" :key="item.id" />
  </div>

</template>
<script>
import imgLoad from "../components/imgLoad.vue";
export default {
  data () {
    return {
      imgList: [
        {
          id: 1,
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F2109242332225H9-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650080363&t=993ad5414d31c1ea513369e7818d0486"
        },
        {
          id: 2,
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F2109242332225H9-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650080363&t=993ad5414d31c1ea513369e7818d0486"
        },
        {
          id: 3,
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F2109242332225H9-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650080363&t=993ad5414d31c1ea513369e7818d0486"
        },
        {
          id: 4,
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F2109242332225H9-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650080363&t=993ad5414d31c1ea513369e7818d0486"
        }
      ]
    }
  },
  components: {
    // 图片懒加载组件
    imgLoad
  }
}
</script>

<style>
</style>