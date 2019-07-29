<template>
  <div class="search_body">
     <!-- <Loading v-show="isLaoding" /> -->
    <div class="search_input">
      <div class="search_input_wrapper">
          <span class="iconfont">&#xe600;</span>
        <input type="text" v-model="val">
      </div>
    </div>
    
    <div class="search_result">
      <h3>电影/电视剧/综艺</h3>
        
      <ul>
        <li v-for="x in movieList">
          <div class="img">
            <img :src="x.img | setWH('128.120')" alt="">
          </div>
          <div class="info">
            <p>
              <span>{{x.nm}}</span>
              <span>{{x.sc}}</span>
            </p>
            <p>{{x.enm}}</p>
            <p>{{x.cat}}</p>
            <p>{{x.pubDesc}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { clearTimeout } from 'timers';
export default {
  name: "city",
  data(){
    return{
      val:'',
      movieList:'',
      isLaoding:true
    }
  },
  methods:{
      cancelRequest(){ //终止多次的请求
      
            if(typeof this.source ==='function'){
                this.source('终止请求')
            }
        }
  },
  watch:{
    val(val){

        var that = this
        this.cancelRequest()

        var cityId = this.$store.state.city.id
    
      this.axios.get(`/api/searchList?cityId=${cityId}&kw=${val}`,{
         cancelToken:new this.axios.CancelToken(function (c) {
           
                    that.source = c;
                })
      }).then((res)=>{
        var resa = res.data.msg;
        var movies = res.data.data.movies
        console.log(resa,movies)
        if(resa && movies ){
         this.movieList =  res.data.data.movies.list
         console.log(res.data.data.movies.list)
         this.isLaoding=false
        }
      // that.movieList =  res.data.data
      }).catch((err) => {
                if (this.axios.isCancel(err)) {
                    console.log('Rquest canceled', err.message); //请求如果被取消，这里是返回取消的message
                } else {
                    //handle error
                    console.log(err);
                }
      // console.log()
    });
  }
}
}
</script>

<style >
#content .search_body {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow: auto;
  position: relative;
}
.search_body .search_input {
  padding: 8px 10px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
      position: fixed;
    width: 100%;
}
.search_body .search_input_wrapper {
  padding: 0 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  background-color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  line-height: 20px;
}
.search_body .search_input_wrapper i {
  font-size: 16px;
  padding: 4px 0;
}
.search_body .search_input_wrapper input {
  border: none;
  font-size: 13px;
  color: #333;
  padding: 4px 0;
  outline: none;
  margin-left: 5px;
  width: 100%;
}
.search_body .search_result h3 {
  font-size: 15px;
  color: #999;
  padding: 9px 15px;
  border-bottom: 1px solid #e6e6e6;
}
.search_body .search_result li {
  border-bottom: 1px dashed #c9c9c9;
  padding: 10px 15px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.search_body .search_result .img {
  width: 60px;
  float: left;
}
.search_body .search_result .img img {
  width: 100%;
}
.search_body .search_result .info {
  float: left;
  margin-left: 15px;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.search_body .search_result .info p {
  height: 22px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  line-height: 22px;
  font-size: 12px;
}
.search_body .search_result .info p:first-of-type span:first-of-type {
  font-size: 18px;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.search_body .search_result .info p:first-of-type span:nth-of-type(2) {
  font-size: 16px;
  color: #fc7103;
}
</style>
