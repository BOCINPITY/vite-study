// import "./src/components/componentA"
// import "./src/components/componentB"
// import indexCSS from "./src/less/index.module.less"
// console.log(import.meta.env) // {MODE: "development", BASE_URL: "/"}
// console.log(indexCSS)
// const container = document.querySelector("#container")
// const box = document.querySelector("#box")
// container.className = indexCSS.container
// box.className = indexCSS.box
// box.innerHTML = "Hello box"


//vite静态资源文件处理

import "./src/imageLoader"
import {name} from './src/json/index.json'

console.log(name)