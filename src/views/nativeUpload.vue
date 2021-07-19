<template>
  <div class="navite-upload">
    <!--单张图片 -->
    <div class="single-upload">
      <h3>单文件上传</h3>
      <div>
        <div class="img-container" v-show="thumbnail.length>0" v-for="(item,index) in thumbnail" :key="index">
          <img class="img" :src="item.imgUrl" alt="">
          <div class="shade" v-if="!item.isUpload">
            <img class="loading-icon" src="../images/loading_icon.gif" alt="">
          </div>
        </div>
        <div class="upload-box" @drop="function(){}" @dragenter="function(){}" @dragleave="function(){}" @dragover="function(){}">
          <input multiple accept="image/*" @change="handlerChange" class="file-input" type="file">
          <i class="upload-icon"></i>
        </div>
      </div>
    </div>
    <!-- 多图片上传 -->
  </div>
</template>

<script>
import { post } from "../utils/request";
import { uploadImg } from "../utils/api";
export default {
  data() {
    return {
      // 缩略图
      thumbnail: [],
      // 需要上传的图片
      uploadFile: [],
      // 一个标识key
      key: 0,
    };
  },
  mounted() {
    setInterval(async () => {
      if (this.uploadFile.length > 0) {
        // 取数组前面的第一个任务进行上传
        let fileObj = this.uploadFile.shift(); 
        // 用FormData对象上传
        let formData = new FormData();
        formData.append("image", fileObj.file);
        formData.append("token", "TF7WN8fxDJQ4NjJ61484");
        formData.append("status", 1);
        // 调用上传接口
        await post(uploadImg, formData);
        // 找到上传那个文件对应的预览图
        this.thumbnail.find((item) => item.key == fileObj.key).isUpload = true;
      }
    }, 200);
  },
  methods: {
    /**
     * @description 文件上传change事件
     * @method handlerChange
     * @param {Event事件对象} e
     */
    handlerChange(e) {
      console.log(e,"事件对象");
      // 一个标识key
      this.key++;
      // 上传的图片
      let file = e.target.files[0];
      // 获取缩略图
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.thumbnail.push({
          imgUrl: reader.result,
          file,
          isUpload: false,
          key:this.key,
        });
        // 上传的图片
        this.uploadFile.push({
          imgUrl: reader.result,
          file,
          isUpload: false,
          key:this.key,
        });
      };
      // 上传同个文件触发change事件
      e.target.value = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.navite-upload {
  padding-left: 20px;
}
// 单文件上传
.single-upload {
  h3 {
    color: #000;
    font-size: 30px;
    font-weight: 900;
    margin-bottom: 20px;
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    .img-container {
      position: relative;
      width: 122px;
      height: 122px;
      border: 1px dashed #ccc;
      border-radius: 10px;
      margin-right: 10px;
      .img {
        width: 122px;
        height: 122px;
        border-radius: 10px;
        object-fit: cover;
      }
      .shade {
        width: 122px;
        height: 122px;
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.7);
        position: absolute;
        left: 0;
        top: 0;
        .loading-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
    .upload-box {
      width: 122px;
      height: 122px;
      border: 1px dashed #ccc;
      border-radius: 10px;
      position: relative;
      overflow: hidden;
      .file-input {
        opacity: 0;
        width: 100%;
        height: 152px;
        cursor: pointer;
        position: absolute;
        top: -30px;
        right: 0;
        z-index: 100;
      }
      .upload-icon {
        display: block;
        width: 50px;
        height: 50px;
        background: url("../images/upload_icon.png") no-repeat center;
        background-size: 100% 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>