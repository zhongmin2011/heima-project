<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card shadow="never">
        <!-- 数据 -->
        <el-table :data="dataList"  fit highlight-current-row style="width: 100%" border>
          <el-table-column align="center" :label="$t('table.itemCode')">
            <template slot-scope="scope">
              <span>{{scope.row.itemCode}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" :label="$t('table.spec')">
            <template slot-scope="scope">
              <span>{{scope.row.spec}}</span>
            </template>
          </el-table-column>
          <el-table-column :label="$t('table.cardCode')">
            <template slot-scope="scope">
              <span>{{scope.row.cardCode}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" :label="$t('table.itemName')">
            <template slot-scope="scope">
              <span>{{scope.row.itemName}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" :label="$t('table.itmsGrpNam')">
            <template slot-scope="scope">
              <span>{{scope.row.itmsGrpNam}}</span>
            </template>
          </el-table-column>
          <el-table-column :label="$t('table.itmsGrpCod')">
            <template slot-scope="scope">
              <span>{{scope.row.itmsGrpCod}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" :label="$t('table.prchseItem')">
            <template slot-scope="scope">
              <span>{{scope.row.prchseItem}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" :label="$t('table.sellItem')">
            <template slot-scope="scope">
              <span>{{scope.row.sellItem}}</span>
            </template>
          </el-table-column>
        </el-table>
        <!-- end -->
      </el-card>
     </div>
  </div>
</template>

<script>
import {getList} from '@/utils/http.js'
import Api from '@/utils/http.js'
export default {
  name: 'saas-clients-table-index',
  data() {
    return {
      dataList: []
    }
  },
  methods: {
    // 获取列表数据
    getList() {
      Api.get('/tencent/ssa/excel_01').then(res => {
        if(res.code == '0' && res.data){
          this.dataList = res.data;
        }
     })
    }
  },
  // 创建完毕状态
  mounted() {
    this.getList()
  },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.alert {
  margin: 10px 0px 0px 0px;
}
.pagination {
  margin-top: 10px;
  text-align: right;
}
</style>
