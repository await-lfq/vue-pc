<template>
  <div class="verify-code">
    <input class="text" type="text">
    <div class="btn" @click="getVerifyCode">{{content}}</div>
  </div>
</template>

<script>
  import {get} from "../utils/request";
  import {
   verifyCode
  } from "../utils/api";
  export default {
    data() {
      return {
        // 按钮上面的内容
        content: "获取验证码"

      }
    },
    methods: {
      /**
       * @description 获取验证码(模拟获取验证码，请求有问题，思路一样)
       */
      getVerifyCode() {
        if (!this.flag) {
          this.flag = true // 防止点击多次
          // 调用获取验证码接口
          get(verifyCode, {
            account: "C26601218",
            password: "6fbc7db2a66cd4f346970347daeff1d5",
            mobile: "15797800251",
            content: "您的验证码是：1234。请不要把验证码泄露给其他人。"
          }).then(res => {
            console.log(res, "结果");
          }).catch(err => {
            console.log("请求失败");
            throw err;
          })
          let time = 60;
          let interval = setInterval(() => {
            if (time == 0) {
              this.content = "请重新获取";
              this.flag=false; // 重新获取验证码，需开启点击状态
              clearInterval(interval);
              return;
            }
            this.content = `已发送 ${time}s`
            time--;
          }, 1000);
        }

      }
    }

  }
</script>

<style lang="scss" scoped>
  // 获取二维码
  .verify-code {
    display: flex;
    margin: 30px;

    .text {
      width: 100px;
      height: 30px;
      border: 1px solid #ccc;
      margin-right: 10px;
      display: inline-block;
      font-size:16px;
      padding-left: 10px;
      box-sizing: border-box;

    }

    .btn {
      width: 100px;
      height: 50px;
      border-radius: 20px;
      line-height: 50px;
      font-size: 16px;
      text-align: center;
      background-color: #ccc;
      cursor: pointer;
      display: inline-block;
      margin-top: -10px;
    }
  }
</style>