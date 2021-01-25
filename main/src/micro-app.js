const microApps = [
  {
    name: 'sub', // 应用的名字
    entry: '//localhost:10001', // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
    container: '#vue', // 容器名
    activeRule: '/vue', // 激活的路径
    props: {
      routerBase: '/vue'
    }
  },
]

export default microApps