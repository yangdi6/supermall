<template>
   <div class="tab_bar_item" @click="itemClick">
    <slot v-if='isActive' name="tabBar-active-icon"></slot>
    <slot v-else name="tabBar-icon"></slot>
    <div :style="isactiveCole"><slot name="tabBar-name"></slot></div>
   </div>
</template>

<script>
  export default{
    name:'tabbarItem',
    data(){
      return{
        //isActive:true,
      }
    },
    methods:{
       itemClick(){
         //alert('111')

         this.$router.push(this.path)
       }
    },
    props:{
        path:{
          type:String,
        },
        activeCole:{
          type:String,
          default:'red'
        }
    },
   computed:{
      isActive(){
        console.log(this.$route.path+"当前活跃组件")
        console.log(this.path+"当前组件传入路径")
        //console.log(this.$route.path.indexOf(this.path)!==-1)
         return this.$route.path===this.path
      },
      isactiveCole(){
        return this.isActive?{color:this.activeCole}:{}
      }
    }
   /* activated(){
      console.log("+++++")
    },
    deactivated() {
      console.log("____")
    } */

    }
</script>

<style>
  .tab_bar_item{
    flex: 1;
    text-align: center;
    height: 49px;
    line-height: 49px;
    font-size: 14px;
  }
  .tab_bar_item img{
     width: 24px;
     height: 24px;
  }
  .tabbarName{
    margin-top: -38px;
  }
</style>
