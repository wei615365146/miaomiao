<template>
  <div id="main">
    <Header title="喵喵影院"/>
    <div id="content">
      <div class="cinema_menu">
        <div class="city_switch">
          全城
          <span class="iconfont">&#xe634;</span>
        </div>
        
        <div class="brand_switch">
          品牌
            <span class="iconfont">&#xe634;</span>
        </div>
        <div class="feature_switch">
          特色
           <span class="iconfont">&#xe634;</span>
        </div>
      </div>
      <CiList/>
    </div>
    <Taber/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Taber from "@/components/Taber";
import CiList from "@/components/CiList";
export default {
  name: "Cineam",
  components: {
    Header,
    Taber,
    CiList
  }
};
</script>

<style scoped>

#content {
  flex: 1;
  overflow: auto;
  margin-bottom: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
}
#content .cinema_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #fff;
}
</style>
