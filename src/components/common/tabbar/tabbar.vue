<template>
  <div id="tab_bar">
   <!-- <div class='tab_bar_item'>
      <img src="../../assets/img/tabbarImg/home.svg" />
      首页</div>
    <div class='tab_bar_item'>
      <img src="../../assets/img/tabbarImg/classify.svg" />
      分类</div>
    <div class='tab_bar_item'>
      <img src="../../assets/img/tabbarImg/shop.svg" />
      购物车</div>
    <div class='tab_bar_item'>
      <img src="../../assets/img/tabbarImg/me.svg" />
      我的</div> -->
      <slot></slot>
  </div>
</template>

<script>
  export default{
      name:'tabbar'
  }
</script>

<style>
  #tab_bar{
    display: flex;
    background-color: #f6f6f6;
    position:fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px 10px 10px #c3c3c7;
    overflow: hidden;
  }

</style>
