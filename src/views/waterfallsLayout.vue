<template>
  <div id="app">
    <div class="wrap">
      <template v-for="item in dataList">
        <div class="item" :key="item.id" :style="{background:item.background,height:item.height+'px'}">{{item.id}}</div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      // 瀑布流数据
      dataList: [{
        id: 1,
        height: 100,
        background: "yellow"
      },
      {
        id: 2,
        height: 50,
        background: "red"
      },
      {
        id: 3,
        height: 300,
        background: "blue"
      },
      {
        id: 4,
        height: 200,
        background: "orange"
      },
      {
        id: 5,
        height: 100,
        background: "#ccc"
      },
      {
        id: 6,
        height: 400,
        background: "#cc1"
      },
      {
        id: 7,
        height: 100,
        background: "#cc9"
      },
      {
        id: 8,
        height: 100,
        background: "#f12"
      },
      {
        id: 9,
        height: 50,
        background: "#58bc58"
      },
      {
        id: 10,
        height: 500,
        background: "#c51"
      }

      ]
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
// 瀑布流
.wrap {
  width: 80%;
  margin: 0 auto;
  padding: 0 50px;
  box-sizing: border-box;
  column-count: 2;
  column-gap: 20px;
  .item {
    page-break-inside: avoid;
    margin-bottom: 10px;
  }
}
</style>