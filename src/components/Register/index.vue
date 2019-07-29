<template>
     <div>
               <div class="login_body">
               <div>
                   <input type="text" placeholder="账户名/手机号/Email" class="login_text" v-model="name">
               </div>
                <div>
                   <input type="text" placeholder="请输入您的密码" class="login_text" v-model="pwd">
               </div>
               <div class="login_btn">
                   <input type="submit" value="注册"  @touchstart="register" >
                    <!-- -->
               </div>
            
            </div>
                
  </div>
</template>

<script>
export default {
    name:'Register',
    data(){
      return{
        name:'',
        pwd:''
      }
    },
    methods :{

      register(){
           var    that = this;
            var name =  that.name
            var pwd = that.pwd
            this.axios.post('http://localhost:3000/register',{name,pwd}).then((res)=>{
              alert(res.data.msg)
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

</style>
