<template>
  <div>
    <element-upload :multiple="true" type="studio" requestUrl="https://api.getlikes.kongquechao.com/index/studio/upload" />
  </div>
</template>
<script>
import elementUpload from "../components/elementUpload";
export default {
  data () {
    return {

    };
  },
  components: {
    elementUpload
  },


}
</script>

<style>
</style>