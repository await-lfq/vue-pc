<template>
  <div>
    <el-upload accept="image/*" :on-change="changeFile" class="avatar-uploader" action="">
      <i class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    /**
     * @description 选择文件
     * @method changeFile
     * @param {File对象} File对象
     */
    changeFile (file) {

      this.compressImage(file.raw, 400, 400, "image/png").then(res => {
        console.log(res,"文件对象");
      }).catch(err => {
        console.log(err);
      })
    },
    /**
     * @description 压缩图片
     * @method compressImage
     * @param {File对象,number,number,string} File对象 压缩之后图片的宽度 压缩之后图片的高度 压缩之后图片的类型
     */
    compressImage (file, maxWidth, maxHeight, type) {
      return new Promise((resolve, reject) => {
        // 压缩图片需要用到的一些js对象
        const fileReader = new FileReader();
        const img = new Image();
        // 缩放图片需要的canvas
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        // 读取File对象
        fileReader.readAsDataURL(file);
        // 读取文件成功
        fileReader.onload = function () {
          img.src = fileReader.result;
        }
        // 读取文件失败
        fileReader.onerror = function () {
          reject("读取文件失败");
        };
        // 监听图片装载完成
        img.onload = () => {
          // 获取图片的宽度与高度
          const { width: originWidth, height: originHeight } = img;
          // 计算图片的原始比例
          const proportion = originWidth / originHeight;
          if (originWidth > maxWidth || originHeight > maxHeight) { // 压缩图片
            // 按比例去算出压缩之后的图片宽高
            const targetWidth = maxWidth;
            const targetHeight = targetWidth / proportion;
            // 用canvas进行缩放图片
            canvas.width = targetWidth; // canvas宽
            canvas.height = targetHeight; // canvas高
            context.clearRect(0, 0, targetWidth, targetHeight);  // 清除画布
            context.drawImage(img, 0, 0, targetWidth, targetHeight); // 图片压缩
            // Blob对象转File对象
            canvas.toBlob((blobObj) => {
              // 新文件对象
              const fileObj = new File([blobObj], file.name, { type: blobObj.type, lastModified: Date.now() });
              resolve(fileObj)
            }, type);
          } else { // 不要压缩
            resolve(file);
          }
        }
        // 监听图片装载失败
        img.onerror = function () {
          reject("图片装载失败");
        }
      })
    },
  }

}
</script>

<style lang="scss" scoped>
/deep/ .avatar-uploader {
  width: 178px;
  height: 178px;
}
/deep/ .el-upload {
  width: 178px;
  height: 178px;
  line-height: 178px;
  border: 1px solid #ccc;
}
</style>