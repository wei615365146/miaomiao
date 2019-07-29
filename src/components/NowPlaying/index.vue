<template>
  <div class="main" ref="main">
    <Loading v-show="isLoading"/>

    <Srcoller :handleToSrcoller="handleToScroll" :headleToTouchEnd="handleToTouchEnd">
      <ul>
        <li class="center">{{pullDowMsg}}</li>
        <li  v-for="x in movieList" :key="x.id">
          <div class="pic_show"   @tap='xiangqing(x.id)'>
            <img :src="x.img | setWH('128.180')" alt=''>
          </div>
          <div class="box">
            <h2  @tap='xiangqing(x.id)'>
              {{x.nm}}
              <img v-if="x.version" src="@/assets/3diMAX.png">
            </h2>
            <p>
              观众评论
              <span>{{x.sc}}</span>
            </p>
            <p>主演 ：{{x.star}}</p>
            <p>{{x.showInfo}}</p>
          </div>
        </li>
      </ul>
    </Srcoller>
  </div>
</template>

<script>
// import axios from 'axios'
// import BScroll from "better-scroll";

import { all, allSettled } from "q";
export default {
  name: "NowPlaying",
  data() {
    return {
      movieList: [],
      pullDowMsg: "",
      isLoading: true,
      prevCity: -1
    };
  },
  activated() {
    var cityId = this.$store.state.city.id;

    if (cityId === this.prevCity) {
      return;
    }
    this.axios.get(`/api/movieOnInfoList?cityId=${cityId}`).then(res => {
      var msg = res.data.msg;
      if (msg == "ok") {
        this.movieList = res.data.data.movieList;
        this.isLoading = false;
        this.prevCity = cityId
      }
    });
  },
  methods: {
    handleToScroll(pos) {
      if (pos.y > 30) {
        this.pullDowMsg = "下拉刷新";
      }
    },
    handleToTouchEnd(pos) {
      var that = this;
      if (pos.y > 30) {
        this.axios
          .get(`/api/movieOnInfoList?cityId=${that.prevCity}`)
          .then(res => {
            var msg = res.data.msg;
            this.pullDowMsg = "刷新成功";
            setTimeout(() => {
              if (msg == "ok") {
                this.movieList = res.data.data.movieList;
                this.pullDowMsg = "";
              }
            }, 500);
          });
      }
    },
    xiangqing(id){
      this.$router.push(`/movie/detal/1/${id}`)
      console.log(id)
    }
  }
};
</script>

<style scoped>
.main ul {
  margin: 0 12px;
  overflow: hidden;
}
.main ul li {
  position: relative;
  overflow: hidden;
  display: flex;
}
.main ul li .pic_show {
  width: 69px;
  height: 89px;
  float: left;
  padding: 10px;
}
.main ul li .box {
  float: left;
  padding: 10px;
}

.box h2 {
  position: relative;
  font-size: 17px;
  line-height: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.box h2 img {
  font-size: 17px;
  line-height: 24px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 50px;
  position: absolute;
  right: 10px;
  top: 5px;
}
</style>
