<template>
 <div id='home' ref="home">
   <!-- 首页中心内容 -->
    <div class="ctnMain w">
      <!-- 左侧布局 -->
     <index-main :datas="datas" />
    
    </div>
 </div>
</template>

<script>
import { getIndexMoudelData } from "../../service";

import indexMain from "~/components/indexMain";
export default {
  data() {
    return {
      datas: {},
      title: "",
      flag: true
    };
  },
  created() {
    getIndexMoudelData("frontend", 20).then(res => {
      this.datas = res.data.d;
    });
  },
  watch: {
    $route(to, from) {
      getIndexMoudelData(to.params.index, 20).then(res => {
        this.datas = res.data.d;
      });
    }
  },
  mounted() {
    window.onscroll = () => {
      let scrollH = document.documentElement.scrollTop;
      let homeH = this.$refs["home"].offsetHeight;
      let clientH = document.documentElement.clientHeight;
      let distence = homeH - scrollH - clientH;
      if (distence < 200) {
        if (this.flag) {
          this.flag = false;
          getIndexMoudelData(this.$route.params.index, 20).then(res => {
            this.flag = true;
            this.datas.entrylist.push(...res.data.d.entrylist);
          });
        }
      }
    };
  },
  asyncData(context) {},
  components: {
    indexMain
  }
};
</script>

<style>
</style>
