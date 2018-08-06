<template>
 <div id='headTop'>
     <div class="main w">
         <h1>
             <img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="">
         </h1>
         <ul>
             <li><nuxt-link to="/welcome">首页</nuxt-link></li>
             <li><nuxt-link to="/pins">沸点</nuxt-link></li>
             <li><nuxt-link to="/books">小册</nuxt-link></li>
             <li><nuxt-link to="/repos">开源库</nuxt-link></li>
             <li><nuxt-link to="/events/all">活动</nuxt-link></li>
         </ul>
         <el-input
            placeholder="搜索掘金"
            v-model="input23">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
         </el-input>
     </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
      input23: ""
    };
  },
  components: {}
};
</script>

<style lang="scss">
#headTop {
  height: 60px;
  padding-top: 11px;
  background-color: #fff;
  .main {
    display: flex;
    justify-content: space-between;
    h1 {
      img {
        display: block;
      }
    }
    ul {
      display: flex;
      width: 50%;
      justify-content: space-between;
      padding-top: 10px;
      li {
        text-align: center;
        flex: 1;
      }
    }
    .el-input {
      width: 200px;
      .el-input__inner {
        width: 180px;
      }
      .el-input__prefix {
        position: absolute;
        right: -100px;
        font-size: 24px;
      }
    }
  }
}
</style>
