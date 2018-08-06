<template>
 <div id='home'>
   <!-- 首页中心内容 -->
    <div class="ctnMain w">
      <!-- 左侧布局 -->
     <index-main />
      <!-- 右侧布局 -->
      <!-- <ctn-tag></ctn-tag> -->
    </div>
 </div>
</template>

<script>
import indexMain from "~/components/indexMain";
export default {
  data() {
    return {};
  },
  components: {
    indexMain
  }
};
</script>

<style>
</style>
