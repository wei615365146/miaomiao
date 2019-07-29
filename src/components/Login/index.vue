<template>
            <div class="login_body">
               <div>
                   <input type="text" placeholder="账户名/手机号/Email" class="login_text" v-model="name">
               </div>
                <div>
                   <input type="text" placeholder="请输入您的密码" class="login_text" v-model="pwd">
               </div>
               <div class="login_btn" @touchstart="aaa">
                   <input type="submit" value="登陆">
               </div>
               <div class="login_link">
                        <router-link  to="/register" tag="a" href="javascript:void(0)">立即注册</router-link>
                        <router-link  to="/" tag="a"   href="javascript:void(0)">找回密码</router-link>
               </div>
            </div>
</template>

<script>
export default {
  name:'Login',
  data(){
      return{
          name:'',
          pwd:'',
          admin:''
      }
  },
  methods:{
    
        aaa(){
                    var that = this
                    var  name = that.name;
                    var   pwd = that.pwd
          this.axios.post('http://localhost:3000/login',{name,pwd}).then((res)=>{
                if(res.data.msg =='登陆成功'){
                     that.admin = res.data.data.admin
                       localStorage.setItem('name',that.name)
                    // this.$router.push({path:'/LoginPage'})    
                    window.location=('http://localhost:8080/LoginPage')
                }else{
                    alert(res.data.msg)
                }
          })
        }
  }
}
</script>

<style scoped>
#content .login_body {
    width: 100%;
}
.login_body .login_text{
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px solid #ccc;
    margin-bottom: 5px;
    outline: none;
    text-indent: 10px;
}
.login_body .login_btn{
    height: 50px;
    margin: 10px;
}
.login_body .login_btn input{
    width: 100%;
    height: 100%;
    background: #e54847;
    border-radius: 3px;
    border: none;
    display: block;
    color: #fff;
    font-size: 20px;
}
.login_body .login_link{
    display: flex;
    justify-content: space-between;
}
.login_body .login_link a{
    text-decoration: none;
    margin: 0 5px;
    font-size: 12px;
    color: #e54847;
}
</style>
