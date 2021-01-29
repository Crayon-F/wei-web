
/** 
 * 
 * 
 * {params} store vuex
 * {params} props {qiankun下发的props}
*/

function  registerGlobalModule(store,props) {
  if(!store || !store.hasModule){
    return;
  }
  // 初始化state
  const initState = props.getGlobalState || props.getGlobalState() || {
    user:{}
  }
  //将父组件的数据存储在子组件中
  if(!store.hasModule('global')){
    const globalModule = {
      namespaced: true,
      state: initState,
      mutations:{
        setGlobalState(state,payload){
          state = Object.assign(state, payload);
        },
        // 通知父应用
        emitGlobalState(state){
          if (props.setGlobalState) {
            props.setGlobalState(state);
          }
        }
      },
      actions:{
         // 子应用改变state并通知父应用
        setGlobalState({ commit }, payload) {
          commit('setGlobalState', payload);
          commit('emitGlobalState', payload);
        },
        // 初始化，只用于mount时同步父应用的数据
        initGlobalState({ commit }, payload) {
          commit('setGlobalState', payload);
        },
      }
    }
    store.registerModule('global',globalModule)
  }else{
    store.dispatch('global/initGlobalState',initState)
  }
}
export default registerGlobalModule