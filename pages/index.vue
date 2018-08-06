<template>
  <div id="index">
    <nuxt-child />
  </div>
</template>

<script>
import headTop from "~/components/headTop";
import indexMain from "~/components/indexMain";
import ctnTag from "~/components/ctnTag";
export default {
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

