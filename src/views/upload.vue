<template>
  <div class="upload">
    <!-- 上传图片 -->
    <div class="container-upload">
      <h3 class="title">图片上传</h3>
      <div class="img-box">
        <van-uploader @delete="deleteFile" multiple v-model="fileList" :after-read="afterRead" />
      </div>
    </div>
  </div>
</template>

<script>
  import {
    post
  } from "../utils/request";
  import {
    aliSign
  } from "../utils/api";
  import axios from "axios";
  export default {
    data() {
      return {
        fileList: [], // 需要上传的文件列表  
        aliSign: {}, // 阿里签名
        uploadList: [], // 上传队列的文件列表
        isUpload: false, // false表示无任务上传 true表示有任务上传  
        doneUploadList: [], // 已上传完的文件列表
      }
    },
    created() {
      //如果本地文件，就把文件取出来
      if (localStorage.getItem("file")) {
        this.doneUploadList = JSON.parse(localStorage.getItem("file"));
        this.fileList = JSON.parse(localStorage.getItem("file"));
      }

      // 得到阿里签名
      this.getAliSign();
      /************* 维护上传队列 ***************/
      setInterval(async () => {
        if (!this.isUpload && this.uploadList.length > 0) {
          // 更改上传状态
          this.isUpload = true;
          // 取出上传队列的一个任务，并上传
          let uploadFile = this.uploadList.pop();
          // 找到当前的上传文件索引
          let uploadIndex = this.fileList.findIndex(item => item.id == uploadFile.id);
          let uploadRes = await this.uploadAli(uploadFile.file.file);
          // 上传成功
          if (uploadRes.data.code == 0) {
            // 修改上传状态
            this.isUpload = false;
            this.fileList[uploadIndex].message = "上传完成";
            this.fileList[uploadIndex].status = "done";
            // 放到上传完的队列当中
            this.doneUploadList.push({
              url: uploadRes.data.data.url,
              status: this.fileList[uploadIndex].status,
              message: this.fileList[uploadIndex].message,
              id: this.fileList[uploadIndex].id
            })
            localStorage.setItem("file", JSON.stringify(this.doneUploadList));
          } 
        }
      }, 200)
    },
    methods: {
      /**
       * description 删除文件
       * @method deleteFile
       */
      deleteFile(file) {
        console.log(this.doneUploadList, "已经完成上传的文件列表");
        console.log(file, "删除的文件");
        // 需要删除文件的索引
        let deleteIndex = this.doneUploadList.findIndex(item => item.id == file.id);
        this.doneUploadList.splice(deleteIndex, 1);
        // 更新本地
        localStorage.setItem("file", JSON.stringify(this.doneUploadList))
      },
      /**
       * @description 获取阿里云签名
       * @method  getAliSign
       */
      getAliSign() {
        post(aliSign, {
          id: 1
        }).then(res => { // id默认传1
          // 阿里签名  
          this.aliSign = Object.assign({}, this.aliSign, res);
        })
      },
      /**
       * @description 文件读取完成后的回调
       * @method afterRead
       * @param {File对象,Object对象} 文件对象 额外信息
       */
      afterRead(file) {
        if (Array.isArray(file)) { // 多选
          file.forEach((item) => {
            this.getUploadList(item) // 添加到上传队列
          })
        } else { // 单选
          this.getUploadList(file) // 添加上传队列
        }
      },
      /**
       * description 得到一个上传数组队列
       * @method getUploadList
       * @param {File对象,number} File对象 当前的索引值
       */
      getUploadList(file) {
        // 给文件添加一个唯一的id标识符
        let id = this.randomString(6);
        file.id = id;
        file.message = '上传中...'; // 修改上传状态
        file.status = 'uploading'; // 修改上传状态
        this.uploadList.unshift({ // 添加到上传队列
          file,
          id
        });
      },
      /**
       * @description 把图片上传到阿里去
       * @param {File文件对象} 文件对象
       * @method uploadAli
       * @return {Promise对象} 返回一个Promise对象
       */
      uploadAli(file) {
        // 阿里签名的参数
        let {
          host,
          accessid,
          callback,
          dir,
          policy,
          signature
        } = this.aliSign;
        let key = `${dir}${this.randomString(6)}${file.name}` //存放图片的路径
        let formData = new FormData();
        formData.append("callback", callback);
        formData.append("key", key);
        formData.append("file", file); //需放最后面，否则报400 Bad Request
        return new Promise((resolve, reject) => {
          axios.post(host, formData, {
            headers: {
              accessid,
              policy,
              signature
            }
          }).then(res => {
            resolve(res);
          }).catch(err => {
            this.$toast("请求阿里失败")
          })
        })

      },
      /**
       * description 获取指定长度的随机字符串
       * @method randomString
       * @param {number} 指定字符串长度的数字
       */
      randomString(num) {
        let str = "123456789";
        let res = "";
        for (let i = 0; i < num; i++) {
          res += parseInt(Math.random() * str.length)
        }
        return res;
      }
    }

  }
</script>

<style lang="scss" scoped>
  .container-upload {
    .title {
      color: red;
      font-size: .4rem;
      text-align: center
    }

    .img-box {
      padding-top: 10px;
      background: #ccc;
    }
  }
</style>