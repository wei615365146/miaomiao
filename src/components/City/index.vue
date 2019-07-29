<template>
  <div class="city_body">
    <Loading v-show="isLoading"/>

    <div class="city_list">
      <Srcoller>
        <div>
          <div class="city_hot">
            <h2>热门城市</h2>
            <ul>
              <li v-for="(x,index) in hotList" @touchstart="Get(x.id,x.nm)" :key="index">{{x.nm}}</li>
            </ul>
          </div>
          <div class="city_sort" ref="city_sort">
            <div v-for="x in cityList">
              <h2>{{x.index}}</h2>
              <ul>
                <li v-for="a in x.list" @tap="Get(a.id,a.nm)">{{a.nm}}</li>
              </ul>
            </div>
          </div>
        </div>
      </Srcoller>
    </div>

    <div class="city_index">
      <ul>
        <li v-for="(x,index) in cityList" @click="Jump(index)">{{x.index}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "City",
  data() {
    return {
      cityList: "", //所有的城市
      hotList: "", //热门城市
      isLoading: true
    };
  },
  mounted() {
    var cityList = window.localStorage.getItem("cityList");
    var hotList = window.localStorage.getItem("hotList");

    if (cityList && hotList) {
      this.cityList = JSON.parse(cityList);
      this.hotList = JSON.parse(hotList);
      this.isLoading = false;
    } else {
      this.axios.get("/api/cityList").then(res => {
        // console.log(res.data.data.cities);
        var cityList = res.data.data.cities;
        this.isLoading = false;
        this.getCities(cityList);
        var hotList = this.hotList;
      });
    }
  },
  methods: {
    //把数据进行格式化变成自己想要的那种格式
    getCities(data) {
      // console.log(data)
      var cityList = []; //城市列表
      var hotList = [];

      for (var i = 0; i < data.length; i++) {
        if (data[i].isHot == 1) {
          hotList.push(data[i]);
        }
      }
      for (var i = 0; i < data.length; i++) {
        var firstLetter = data[i].py.substring(0, 1).toUpperCase();

        if (toCom(firstLetter)) {
          //新添加ind
          cityList.push({
            index: firstLetter,
            list: [{ nm: data[i].nm, id: data[i].id }]
          });
        } else {
          //累加到已有的ind
          for (var j = 0; j < cityList.length; j++) {
            if (cityList[j].index === firstLetter) {
              cityList[j].list.push({ nm: data[i].nm, id: data[i].id });
            }
          }
        }
      }
      cityList.sort((n1, n2) => {
        if (n1.index > n2.index) {
          return 1;
        } else if (n1.index < n2.index) {
          return -1;
        } else {
          return 0;
        }
      });
      function toCom(firstLetter) {
        //进行第一个字母的判断
        for (var i = 0; i < cityList.length; i++) {
          if (cityList[i].index == firstLetter) {
            return false;
          }
        }
        return true;
      }
      this.cityList = cityList;
      this.hotList = hotList;
      window.localStorage.setItem("cityList", JSON.stringify(cityList));
      window.localStorage.setItem("hotList", JSON.stringify(hotList));
    },
    Jump(index) {
      var h2 = this.$refs.city_sort.getElementsByTagName("h2");
      // console.log(h2)
      this.$refs.city_sort.parentNode.parentNode.parentNode.scrollTop = h2[index].offsetTop;
    },
    Get(id, nm) {
      this.$store.commit("city/CITY_INFO", { id, nm }); //改变当前城市
      window.localStorage.setItem("nowNm", nm); //存储城市 以便下一次使用
      window.localStorage.setItem("nowId", id);
      this.$router.push({ path: "/movie/NowPlaying" }); //跳转到热门城市
    }
  }
};
</script>

<style scoped>
.city_body .city_index {
  width: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  border-left: 1px solid #e6e6e6;
}
.city_body .city_list {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow: auto;
  background: #fff5f0;
}
.city_hot ul {
  overflow: hidden;
  padding-bottom: 10px;
}
.city_hot ul li {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 3%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.city_list h2 {
  background: #ccc;
  font-size: 15px;
  font-weight: 100;
  padding: 10px;
}
.city_sort ul {
  padding-left: 10px;
  margin-top: 10px;
}
.city_sort li {
  line-height: 30px;
}
.left {
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  text-align: center;
  width: 20px;
  position: fixed;
  right: 0;
  top: 0px;
}
</style>
