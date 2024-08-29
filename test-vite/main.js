import "./src/components/componentA"
import "./src/components/componentB"
import indexCSS from "./src/less/index.module.less"
console.log(import.meta.env) // {MODE: "development", BASE_URL: "/"}
console.log(indexCSS)
const container = document.querySelector("#container")
const box = document.querySelector("#box")
container.className = indexCSS.container
box.className = indexCSS.box
box.innerHTML = "Hello box"