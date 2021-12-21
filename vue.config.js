module.exports={
  lintOnSave: false, // 关闭严格模式
  devServer:{ // 开发环境，配置跨域
    open:true,
    proxy:{
      "/test":{
        // target:"https://event.kongquechao.com", // 上传图片的域名
        // target:"https://m.maoyan.com", // 数据下拉加载列表的域名 
        target:"https://kqc.kongquechao.com", // 原生文件上传的域名
        changeOrigin:true,
        pathRewrite:{
          "^/test":"/"
        }
      }
    }
  }
}