<template>
  <!-- 文件夹上传 -->
  <div class="file-upload" @dragover.prevent @drop.prevent="drop">
    <label class="label">
      上传文件夹
      <input @change="change" multiple webkitdirectory="webkitdirectory" class="upload-component" type="file">
    </label>
  </div>
</template>
<script>
export default {
  props: ["changeFile"],
  data () {
    return {
    }
  },
  methods: {
    // input标签change事件
    change (e) {
      this.changeFile(e.target.files);
      e.target.value = "";
    },
    // 托拽文件夹放到对应区域是触发
    async drop (e) {
      // 获取DataTransfer对象
      const dataTransfer = e.dataTransfer;
      // 获取DataTransferItemList对象，并转为数组
      let dataTransferItemList = Array.from(dataTransfer.items);
      // 兼容处理
      let dataTransferItem = dataTransferItemList[0]
      if (dataTransferItem.webkitGetAsEntry) {
        dataTransferItem = dataTransferItem.webkitGetAsEntry();
      } else if (dataTransferItem.getAsEntry) {
        dataTransferItem = dataTransferItem.getAsEntry();
      } else {
        alert("浏览器不支持托拽上传");
        return;
      };
      // 获取文件夹目录结构树
      const fileList = await this.getFileTree(dataTransferItem);
      // 发送数据到父组件上面去
      this.changeFile(this.flatten(fileList,[]));
     
    },
    // 获取文件夹目录结构树
    async getFileTree (item) {
      const dir = new Array();
      if (item.isFile) { //  为文件时
        return await this.readFile(item);
      } else if (item.isDirectory) { // 为文件夹时
        let entries = [];
        let flag = true;
        const directory = item.createReader(); 
        do {
          let res = await this.readDirectory(directory);
          if (res.length > 0) {
            entries = entries.concat(res);
          } else {
            flag = false;
          }
        } while (flag);
        for (let i = 0; i < entries.length; i++) {
          dir.push(await this.getFileTree(entries[i]));
        }
        return dir;
      }
    },
    // 读取文件
    readFile (file) {
      return new Promise((resolve, reject) => {
        file.file((res) => {
          resolve(res);
        });
      });
    },
    // 读取文件夹
    readDirectory (directory) {
      return new Promise((resolve, reject) => {
        directory.readEntries((res) => {
          resolve(res);
        });
      });
    },
    // 展平数组
    flatten (arr,emptyArray) {
      for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          this.flatten(arr[i],emptyArray);
        } else {
          emptyArray.push(arr[i]);
        }
      }
      return emptyArray;
    }
  }
}
</script>


<style scoped lang="scss">
/* 文件夹上传 */
.file-upload {
  width: 200px;
  height: 200px;
  background-color: #fff;
  border: 1px dashed #ccc;
  .label {
    display: block;
    width: 100%;
    height: 100%;
    line-height: 200px;
    text-align: center;
    .upload-component {
      opacity: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>