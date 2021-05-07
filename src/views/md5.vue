<template>
  <div>
    <input @change="change" ref="input" type="file">
  </div>
</template>
<script>
  import SparkMD5 from 'spark-md5'
  export default {
    name: "app",
    data() {
      return {

      };
    },
    methods: {
      /**
       * @description 选择文件
       */
      change() {
        console.log(this.$refs.input.files[0], "文件对象");
        // 获取文件md5码
        this.getFileMd5(this.$refs.input.files[0]).then(res => {
          console.log(res, "md5码");
        }).catch(err => {
          console.log("获取文件md5失败");
        })
      },
      /**
       * @description 单个文件生成md5码
       * @param {File对象}
       * @return {Promise对象}
       */
      getFileMd5(file) {
        return new Promise((resolve, reject) => {
          // 创建文件读取对象，此对象允许Web应用程序异步读取存储在用户计算机上的文件内容
          let fileReader = new FileReader();
          // 根据浏览器获取文件分割方法
          let blobSlice = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice;
          // 指定文件分块大小(2M)
          let chunkSize = 2 * 1024 * 1024;
          // 计算文件分块总数
          let chunks = Math.ceil(file.size / chunkSize);
          // 指定当前块指针
          let currentChunk = 0;
          // 创建MD5计算对象
          let spark = new SparkMD5.ArrayBuffer();
          // FileReader分片式读取文件
          loadNext();
          // 当读取操作成功完成时调用
          fileReader.onload = function () {
            // 将文件内容追加至spark中
            spark.append(this.result);
            currentChunk += 1;
            // 判断文件是否都已经读取完
            if (currentChunk < chunks) {
              loadNext();
            } else {
              // 计算spack中内容的MD5值,并返回
              let md5 = spark.end()
              // 将md5保存到文件对象中
              file.md5name = md5
              resolve(md5)
            }
          };
          // FileReader分片式读取文件
          function loadNext() {
            // 计算开始读取的位置
            let start = currentChunk * chunkSize;
            // 计算结束读取的位置
            let end = start + chunkSize >= file.size ? file.size : start + chunkSize;
            fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
          }
        })
      }
    },
  };
</script>
<style lang="scss" scoped>

</style>