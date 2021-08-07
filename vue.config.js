module.exports={
  // 开发环境，配置跨域
  devServer:{
    open:true,
    proxy:{
      "/test":{
        // target:"https://event.kongquechao.com", // 上传图片的域名
        // target:"https://m.maoyan.com", // 数据下拉加载列表 
        // target:"https://kqc.kongquechao.com", // 原生文件上传接口
        target:"http://localhost:2021",
        changeOrigin:true,
        pathRewrite:{
          "^/test":"/"
        }
      }
    }
  }
}