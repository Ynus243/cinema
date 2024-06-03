import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import routers from './router'
import BtnMore from '@/components/UI/BtnMore.vue'
import Actors from '@/components/UI/Actors.vue'
import '@/assets/style/style.scss'
import VueLazyLoad from 'vue-lazyload'
const app = createApp(App)
app.component('BtnMore', BtnMore)
app.component('Actors', Actors)


app.use(VueLazyLoad)
app.use(routers).use(store).mount('#app')
