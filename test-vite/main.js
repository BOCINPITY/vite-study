import "./src/components/componentA"
import "./src/components/componentB"
import indexCSS from "./src/less/index.module.less"
console.log(import.meta.env) // {MODE: "development", BASE_URL: "/"}
console.log(indexCSS)
document.querySelector("#container").className = indexCSS.container
document.querySelector("#box").className = indexCSS.box