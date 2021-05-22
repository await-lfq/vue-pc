module.exports={
  devServer:{
    open:true,
    proxy:{
      "/lfq":{
        // target:"https://event.kongquechao.com", // 上传图片的域名
        target:"https://m.maoyan.com", // 数据下拉加载列表  
        changeOrigin:true,
        pathRewrite:{
          "^/lfq":"/"
        }
      }
    }
  }
}