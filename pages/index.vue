<template>
  <div id="index">
    <!-- 首页头部 -->
    <!-- <head-top></head-top> -->
    <nuxt />
    <!-- 首页中心内容 -->
    <!-- <div class="ctnMain w"> -->
      <!-- 左侧布局 -->
     <!-- <index-main /> -->
      <!-- 右侧布局 -->
      <!-- <ctn-tag></ctn-tag> -->
    <!-- </div> -->
  </div>
</template>

<script>
import headTop from "~/components/headTop";
import indexMain from "~/components/indexMain";
import ctnTag from "~/components/ctnTag";
export default {
  // data() {
  //   return {};
  // },
  created() {},
  asyncData(context) {},
  head() {
    return {
      title: "首页"
    };
  },
  components: {
    headTop,
    indexMain,
    ctnTag
  },
  methods: {}
};
</script>

<style lang="scss">
#index {
  .ctnMain {
    display: flex;
    justify-content: space-between;
  }
}
</style>

