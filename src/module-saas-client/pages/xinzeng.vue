<template>
     <div class="dashboard-container">
<el-form  :model="company" label-width="100px" class="demo-zejia">
  <el-form-item label="公司名称">
     <el-input v-model="company.name" ></el-input>
  </el-form-item>
  <el-form-item label="所在地区" >
    <el-input v-model="company.companyArea" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="公司电话">
    <el-input v-model="company.companyPhone" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="开始时间" >
    <el-input v-model="company.createTime" autocomplete="off"></el-input>
    <div align="center ">
      <el-button @click="tijiao(company)" type="primary" text-align: center  size="medium">提交</el-button>
    </div>
  </el-form-item>
</el-form>
  
    
  
  </div>
</template>
<script>
import {zengjia} from '@/api/base/saasClient'


export default {

  
  name: 'saas-clients-addnew',
  components:{},
  data(){
    return{
     company : {
         name:'',
         companyArea:'',
         companyPhone:'',
         createTime:''
     }
    }
  
  },
  
  methods:{

    tijiao(company){

       console.log(company.name)
       
       zengjia(company).then(res =>{
         console.log(res.data);
         this.$router.push({path:'/saas-clients/client'});
        })
   
    }

    
  },
  computed:{

  },
  created(){

  }
}
</script>