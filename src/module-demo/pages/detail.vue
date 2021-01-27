<template>
  <div class="edit-user-role common-center-popover">
    <div class="mask common-mask"></div>
    <div class="container" style="height:60vh;width:50vw">
      <div class="header">
        <div class="title"><span>{{resTitle}}</span><i @click="closeDateilDialog" class="el-icon-close"></i></div>
      </div>
      <div class="content">
        <div v-for="(item,index) in currentColumn" :key="index">
          <div class="row">
            <div>{{item.title}}：</div>
            <div>{{dataList[item.key]}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ColumnTotal } from '@/module-demo/config.js'
import Api from '@/utils/http.js'
export default {
  name: '',
  props: {
    rowDatail: {
      type: Object
    }
  },
  data() {
    return {
      resTitle:'',
      currentColumn: [],
      currentId: '',
      dataList: {}
    }
  },
  // 创建完毕状态
  mounted() {
      this.resTitle = this.rowDatail.itemCode
      this.currentId = this.rowDatail.manBtchNum
      if(this.resTitle){
        ColumnTotal.filter(item=>{
          if(this.resTitle.indexOf(item.type) !== -1){
            this.currentColumn = item.data
          }
        })
      }
      if(this.resTitle && this.currentId && this.currentColumn.length > 0){
        this.getDetail()
      }
  },
  methods: {
    getDetail(){
      Api.get('/tencent/ssa/excel_02',this.currentId).then(res => {
        if(res.code == '0' && res.data){
          this.dataList = res.data[0];
        }
      })
    },
    closeDateilDialog(){
        console.log('关闭')
        this.$emit('close')
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.edit-user-role {
    z-index: 100;
    .container {
      width: 100%;
      height: 100%;
      overflow: auto;
      z-index: 1;
      background: #fff;
      border-radius: 4px;
      position: relative;
      display: flex;
      flex-direction: column;
      .header {
        background: #4285F4;
        flex: 0 0 50px;
        line-height: 50px;
        border-radius: 4px 4px 0 0;
        .title {
          color: #fff;
          font-size: 14px;
          text-align: center;
          padding: 0 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        //   & > span {
        //     float: left;
        //     font-size: 16px;
        //   }
        //   .el-icon-close {
        //     cursor: pointer;
        //     float: right;
        //     font-size: 14px;
        //   }
        }
      }
      .content {
        padding: 20px 30px;
        // flex: 1;
        display: flex;
        flex-wrap: wrap;
        .row {
          display: flex;
          overflow: auto;
          // width: 200px;
          padding: 10px 30px;
          .title {
            line-height: 40px;
            padding-left: 20px;
            font-size: 14px;
            background: rgba(241, 244, 249, 0.3);
          }
        }
      }
      .footer {
        position: absolute;
        top: 485px;
        flex: 0 0 45px;
        width: 100%;
        line-height: 45px;
        background: #FAFAFA;
        border-radius: 0 0 4px 4px;
        text-align: center;
        .buttons {
          float: right;
          margin-right: 15px;
          button {
            width: 90px;
          }
        }
      }
    }
  };
  .common-center-popover {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .common-mask {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #ccc;
      opacity: 0.4;
    }
    .ivu-tabs {
      color: #1F2D3D;
    }
  };
</style>
