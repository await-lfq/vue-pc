module.exports={
  devServer:{
    open:true,
    proxy:{
      "/lfq":{
        // target:"https://event.kongquechao.com", // 上传图片的域名
        // target:"https://m.maoyan.com", // 数据下拉加载列表 
        target:"https://kqc.kongquechao.com", // 原生文件上传接口
        changeOrigin:true,
        pathRewrite:{
          "^/lfq":"/"
        }
      }
    }
  }
}