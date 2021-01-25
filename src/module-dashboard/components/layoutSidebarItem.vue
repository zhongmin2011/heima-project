<template>
  <div class="menu-wrapper">
    <!-- <template v-for="item in routes" v-if="!item.hidden && item.children"> -->
      
      <!-- 当菜单栏中 只有一层的时候，展示他的 title -->
      <!-- <router-link v-if="item.children.length === 1 && !item.children[0].children"
        :to="item.path+'/'+item.children[0].path"
        :key="item.children[0].name">
        <el-menu-item :index="item.path+'/'+item.children[0].path">
          <svg-icon v-if="item.children[0].meta&&item.children[0].meta.icon" :icon-class="item.children[0].meta.icon"></svg-icon>
          <span v-if="item.children[0].meta&&item.children[0].meta.title" slot="title">{{generateTitle(item.children[0].meta.title)}}</span>
        </el-menu-item>
      </router-link>
 
      <el-submenu v-else index="1" :key="item.name"  @open="handleOpen"  @close="handleClose">
        <template slot="title">
          <svg-icon v-if="item.meta && item.meta.icon" :icon-class="item.meta.icon"></svg-icon>
          <span v-if="item.meta && item.meta.title">{{item.meta.title}}</span>
        
          <template v-for="child in item.children" v-if="item.children.length !== 0">
            <sidebar-item :is-nest="true" v-if="child.children && child.children.length > 0" :routes="[child]" :key="child.path"></sidebar-item>

            <router-link :to="item.path+'/'+child.path" :key="child.name">
              <el-menu-item :index="item.path+'/'+child.path">
                <svg-icon v-if="child.meta && child.meta.icon" :icon-class="child.meta.icon"></svg-icon>
                <span v-if="child.meta && child.meta.title">{{generateTitle(child.meta.title)}}\\</span>
              </el-menu-item>
            </router-link>
          </template>
        </template>
      </el-submenu>
    </template> -->


    <template v-for="item in routes" v-if="!item.hidden && item.children">
        <el-menu v-if="item.children.length == '1' && !item.children[0].children"
          default-active="2" 
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#5F8FFF"
          text-color="#fff"
          active-text-color="#ffd04b">
          <router-link :to="item.path+'/'+item.children[0].path">
            <el-menu-item index="1">
              <template slot="title">
                <svg-icon v-if="item.children[0].meta && item.children[0].meta.icon" :icon-class="item.children[0].meta.icon"></svg-icon>
                <span>{{item.children[0].meta.title}}</span>
              </template>
            </el-menu-item>
          </router-link>
        </el-menu>

        <el-menu v-else
          default-active="1" 
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#5F8FFF"
          text-color="#fff"
          active-text-color="#3E6EF9">
          <el-submenu index="1">
            <template slot="title">
              <svg-icon v-if="item.meta && item.meta.icon" :icon-class="item.meta.icon"></svg-icon>
              <span v-if="item.meta && item.meta.title">{{item.meta.title}}</span>
            </template>
            <template v-if="item.children" v-for="(child,index) in item.children">
              <template v-if="!child.children">
                <router-link :to="item.path + '/' + child.path">
                  <el-menu-item :index="child.name||child.path">
                    <svg-icon v-if="child.meta && child.meta.icon" :icon-class="child.meta.icon"></svg-icon>
                    <template slot="title">{{child.meta.title}}</template>
                  </el-menu-item>
                </router-link>
              </template>
              <template v-else>
                <el-submenu :index="child.name||child.path">
                  <span slot="title">{{child.meta.title}}</span>
                  <template v-for="childItem in child.children">
                    <router-link :to="item.path + '/' + child.path + '/' + childItem.path">
                      <el-menu-item :index="childItem.meta.title">{{childItem.meta.title}}</el-menu-item>
                    </router-link>
                  </template>
              </el-submenu>
              </template>
            </template>
          </el-submenu>
        </el-menu>
    </template>

  </div>
  
</template>

<script>
import {generateTitle} from '@/utils/i18n'

export default {
  name: 'layoutSidebarItem',
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  mounted(){
    console.log(this.routes,'routes')
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    generateTitle
  }
}
</script>
<style>
#app .el-submenu .el-menu-item{
  background-color: #9bb9ff !important;
}
#app .el-submenu.is-active .el-submenu__title{
  color: white!important;
}
#app .el-submenu .el-menu-item:hover{
  background-color: rgb(76, 114, 204) !important;
  color: #5F8FFF!important;
}
#app .sidebar-container .el-menu a li:hover span, #app .sidebar-container .el-menu a li:hover .svg-icon{
  color: white!important;
}
/* rgb(76, 114, 204) */
</style>
