import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false;

const apps = [
	{
		name: 'vueApp',
		entry: '//localhost:10000',
		container: '#vue',
		activeRule: '/vue'
	},
	{
		name: 'reactApp',
		entry: '//localhost:20000',
		container: '#react',
		activeRule: '/react'
	}
];

registerMicroApps(apps);
start({
  prefetch: true    // 如果是false会取消预加载
});

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
