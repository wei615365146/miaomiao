<template>
  <div id="main">
    <Header title="喵喵电影"/>

    <div id="content">
      <div class="movie_menu">
        <router-link tag="div" to="/movie/city" class="city_name">
          <span>{{$store.state.city.nm}}</span>
          <span class="iconfont">&#xe634;</span>
        </router-link>
        <div class="hot_swtich">
          <router-link tag="div" to="/movie/nowPlaying" class="hot_item">正在热映</router-link>
          <router-link tag="div" to="/movie/comingSoon" class="hot_item">即将上映</router-link>
        </div>
        <router-link tag="div" to="/movie/search" class="search_entry">
          <span class="iconfont">&#xe600;</span>
        </router-link>
      </div>

      <keep-alive>
        <router-view />
      </keep-alive>
    </div>

       <router-view name="detal"/>

    <Taber/>

    <!-- <MeassageBox/> -->
  </div>
</template>

<script>
import Header from "@/components/Header";
import Taber from "@/components/Taber";
import { messageBox } from "@/components/JS";
import { setTimeout } from "timers";

export default {
  name: "Movie",
  components: {
    Header,
    Taber
    // MeassageBox
  },
  mounted() {
    setTimeout(() => {
      this.axios.get("/api/getLocation").then(res => {
        if (res.data.msg === "ok") {
          var data = res.data.data;
          // console.log(data);

          var nm = data.nm;
          var id = data.id;
          if(this.$store.state.city.id != id){
                messageBox({
            title: "定位",
            content: nm,
            cancel: "取消",
            ok: "切换定位",
            handleCancel() {
              // console.log(1);
            },
            handleOk() {
              // console.log(2);
              window.localStorage.setItem('nowNm',nm)
              window.localStorage.setItem('nowId',id)
              window.location.reload()
            }
          });
          }
        
        }
      });
    }, 1000);
  }
};
</script>

<style scoped>
#content .movie_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #fff;
  z-index: 10;
}
.movie_menu .city_name {
  margin-left: 20px;
  height: 100%;
  line-height: 45px;
  border-bottom: 3px solid transparent;
}

.movie_menu .hot_swtich {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  line-height: 45px;
}
.movie_menu .hot_item {
  font-size: 15px;
  color: #666;
  width: 80px;
  text-align: center;
  margin: 0 12px;
  font-weight: 700;
}
.movie_menu .search_entry {
  margin-right: 20px;
  height: 100%;
  line-height: 45px;
}
.main {
  height: 520px;
}
.movie_menu .router-link-exact-active {
  border-bottom: 3px solid salmon;
  color: salmon;
}
.hot_swtich .router-link-exact-active {
  color: salmon;
}
</style>
