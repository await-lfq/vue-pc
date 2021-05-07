<template>
  <div class="server">
    <!-- 图片 -->
    <div class="picture">
      <img src="../images/robot.png" alt />
      <div class="call">
        <i class="sjx sxj-color1"></i>
        <i class="sjx sxj-color2"></i>
        <p class="all-text">
          <span class="text1">Hi，我是智能机器人</span>
          <span class="text2">之你所想、快速搞定问题</span>
        </p>
      </div>
    </div>
    <!-- 信心任容 -->
    <div class="info-detail" ref="scroll">
      <p class="time">{{time}}</p>
      <ul>
        <li
          v-for="(item,index) of info"
          :key="index"
          :class="{robot:item.who==='robot'?true:false,
          user:item.who==='user'?true:false,
          'char-maxlength':item.content.length>=24?true:false,
          }"
        >
          <img :src="item.imgSrc" />
          {{item.content}}
        </li>
      </ul>
      <p class="flag" v-if="isok">
        <span v-for="item in flag" @click="sendFlagInfo(item)" :key="item">{{item}}</span>
      </p>
    </div>
    <!-- 发送信息 -->
    <div class="send-info">
      <input type="text" ref="text" @keyup.enter="sendInfo" v-model="val" placeholder="有问题，找客服" />
      <button @click="sendInfo">发送</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //时间
      time: "",
      //输入框的内容
      val: "",
      //显示的信息
      info: [
        {
          who: "robot",
          content: "你好！我是机器人小党建，有任何疑问都可以问我哦~",
          imgSrc: require("../images/robot.png"),
        },
      ],
      // 机器人回复的信息
      robotAllInfo: [
        "客服电话：020-12345678",
        "修改密码：在个人中心设置",
        "三会一课：在首页底部可以看",
      ],
      //信息标记
      flag: ["三会一课", "修改密码", "客服电话"],
      //是否显示信息
      isok:true
    };
  },
  created() {
    this.time = this.filterTime();
  },
  mounted() {
    this.$refs.text.focus();
  },
  methods: {
    //时间格式化
    filterTime() {
      let date = new Date();
      let hours = (date.getHours() + "").padStart(2, "0"),
        minutes = date.getMinutes();
      return `${hours}:${minutes}`;
    },
    // 用户发送信息
    sendInfo() {
      if (this.val.trim().length === 0) {
        alert("输入的内容不为空");
        return;
      }
      this.info.push({
        who: "user",
        content: this.val.trim(),
        imgSrc: require("../images/user.png"),
      });
      this.$refs.text.focus();
      this.scrollBottom();
      this.robotInfo();
      this.val = "";
      this.isok=false;
    },
    // 机器人回复的信息
    robotInfo() {
      let userInfo = this.val.trim();
      let robotInfo = this.robotAllInfo.find((ele) => ele.includes(userInfo));
      if (robotInfo) {
        setTimeout(() => {
          this.info.push({
            who: "robot",
            content: robotInfo,
            imgSrc: require("../images/robot.png"),
          });
          this.scrollBottom();
        }, 1000);
      } else {
        setTimeout(() => {
          this.info.push({
            who: "robot",
            content: "你可以为问：三会一课,修改密码,客服电话等问题",
            imgSrc: require("../images/robot.png"),
          });
          this.scrollBottom();
        }, 1000);
      }
    },
    // 滚动条滚动到底部
    scrollBottom() {
      this.$nextTick(function () {
        console.log(this.$refs.scroll.scrollHeight);
        this.$refs.scroll.scrollTop = this.$refs.scroll.scrollHeight;
      });
    },
    // 发送标记信息
    sendFlagInfo(content) {
      this.info.push({
        who: "user",
        content,
        imgSrc: require("../images/user.png"),
      });
      let robotInfo = this.robotAllInfo.find((ele) => ele.includes(content));
      setTimeout(() => {
        this.info.push({
          who: "robot",
          content:robotInfo,
          imgSrc: require("../images/robot.png"),
        });
      }, 1000);
      this.isok=false;
    },
  },
};
</script>

