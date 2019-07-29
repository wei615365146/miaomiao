<template>
    <div class="wrapper" ref="wrapper">
            <slot></slot>
    </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
        name:'Srcoller',
        props:{
            handleToSrcoller:{
                type:Function,
                default:function(){}
            },
            headleToTouchEnd : {
                type : Function,
                default : function(){}
            }
        },
        mounted(){
            var srcoll = new BScroll(this.$refs.wrapper, {
                tap: true,
                probeType: 1
             });
             srcoll.on('scroll',(pos)=>{
                 this.handleToSrcoller(pos);
             })
             srcoll.on('touchEnd',(pos)=>{
                 this.headleToTouchEnd(pos)
             })
        }
}
</script>
<style scoped>
  .wrapper{
      height: 100%;
  }
</style>
