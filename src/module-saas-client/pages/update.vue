<template>
     <div class="dashboard-container">
<el-form :model="linevalue"   label-width="100px" class="demo-ruleForm">
  <el-form-item label="公司名称"  prop="name">
     <el-input v-model="linevalue.name" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="所在地区" prop="companyArea">
    <el-input v-model="linevalue.companyArea" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="公司电话" prop="companyPhone">
    <el-input v-model="linevalue.companyPhone" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="开始时间" prop="createTime">
    <el-input v-model="linevalue.createTime" autocomplete="off"></el-input>
  </el-form-item>
</el-form>
  <template>
    <div align="center ">
      <el-button @click="updateline(linevalue)" type="primary" text-align: center  size="medium">修改</el-button>
    </div>
  </template>
  </div>
</template>
<script>
import {company} from '@/api/base/saasClient'
import {xiugai} from '@/api/base/saasClient'


export default {

  
  name: 'saas-clients-detailed',
  components:{},
  data(){
    return{
      value:true,
      linevalue: {} 
    }
  
  },
  methods:{
    getresult(id){
      company({id:id}).then(res=>{
        this.linevalue=res.data.data;
      }
      )
    },
    updateline(linevalue){

     
       xiugai(linevalue).then(res =>{
         this.$router.push({path:'/saas-clients/client'});
       
        })
   
    }

    
  },
  computed:{

  },
  created(){
    var id=this.$route.params.id;
    this.getresult(id);
  }
}
</script>