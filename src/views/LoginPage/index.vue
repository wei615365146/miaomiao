<template>
    <div>
        <h1>登陆成功</h1>
    
        <p v-if="name == 'asd'">欢迎管理员：{{name}}   <a style="color:red" href="http://localhost:8080/admin/users" target="_blank">后台管理系统</a></p> 
            <p v-else> 用户名：{{name}}</p>
       <!-- {{this.$route.params.userId}}
       <b>{{aaa}}</b> -->
    </div>
</template>

<script>
export default {
    name:'loginPage',
      data(){
        return{
            name:'',
            // admin:'',
            // aaa:''
        }
    },
    mounted(){
    //  alert(1)
        this.name =  localStorage.getItem('name')
        
    },
  
   
}
</script>

<style>

</style>
