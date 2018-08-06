<template>
 <div id='indexModule'>
   <ul>
     <li v-for="(item,index) in datas.entrylist" :key="index">
      <div class="left">
         <p>
         <span style="color:red" v-if="item.user.followersCount>100">热</span>
         <span class="poit" v-if="item.user.followersCount>100"></span>
         <span style="color:#b71ed7">专栏</span>
         <span class="poit"></span>
         <span>{{item.user.username}}</span>
         <span class="poit"></span>
         <span>3小时前</span>
         <!-- <span class="poit"></span> -->
         <span v-if="item.tags.title">{{item.tags[0].title}}</span>
       </p>
       <h3>{{item.title}}</h3>
       <p>
         <span class="el-icon el-icon-star-on">{{item.user.followersCount}}</span>
         <span class="el-icon el-icon-star-off">{{item.user.followeesCount}}</span>
       </p>
      </div>
      <div class="right">
        <img :src="item.user.avatarLarge" alt="">
      </div>
     </li>
   </ul>
 </div>
</template>

<script>
export default {
  props: ["datas"],
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  components: {}
};
</script>

<style lang="scss">
#indexModule {
  ul {
    margin-top: 20px;
    li {
      border-top: 1px solid #ccc;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      p {
        padding-right: 20px;
        .el-icon {
          margin-top: 10px;
          display: inline-block;
          border: 1px solid #ccc;
          padding: 5px 10px;
        }
      }
      .right {
        width: 80px;
        height: 80px;
        padding: 5px;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