<style scoped lang="scss">
.server {
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #c0c4cc;
  display: flex;
  flex-direction: column;
}
//图片
.picture {
  height: 2.666667rem;
  background-color: #fff;
  display: flex;
  padding-left: 0.666667rem;
  img {
    width: 2.666667rem;
    height: 100%;
  }
  .call {
    flex: 1;
    padding-top: 0.266667rem;
    position: relative;
    .sjx {
      position: absolute;
      display: block;
      width: 0;
      height: 0;
    }
    .sxj-color1 {
      border: 0.266667rem solid transparent;
      border-color: transparent #409eff transparent transparent;
      top: 0.666667rem;
      left: -0.506667rem;
    }
    .sxj-color2 {
      border: 0.266667rem solid transparent;
      border-color: transparent #fff transparent transparent;
      top: 0.666667rem;
      left: -0.406667rem;
    }
    .all-text {
      width: 4.666667rem;
      height: 80%;
      padding: 0.266667rem 0 0 0.266667rem;
      box-sizing: border-box;
      border: 0.04rem solid #409eff;
      span {
        display: block;
      }
      .text1 {
        color: #409eff;
        font-size: 0.4rem;
        font-weight: 900;
        margin-bottom: 0.2rem;
      }
      .text2 {
        color: #409eff;
        font-size: 0.293333rem;
      }
    }
  }
}
// 信息详情
.info-detail {
  flex: 1;
  overflow: auto;
  position: relative;
  .time {
    height: 0.666667rem;
    text-align: center;
    line-height: 0.666667rem;
    font-size: 0.293333rem;
    color: #fff;
  }
  ul {
    padding: 0 1.333333rem 0 1.333333rem;
    li {
      font-size: 0.346667rem;
      border-radius: 0.333333rem;
      clear: both;
      margin-bottom: 0.533333rem;
      position: relative;
      line-height: 1.0rem;
      padding-left: 0.133333rem;
      padding-right: 0.133333rem;
      padding-top: 0.106667rem;
     min-height:1.333333rem;
    }
    .robot {
      float: left;
      background-color: #fff;
      color: #000;
      img {
        width: 1.066667rem;
        height: 1.066667rem;
        position: absolute;
        left: -1.2rem;
        top: 0.133333rem;
      }
    }
    .user {
      float: right;
      background-color: #409eff;
      color: #fff;
      img {
        width: 1.066667rem;
        height: 1.066667rem;
        position: absolute;
        right: -1.06667rem;
        top: 0.133333rem;
      }
    }
    .char-maxlength {
      min-height: 1.333333rem;
      padding: 0.133333rem 0.133333rem 0 0.133333rem;
      width: 5.233333rem;
      line-height: 0.533333rem;
      word-wrap: break-word;
    }
  }
  .flag {
    width: 100%;
    height: 1.333333rem;
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 0.4rem 0 0 0.4rem;
    box-sizing: border-box;
    span {
      display: inline-block;
      height: 0.666667rem;
      line-height: 0.666667rem;
      background-color: cornsilk;
      font-size: 0.346667rem;
      margin-right: 0.4rem;
      border-radius: 0.266667rem;
      padding: 0 0.333333rem;
    }
  }
}
// 发送信息
.send-info {
  height: 1.333333rem;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0.2rem 0 0 0.4rem;
  input {
    vertical-align: middle;
    display: inline-block;
    width: 70%;
    height: 70%;
    background-color: #ccc;
    border-radius: 0.266667rem;
    margin-right: 0.4rem;
    padding-left: 0.266667rem;
    box-sizing: border-box;
    color: #000;
    font-size: 0.373333rem;
    &::placeholder {
      color: #909399;
      font-size: 0.346667rem;
    }
  }
  button {
    vertical-align: middle;
    display: inline-block;
    width: 2rem;
    height: 80%;
    background-color: #409eff;
    text-align: center;
    color: #fff;
    font-size: 0.373333rem;
    border-radius: 0.133333rem;
  }
}
</style>