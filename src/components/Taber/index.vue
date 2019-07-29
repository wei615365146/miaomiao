<template>
  <footer id="footer">
    <ul>
      <router-link  tag="li" to="/movie/nowPlaying">
       <span class="iconfont icon-yingyuan"></span>
        <p>电影</p>
      </router-link>
     <router-link  tag="li"  to="/cinema">
       <span class="iconfont">&#xe601;</span>
        <p>影院</p>
      </router-link>
     <router-link  tag="li" to="/mine">
         <span class="iconfont">&#xe602;</span>
        <p>我的</p>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "Taber"
};
</script>

<style scoped>

#footer {
  width: 100%;
  height: 50px;
  background: white;
  border-top: 2px solid #ebe8e3;
  position: fixed;
  left: 0;
  bottom: 0;
}
#footer ul {
  display: flex;
  text-align: center;
  height: 50px;
  align-items: center;
}
#footer ul li {
  flex: 1;
  height: 40px;
}
#footer ul li.active {
  color: red;
}
#footer ul li.rounter-link-active{color: red;}
#footer ul li i {
  font-size: 20px;
}
#footer ul li p {
  font-size: 12px;
  line-height: 18px;
}
</style>
