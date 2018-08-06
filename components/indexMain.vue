<template>
 <div id='indexMain'>
   <div class="navTitle">
     <h3>热门文章</h3>
     <ul>
       <li><nuxt-link to="welcome/frontend"> 前端 </nuxt-link></li>
       <li><nuxt-link to="android"> Android </nuxt-link></li>
       <li><nuxt-link to="backend"> 后端 </nuxt-link></li>
       <li><nuxt-link to="ai"> 人工智能 </nuxt-link></li>
       <li><nuxt-link to="ios"> ios </nuxt-link></li>
       <li><nuxt-link to="freebie"> 工具资源 </nuxt-link></li>
       <li><nuxt-link to="article"> 阅读 </nuxt-link></li>
       <li><nuxt-link to="devops"> 运维 </nuxt-link></li>
     </ul>
   </div>
  <nuxt />
 </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style lang="scss">
#indexMain {
  margin-top: 20px;
  width: 70%;
  background-color: #fff;
  .navTitle {
    padding-left: 20px;

    display: flex;
    justify-content: space-between;
    h3 {
      padding-top: 8px;
    }
    ul {
      display: flex;
      justify-content: space-between;
      li {
        padding: 10px 10px;
      }
    }
  }
}
</style>
