<template>
  <div class="messageBox">
    <h2>{{title}}</h2>
    <p>{{content}}</p>
    <div>
      <div @touchstart="handleCancel">{{cancel}}</div>
      <div @touchstart="handleOk">{{ok}}</div>
    </div>
  </div>
</template>

<script>
export default {
    name : 'MessageBox'
};
</script>

<style scoped>

.messageBox {
  width: 200px;
  height: 120px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  -webkit-box-shadow: 3px 3px 3px 3px #ccc;
  box-shadow: 3px 3px 3px 3px #ccc;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -60px 0 0 -100px;
}
.messageBox h2 {
  font-size: 18px;
}
.messageBox h2,
.messageBox p {
  text-align: center;
  line-height: 40px;
}
.messageBox > div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #ccc;
}
.messageBox > div div {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;
  line-height: 30px;
  border-right: 1px solid #ccc;
}
.messageBox > div div:last-child {
  border: none;
}
#content .movie_menu[data-v-717db445] {
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
.movie_menu .city_name[data-v-717db445] {
  margin-left: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .city_name.active[data-v-717db445],
.movie_menu .city_name.router-link-active[data-v-717db445] {
  color: #ef4238;
  border-bottom: 2px solid #ef4238;
}
.movie_menu .hot_swtich[data-v-717db445] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  line-height: 45px;
}
.movie_menu .hot_item[data-v-717db445] {
  font-size: 15px;
  color: #666;
  width: 80px;
  text-align: center;
  margin: 0 12px;
  font-weight: 700;
}
.movie_menu .hot_item.active[data-v-717db445],
.movie_menu .hot_item.router-link-active[data-v-717db445] {
  color: #ef4238;
  border-bottom: 2px solid #ef4238;
}
.movie_menu .search_entry[data-v-717db445] {
  margin-right: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .search_entry.active[data-v-717db445],
.movie_menu .search_entry.router-link-active[data-v-717db445] {
  color: #ef4238;
  border-bottom: 2px solid #ef4238;
}
.movie_menu .search_entry i[data-v-717db445] {
  font-size: 24px;
  color: red;
}
.slide-enter-active[data-v-717db445] {
  -webkit-animation: detailMove-data-v-717db445 13s;
  animation: detailMove-data-v-717db445 13s;
}
@-webkit-keyframes detailMove-data-v-717db445 {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  to {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes detailMove-data-v-717db445 {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  to {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
</style>
