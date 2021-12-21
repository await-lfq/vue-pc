<template>
  <div class="drag">
    <drag-com :dataList="dataList"></drag-com>
  </div>
</template>

<script>
import dragCom from "../components/drag.vue";
export default {
  data () {
    return {
      dataList: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }

  },
  components: {
    dragCom
  }
}
</script>

<style scoped lang="scss">
</style>