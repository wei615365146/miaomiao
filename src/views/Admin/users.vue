<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="time" label="注册日期"></el-table-column>
      <el-table-column prop="username" label="用户姓名"></el-table-column>
      <el-table-column prop="email" label="用户邮箱"></el-table-column>
       <!-- <el-table-column prop="id" label="用户id"></el-table-column> -->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.$index,scope.row,$event)">{{scope.row.flag == 0 ? '已冻结' : '未冻结' }}</el-button>
          <el-button @click="del(scope.$index,scope.row)"  type="danger"> 移除 </el-button>
          <el-button  type="danger"> 修改 </el-button>
          <!-- <input type="text" prop="id"> -->
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <span class="demonstration">大于 7 页时的效果</span>
      <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
  </div>
</template>

<script>
import { constants } from 'crypto';
export default {
  name: "users",
    inject: ['reload'],
  data() {
    return {
      tableData: [],
      num:[]
    };
  },
  mounted() {
    this.index()
  
  },
  methods: {
    index(){
       this.axios.post("http://localhost:3000/users").then((res) => {
      this.tableData = res.data.data;
      // this.num = res.data.data
       var num =res.data.data
        var nums  = []
          for(let i=0;i<num.length;i++){
            nums.push( num[i].id )
            // console.log(num[i].id)
          }
          this.num = nums
    });
    },
    handleEdit(index, row,event) { //更改是否锁定状态
    var _this = this
    console.log(index,row.flag)
    this.axios.post('http://localhost:3000/users2',{id:row.id,update:!row.flag}).then((res)=>{   })
    _this.index()
    
    },
    del(index,row){//移除用户
     var _this = t
      this.axios.post('http://localhost:3000/del',{id:row.id}).then((res)=>{ })
        this.index()
    },
    update(){
        this.axios.post()
    }
  }
};
</script>

<style>

</style>
