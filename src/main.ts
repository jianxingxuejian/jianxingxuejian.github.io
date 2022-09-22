import { createApp } from 'vue'
import { setupRouter } from './router'

import App from './App.vue'

import 'uno.css'
import './styles/css/index.css'

async function setupApp() {
  const app = createApp(App)
  await setupRouter(app)
  app.mount('#app')
}

setupApp()

// interface Test {
//   a: number
//   b: string
// }
// function test1(param: Test[], param1: Test[]) {
//   for (let index = 0; index < param.length; index++) {
//     set(param, param1, index)
//   }
// }
// function set(arr1: Test[], arr2: Test[], index: number) {
//   arr1[index] = arr2[index]
// }

// function test2(funs: ((row?: Test) => void)[]) {
//   console.log(funs[0]())
//   console.log(funs[1]({ a: 1, b: '2' }))
// }
// const test3 = () => console.log('test')
// const test4 = (test: Test) => console.log(test)
// test2([test3, test4])
