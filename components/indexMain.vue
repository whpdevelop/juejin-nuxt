<template>
 <div id='indexMain'>
   <div class="navTitle">
     <h3>热门文章</h3>
     <ul>
       <li><nuxt-link to="/welcome/frontend"> 前端 </nuxt-link></li>
       <li><nuxt-link to="/welcome/android"> Android </nuxt-link></li>
       <li><nuxt-link to="/welcome/backend"> 后端 </nuxt-link></li>
       <li><nuxt-link to="/welcome/ai"> 人工智能 </nuxt-link></li>
       <li><nuxt-link to="/welcome/ios"> ios </nuxt-link></li>
       <li><nuxt-link to="/welcome/freebie"> 工具资源 </nuxt-link></li>
       <li><nuxt-link to="/welcome/article"> 阅读 </nuxt-link></li>
       <li><nuxt-link to="/welcome/devops"> 运维 </nuxt-link></li>
     </ul>
   </div>
  <nuxt-child :datas="datas" />
 </div>
</template>

<script>
export default {
  props: ["datas"],
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
  width: 80%;
  background-color: #fff;
  padding-top: 30px;
  .navTitle {
    width: 800px;
    padding-left: 20px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 60px;
    background-color: #fff;
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
