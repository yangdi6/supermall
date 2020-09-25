<template>
  <div id="mintabbar">
    <router-view></router-view>
    <tabbar>
      <tabbarItem path='/home' activeCole='blue'>
        <img slot="tabBar-icon" src="~assets/img/tabbarImg/home.svg" />
        <img slot="tabBar-active-icon" src="~assets/img/tabbarImg/homeActive.svg" />
        <div slot='tabBar-name'  class="tabbarName">首页</div> -->
      </tabbarItem>
      <tabbarItem path='/classify'>
        <img slot="tabBar-icon" src="~assets/img/tabbarImg/classify.svg" />
        <img slot="tabBar-active-icon" src="~assets/img/tabbarImg/classifyActive.svg" />
        <div slot='tabBar-name'  class="tabbarName">分类</div> -->
      </tabbarItem>
      <tabbarItem path='/shop'>
        <img slot="tabBar-icon" src="~assets/img/tabbarImg/shop.svg" />
        <img slot="tabBar-active-icon" src="~assets/img/tabbarImg/shopActive.svg" />
        <div slot='tabBar-name'  class="tabbarName">购物车</div> -->
      </tabbarItem>
      <tabbarItem path='/me'>
        <img slot="tabBar-icon" src="~assets/img/tabbarImg/me.svg" />
        <img slot="tabBar-active-icon" src="~assets/img/tabbarImg/meActive.svg" />
        <div slot='tabBar-name'  class="tabbarName">我的</div> -->
      </tabbarItem>
    </tabbar>
  </div>

</template>

<script>
  import tabbar from '../common/tabbar/tabbar.vue'
  import tabbarItem from '../common/tabbar/tabbarItem.vue'
  export default{
    name:'mintabbar',
    components:{
       tabbar,
       tabbarItem
    }
  }
</script>

<style>
</style>
