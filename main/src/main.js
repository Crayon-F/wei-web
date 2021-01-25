import Vue from 'vue'
import App from './App.vue'
import router from './router'

import microApps from './micro-app'
import { registerMicroApps, start } from 'qiankun';


Vue.config.productionTip = false

registerMicroApps(microApps, {
  beforeLoad: app => {
    console.log('before load app.name====>>>>>', app.name)
  },
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
    },
  ],
  afterMount: [
    app => {
      console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name);
    }
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
    },
  ],
});

start();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
