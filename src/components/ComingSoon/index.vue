<template>
  <div class="main">
       <Loading  v-show="isLoading"/>
    <Srcoller :handleToSrcoller="handleToScroll" :headleToTouchEnd="handleToTouchEnd">
      <ul>
            <li class="center">{{pullDowMsg}}</li>
        <li v-for="x in comingList" :key="x.id">
          <div class="pic_show"   @tap='xiangqing(x.id)' >
            <img :src="x.img | setWH('128.180')" alt>
          </div>
          <div class="info_list"   @tap='xiangqing(x.id)'>
            <h2>{{x.nm}}  <img v-if="x.version" src="@/assets/3diMAX.png"></h2>
            <p>
              <span class="person">{{x.wish}}</span>人想看
            </p>
            <p>主演：{{x.star}}</p>
            <p>{{x.rt}}</p>
          </div>
          <div class="btn_pre">预售</div>
        </li>
      </ul>
    </Srcoller>
  </div>
</template>

<script>
export default {
  name: "comingSoon",
  data(){
    return{
          comingList:[],
            pullDowMsg: "",
            isLoading :true,
             prevCity: -1
    }
  },
  activated(){
       var cityId = this.$store.state.city.id;
        if (cityId === this.prevCity) {
          return;
        }

      this.axios.get(`/api/movieComingList?cityId=${cityId}`).then((res)=>{
            
       this.comingList =res.data.data.comingList
        this.prevCity = cityId
        this.isLoading = false
      })
  },
  methods:{
          handleToScroll(pos) {
      if (pos.y > 30) {
        this.pullDowMsg = "下拉刷新";
      }
    },
    handleToTouchEnd(pos) {
      var that = this
      if (pos.y > 30) {
        this.axios.get(`/api/movieOnInfoList?cityId=${that.prevCity}`).then(res => {
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
      this.$router.push(`/movie/detal/2/${id}`)
      console.log(id)
    }
  }
};
</script>

<style>

.main ul li {
    overflow: hidden;
    position: relative;
     display: flex;
   
}
.main ul li .pic_show {
  width: 69px;
  height: 89px;
  float: left;
  padding: 10px;
 
}
.main ul li  .info_list{
      float: left;
    padding: 10px;
}   
.main ul li  .btn_pre{
width: 50px;
    height: 25px;
    color: #fff;
    line-height: 25px;
    text-align: center;
    background: #3385ff;
    position: absolute;
    right: 10px;
    top: 50%;
  margin-top: -40px;
}
.info_list h2 {
  position: relative;
   font-size: 17px;
    line-height: 24px;
    width: 150px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
 .info_list h2 img{
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
