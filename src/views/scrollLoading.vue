<template>
  <div class="scroll-loading">
    <div class="box1" ref="box1">
      <div class="item" v-for="(item,index) of dataList" :key="index">
        {{item.showInfo}}
      </div>
      <div v-if="isShow" class="loading">{{text}}</div>
    </div>
  </div>
</template>

<script>
import { get } from "../utils/request";
import { moreComingList } from "../utils/api";
export default {
  data () {
    return {
      // 列表数据
      dataList: [],
      // 滚动到底部显示的文字
      text: "加载中......",
      // 页面数
      page: 1,
      // 是否显示
      isShow: true,
    };
  },
  mounted () {
    // 列表数据
    this.getMoreComingList(1);
  },
  methods: {
    /**
     * @description 滚动加载数据
     *
     */
    scrollLoading () {
      // 在元素里面滚动时(当在window下面滚动时需用html元素，不能用body元素，有兼容性)
      this.$refs.box1.onscroll = () => {
        if (
          Math.ceil(this.$refs.box1.clientHeight + this.$refs.box1.scrollTop) >=
          this.$refs.box1.scrollHeight
        ) {
          this.page++;
          if (this.page > 5) {
            this.text = "没有数据了......";
            this.$refs.box1.onscroll = null; // 当数据全部加载完之后就清掉滚动事件
            return;
          }
          this.$refs.box1.onscrol = null; // 当下拉底部时，发请求加载下一页数据，就要把滚动事件清掉
          this.getMoreComingList(this.page);
        }
      };
    },
    /**
     * @description 获取列表数据
     * @method getMoreComingList
     * @params {number} 页数
     */
    async getMoreComingList (page) {
      this.$refs.box1.onscroll = null;
      try {
        let res = await get(moreComingList, {
          token: "",
          movieIds:
            "1299178,1250964,1302134,1241385,1383416,1221,1284360,1211382,1339160,632158",
          optimus_uuid:
            "DB94DB10B97511EBB67EA7C1FD852734A56AADAFB9154B36A1AB4DB636DEBA67",
          optimus_risk_level: 71,
          optimus_code: page,
        });
        if (page == 1) {
          this.dataList.push(...res.coming);
          this.scrollLoading(); // 数据到来时，监听页面滚动
        } else {
          setTimeout(() => {
            this.dataList.push(...res.coming);
            this.scrollLoading(); //数据到来时，监听页面的滚动
          }, 2000);
        }
      } catch (error) {
        console.log("请求失败");
        throw error;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// 方式1
.box1 {
  height: 500px;
  background-color: red;
  overflow: auto;
  .item {
    height: 100px;
    font-size: 20px;
    color: #ccc;
    text-align: center;
    line-height: 100px;
    background: #000;
    border-bottom: 2px solid #ccc;
  }
  .loading {
    text-align: center;
    line-height: 100px;
  }
}
</style>