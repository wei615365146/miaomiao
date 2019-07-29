<template>
  <div class="cinema_body">
    <Srcoller>
      <ul>
        <li v-for="x in cityList" :key="x.id">
          <div>
            <span>{{x.nm}}</span>
            <span class="q">
              <span class="price">22.9</span>元起
            </span>
          </div>
          <div class="address">
            <span>{{x.addr}}</span>
            <span>{{x.distance}}</span>
          </div>
          <div class="card">
            <!-- <div>小吃</div> -->
            <!-- <div>{{}}</div> -->
            <div v-for="(xCard,key) in x.tag" :class="key | addClass" v-if="xCard === 1" :key="key">{{key | formatCard}}</div>
          </div>
        </li>
      </ul>
    </Srcoller>
  </div>
</template>

<script>
export default {
  name: "CiList",
  data() {
    return {
      cityList: ""
    };
  },
  activated() {
     var cityId = this.$store.state.city.id
    this.axios.get(`/api/cinemaList?cityId=${cityId}`).then(res => {
      var msg = res.data.msg;
      if ((msg = "ok")) {
        // console.log(res.data.data.cinemas);
        this.cityList = res.data.data.cinemas;
      }
    });
  },
  filters: {
    formatCard(key) {
    //   console.log(key);
      var card = [
        { key: "allowRefund", value: "改签" },
        { key: "endorse", value: "退票" },
        { key: "sell", value: "折扣看" },
        { key: "snack", value: "小吃" }
      ];
      for (var i = 0; i < card.length; i++) {
        if (card[i].key === key) {
          return card[i].value;
        }
      }
      return "";
    },
    addClass(key){
        var card = [
        { key: "allowRefund", value: "or" },
        { key: "endorse", value: "or" },
        { key: "sell", value: "bl" },
        { key: "snack", value: "bl" }
      ];
      for (var i = 0; i < card.length; i++) {
        if (card[i].key === key) {
          return card[i].value;
        }
      }
      return "";
    }
  }
};
</script>

<style scoped>
#content .cinema_body {
  flex: 1;
  overflow: auto;
  height: 600px;
}
.cinema_body div {
  margin-bottom: 10px;
}

.cinema_body ul {
  padding: 20px;
}
.cinema_body li {
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 20px;
}
.cinema_body .q {
  font-size: 11px;
  color: #f03d37;
}
.cinema_body .price {
  font-size: 18px;
}
.cinema_body .address {
  font-size: 13px;
  color: #666;
}
.cinema_body .address {
  font-size: 13px;
  color: #666;
}
.cinema_body .card {
  display: flex;
}
.cinema_body .card div.or {
  color: #f90;
  border: 1px solid #f90;
}
.cinema_body .card div {
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  color: #f90;
  border: 1px solid #f90;
  font-size: 13px;
  margin-right: 5px;
}
.or{
    color: #f90 !important; 
    border: 1px solid #f90  !important;
}
.bl{
    color: #1C86EE !important;
    border: 1px solid #1C86EE  !important;
    
}
</style>
