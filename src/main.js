//入口文件

//引入vue
import Vue from 'vue'


//按需导入Mint-UI中的组件
import {Header} from 'mint-ui'
//添加组件到Vue对象
Vue.component(Header.name,Header)

//为Tabbar的实现导入MUI样式
import './lib/mui/css/mui.min.css'

//引入自定义组件App.vue
import app from './App.vue'

//创建一个vue实例
var vm =new Vue({
    el:'#app',
    render:c => c(app)  //渲染组件到容器
})