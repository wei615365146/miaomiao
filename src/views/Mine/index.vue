<template>
  <div id="main">
    <Header title="我的喵喵"/>
     <Login/>
    <Taber/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Taber from "@/components/Taber";
import Login from "@/components/Login"
export default {
  name: "Mine",
  components: {
    Header,
    Taber,
    Login
  }
};
</script>

<style>
</style>
