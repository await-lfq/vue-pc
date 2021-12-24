<template>
  <div>
    <element-upload :requestUrl="requestUrl" />
  </div>
</template>
<script>
import elementUpload from "../components/elementUpload";
export default {
  data () {
    return {
      // 请求路径
      requestUrl:"https://api.getlikes.kongquechao.com/index/studio/upload",
    };
  },
  components: {
    elementUpload
  },


}
</script>

<style>
</style>