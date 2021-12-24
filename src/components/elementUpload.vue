<template>
  <div>
    <!-- 图片列表展示 -->
    <div class="img-box">
      <img v-for="item in imgList" :src="item.src" :key="item.id" alt="">
    </div>
    <!-- 上传组件 -->
    <el-upload :on-error="uploadError" :multiple="multiple" :on-change="changeImage" :show-file-list="false" :on-success="uploadSuccess" :auto-upload="true" :data="fileData" :action="requestUrl" accept="image/*" list-type="picture-card">
      <i class="el-icon-plus"></i>
    </el-upload>
  </div>
</template>

<script>
export default {
  props: {
    // 请求路径
    requestUrl: {
      type: String,
      required: true,
    },
    // 上传图片类型
    type: {
      type: String,
      required: true,
    },
    // 是否支持多图片上传
    multiple: {
      type: Boolean,
      default: false,
    }
  },
  data () {
    return {
      // 上传图片附带的参数
      fileData: {},
      // 存放图片列表  
      imgList: [],
    }
  },
  methods: {
    // 选择图片上传
    changeImage (file) {
      this.fileData = {
        type: this.type,
        image: file.raw,
        token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wva3FjLmtvbmdxdWVjaGFvLmNvbSIsIm5iZiI6MTY0MDMxNDkyOCwiaWF0IjoxNjQwMzE0OTI4LCJqdGkiOnsidWlkIjoxMzAxLCJ1c2VybmFtZSI6bnVsbCwic2lkIjoxMzMzLCJzdHVkaW9fbmFtZSI6InpjdGVzdDEiLCJwaG9uZSI6IjE1Njk3NjM2NDc1IiwibG9nbyI6Imh0dHBzOlwvXC9pbWcua29uZ3F1ZWNoYW8uY29tXC9wdWJsaWNcL3N0YXRpY1wvc3R1ZGlvX2xvZ29cL21pbmlcLzIwMjExMDE1XC8yMDIxMTAxNTEyMDAzNjMzMjEucG5nIn19.rS2jNFj5ERdBvYtCbtNfWDDndhkFrdUr83Ihrj1i30Syk1c0OFfz73bRt4gnsd7gs5CSiemfSVRV8l3ttXt74OA68Y4A76i-btfdimTYQ2U13Prm4h_W0mvhiYPj1Btxl4oVjEvjzmmX_Y70RHLY6p1-Jv0trCnTbWryZsUdIpY"
      }
    },
    // 上传成功
    uploadSuccess (response) {
      // 把图片放到imgList，再发请求
      console.log(response);
    },
    // 上传失败
    uploadError (err) {
      console.log(err);
    }

  }

}
</script>

<style>
</style>