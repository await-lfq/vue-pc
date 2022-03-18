<template>
  <div class="cropper">
    <el-dialog title="图片剪裁" :visible.sync="dialogVisible" append-to-body>
      <div class="cropper-content">
        <div class="tips">滑动鼠标滚轮可放大缩小图片！</div>
        <Vue-cropper style="height:300px" ref="cropper" :fixedNumber="option.fixedNumber" :img="option.img" :info="option.info" :outputSize="option.size" :outputType="option.outputType" :canScale="option.canScale" :full="option.full" :canMove="option.canMove" :canMoveBox="option.canMoveBox" :original="option.original" :autoCrop="option.autoCrop" :fixed="option.fixed" :centerBox="option.centerBox" :infoTrue="option.infoTrue" :fixedBox="option.fixedBox" :enlarge="option.enlarge">
        </Vue-cropper>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="cropperAction">确 认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { VueCropper } from "vue-cropper"
export default {
  data () {
    return {
      // 裁剪组件的配置参数
      option: {
        fixedNumber: [1, 1], // 截图框的宽高
        img: '', // 裁剪图片的地址
        info: true, // 裁剪框的大小信息
        outputSize: 1, // 裁剪生成图片的质量(0.1 - 1)
        outputType: 'jpeg', // 裁剪生成图片的格式
        canScale: true, // 图片是否允许滚轮缩放
        autoCrop: true, // 是否默认生成截图框
        fixedBox: true, // 固定截图框大小 不允许改变
        fixed: true, // 是否开启截图框宽高固定比例
        full: true, // 是否输出原图比例的截图
        canMoveBox: true, // 截图框能否拖动
        original: false, // 上传图片按照原始比例渲染
        centerBox: false, // 截图框是否被限制在图片里面
        infoTrue: false, // true为展示真实输出图片宽高，false展示看到的截图框宽高
        enlarge: 1, // 图片根据截图框输出比例倍数(0-max，建议不要太大不然会卡死的呢)
        canMove: true // 上传图片是否可以移动
      },
      fileName: '', // 文件名称
      dialogVisible: false, // 是否显示Dialog 
    }
  },
  components: {
    VueCropper,
  },
  methods: {
    /**
     * @description 选择裁剪的大小
     * @method changeCropperSize
     * @param {File对象,Array对象} 文件对象  截图框的宽高比例
     */
    changeCropperSize (file, size) {
      this.option.fixedNumber = size // 裁剪框的宽高
      this.option.img = file.url // 图片路径
      this.fileName = file.name // 文件名称
      this.dialogVisible = true // 显示弹框
    },
    /**
     * @description 裁剪动作
     * @method cropperAction
     */
    cropperAction () {
      this.$refs.cropper.getCropBlob((data) => {
        this.$emit("cropperImg", {
          file: data,
          fileName: this.fileName
        })
        this.dialogVisible = false // 隐藏弹框
      })
    },
    /**
     * @description 把blob转为File对象
     * @method blobToFile
     * @param {Blob对象,String}  Blob对象 文件名称
     */
    blobToFile (blob, fileName) {
      return new File([blob], fileName, { type: blob.type, lastModified: Date.now() })
    }
  }

}
</script>

<style lang="scss" scoped>
.tips {
  color: #303133;
  margin-bottom: 10px;
  text-align: center;
}
/deep/ .el-dialog {
  width: 1080px;
}
/deep/ .el-dialog__body {
  padding-left: 0;
  padding-right: 0;
}
</style>