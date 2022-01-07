<template>
  <div class="file-upload">
    <!-- 文件夹上传 -->
    <file-upload :changeFile="changeFile"></file-upload>
  </div>
</template>

<script>
import fileUpload from "../components/uploadFile.vue";
export default {
  components: {
    fileUpload // 上传文件夹组件
  },
  methods: {
    // 选择文件夹
    changeFile (fileList) {
      // 获取文件对象，请求后台
      console.log(Array.from(fileList), "文件对象列表+++++");
    }
  }

}
</script>

<style lang="scss" scoped>
</style>