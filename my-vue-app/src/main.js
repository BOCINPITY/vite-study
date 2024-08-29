import { createApp } from 'vue'
import '@/style.css'
import App from './App.vue'
import '@/index.css'
import '@/components_test/componentA.js'
import '@/components_test/componentB.js'
import svg from '@/assets/vue.svg'
console.log(svg)

createApp(App).mount('#app')
