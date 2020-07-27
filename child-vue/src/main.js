import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Vue.config.productionTip = false

let instance = null;
function render(props) {
    instance = new Vue({
		router,
		render: h => h(App)
	}).$mount('#app')
}

// 独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;

export async function bootstrap() {

}
export async function mount(props) {
	render(props);
}
export async function unmount() {
  instance.$destroy();
}
