import svg from "./assets/svg/vue.svg";
import svgRaw from "./assets/svg/vue.svg?raw";

console.log(svgRaw, svg);
const div = document.createElement("div")
div.innerHTML = svgRaw;
document.body.appendChild(div);
// document.body.innerHTML = svgRaw;
document.querySelector("svg").addEventListener("click", function (){
    const childList = this.childNodes;
    childList.forEach((item) => {
        if(item !== this.lastChild){
            item.style.fill = "#0077FF";
        }
    })
})
