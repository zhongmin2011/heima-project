<template>
  <div class="dashboard-container">
<el-form :model="rulevalue"   label-width="100px" class="demo-ruleForm">
  <el-form-item label="公司名称"  prop="name">
     <el-input v-model="rulevalue.name" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="所在地区" prop="companyArea">
    <el-input v-model="rulevalue.companyArea" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="公司电话" prop="companyPhone">
    <el-input v-model="rulevalue.companyPhone" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="开始时间" prop="createTime">
    <el-input v-model="rulevalue.createTime" autocomplete="off"></el-input>
  </el-form-item>
 
</el-form>
  </div>
</template>
<script>
//调用查询方法
import {company} from '@/api/base/saasClient'
export default {
  name: 'saas-clients-detailed',
  components: {},
  data() {
    return {
      value: true,
      
      rulevalue: {}
   }
 },
 methods:{
   getcompany(id){
     company({id:id}).then(res=>{
        console.log(id);
       console.log(res.data);
       this.rulevalue=res.data.data;
     })
   },
},
  computed: {
 },
  created() {
  var id = this.$route.params.id;
//console.log(id);
  this.getcompany(id);
 }
 
}</script>