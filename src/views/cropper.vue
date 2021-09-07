<template>
  <div class="cropper">
    <!-- 上传图片组件 -->
    <el-upload list-type="picture" :auto-upload="false" accept="image/*" :on-change="changeImage" class="avatar-uploader" action="">
      <i class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <!-- 裁剪组件 -->
    <cropper ref="cropper" @cropperImg="cropperImg"></cropper>
  </div>
</template>

<script>
import cropper from "../components/cropper.vue";
export default {
  components: {
    cropper
  },
  methods: {
    /**
     * @description 选择图片
     * @method changeImage
     */
    changeImage (file) {
      this.$refs.cropper.changeCropperSize(file, [300, 300])
    },
    /**
     * @descriotion 裁剪图片事件
     * @method cropperImg
     * 
     */
    cropperImg (fileInfo) {
      // 把Blob对象转为File对象
      const fileObj = this.$refs.cropper.blobToFile(fileInfo.file, fileInfo.fileName);
      console.log(fileObj); // 获取文件对象，进行上传
    }
  }
}
</script>

<style lang="scss" scoped>
.cropper {
  margin: 10px;
}
// 上传组件
/deep/ .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>