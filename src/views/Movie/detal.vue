<template>
  <div id="detal" class="transition">
    <Loading v-show="isLoading"/>
    <Header title="影片详情">
      <span class="iconfont icon-huise" @touchstart="handleToback"></span>
    </Header>
    <div class="boxs" :style="{'background':`url(${date.albumImg})`}"></div>
    <div class="box">
      <div class="img">
        <img :src="date.albumImg " alt>
      </div>
      <div class="txt">
        <p>{{date.nm}}</p>
        <p>{{date.cat}}</p>
        <p>{{date.dir}}</p>
        <p>{{date.enm}}</p>
        <p>{{date.fra}}</p>
      </div>
    </div>

    <div class="ul">
        <div class="swiper-container detail_player" ref="detail_player">
        <ul class="swiper-wrapper">
            <li class="swiper-slide" v-for="(item,index) in date.photos" :key="index">
              <div>
                  <img :src="item | setWH('140.170')" alt="">
              </div>
            </li>
        </ul>
    </div>
     

      <p>{{date.dra}}</p>
      <video :src="date.vd" controls></video>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "detal",
  props: ["id"],
  components: {
    Header
  },
  data() {
    return {
      date: "",
      isLoading:true
    };
  },
  // beforeMount
  mounted() {
    console.log(this.id);
    var that = this
    this.axios.get(`/api/detailmovie?movieId=${this.id}`).then(res => {
      console.log(res.data);
      if (res.data.msg == "ok") {
         this.isLoading = false;
        var date = res.data.data.detailMovie;
        this.$nextTick(() => {
            new Swiper(this.$refs.detail_player,{
              slidesPerView:'auto',
              freeMode:true,
              freeModeSticky:true
            })
        });
        this.date = date;
        console.log(date);
      }
    });
  },
  methods: {
    handleToback() {
      window.history.go(-1);
    }
  }
};
</script>

<style scoped>
.detail_player .swiper-slide{
    width: 70px;
    margin-right: 20px;
    text-align: center;
    font-size: 14px;
}
#detal {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0px;
  z-index: 1000;
  min-height: 100%;
  background: #fff;
}
.transition {
  animation: 1s slideMove;
}
@keyframes slideMove {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
header span {
  font-size: 25px;
  float: left;
  margin-top: 10px;
}
.box {
  display: flex;
}
.box .img {
  padding: 10px;
  width: 100px;
  height: 140px;
}
.box .txt {
  margin-top: 30px;
}
.box .txt p {
  font-size: 13px;
  color: darkgoldenrod;
}
.boxs {
  height: 160px;
  width: 100%;
  position: absolute;
  top: 50px;
  left: 0;
  z-index: -1;
  filter: blur(15px);
}
.ul {
  margin: 0 10px;
}
ul {
  /* display: flex; */
}
ul p {
  margin: 20px 0;
}
ul li {
    /* width: 100%;; */
}
video {
  width: 100%;
  height: 150px;
}
</style>
