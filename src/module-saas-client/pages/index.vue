
<template>
   
  <div class="dashboard-container">
     <el-table :data="dataList" border style="width: 100%">
      <el-table-column type="index" label="序号" width="150" align="center">
      </el-table-column>
      <el-table-column prop="name" label="公司名称" width="300">
      </el-table-column>
      <el-table-column prop="version" label="当前版本" width="200">
      </el-table-column>
      <el-table-column prop="legalRepresentative" label="联系人" width="200">
      </el-table-column>
      <el-table-column prop="companyPhone" label="公司电话" width="230">
      </el-table-column>
      <el-table-column prop="companyArea" label="所在地区" width="250">
      </el-table-column>
      <el-table-column prop="createTime" label="开始时间" width="300">
      </el-table-column>
      <el-table-column prop="expirationDate" label="结束时间" width="300">
      </el-table-column>
      <el-table-column label="状态">
        <el-switch v-model="value" disabled> </el-switch>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button @click="update(scope.row.id)" type="text" size="small"
            >编辑</el-button
          >
          <el-button @click="remove(scope.row.id)" type="text" size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <template>
      <div align="center ">
        <el-button
          @click="addnew()"
          type="primary"
          text-align:
          center
          size="medium"
          >新增</el-button
        >
      </div>
    </template>
     
  </div>
</template>

<script>
//调用查询方法
import { shanchu } from "@/api/base/saasClient";
import Api from '@/utils/http.js'
export default {
  name: "saas-clients-index",
  components: {},
  data() {
    return {
      value: true,
      dataList: [],
    };
  },
  methods: {
    // getList() {
    //   Api.get("/ava/edi/sap/v1/salecorder").then((res) => {
    //     this.dataList = res.data.data;
    //   });
    // },

    remove(id) {
      //括号内要接收上面props.row.id传来的id值
      shanchu({ id: id }).then(res => {
        console.log(res.data);
        this.getList();
      });
    },
    update(id) {
      this.$router.push({
        path: "/saas-clients/update",
        name: "saas-clients-update",
        params: {
          id: id,
        },
      });
    },

    handleClick(e) {
      this.$router.push({
        path: "/saas-clients/detailed",
        name: "saas-clients-detailed",
        params: {
          id: e.id,
        },
      });
    },
    addnew() {
      this.$router.push({
        path: "/saas-clients/xinzeng",
        name: "saas-clients-xinzeng",
      });
    },
  },
  computed: {},
  created() {
    this.getList();
  },
};
</script>