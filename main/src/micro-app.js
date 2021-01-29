import store from './store'
const microApps = [
  {
    name: 'sub', // 应用的名字
    entry: '//localhost:10001', // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
    activeRule: '/vue', // 激活的路径
    // container: '#subapp-viewport', // 子应用挂载的div
    // props: {
    //     routerBase: '/vue' // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
    //   },
   
  },
]

const apps = microApps.map(item=>{
  return{
    ...item,
    container: '#subapp-viewport', // 子应用挂载的div
    props: {
      routerBase: item.activeRule,
      getGlobalState:store.getGlobalState
    }
  }
})


export default apps