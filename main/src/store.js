import { initGlobalState } from 'qiankun';
import Vue from 'vue'
//父应用的初始state
// Vue.observable是为了让initialState变成可响应：https://cn.vuejs.org/v2/api/#Vue-observable。
const initialState = Vue.observable({
  user:{
    accessToken: "admineyJhbGciOiJIUzI1NiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAKtWyiwuVrJSqshMzM_IL03OT8nMS09Myc3MU9JRykwsUbIyNDM0NLIwM7Aw11Eqys9JBSoO8vdxjXd08fX0AylKAYromhgBmaXFqUV5ibkgJWAjHAwNDEoSc_SS83OVagHxlIjeagAAAA.H6GnLfaiUsbdck3Ev_8IiunAPbT3dmO9tfUElkjsRFQ",
    expiresIn: 10800,
    id: "-42",
    realName: "admin@100tal.com",
    tokenType: "Bearer"
  }
})
const actions = initGlobalState(initialState);

// 监听action
actions.onGlobalStateChange((newState,pre)=>{
  // state: 变更后的状态; prev 变更前的状态
  console.log('main change', JSON.stringify(newState), JSON.stringify(prev));

  for(let k in newState){
    initialState[k] = newState[k]
  }
})
//定义一个getGlobalState获取某个属性
actions.getGlobalState = (key=>{
  return key ? initialState[key] : initialState 
})

export default actions