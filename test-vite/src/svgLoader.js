import svg from "./assets/svg/vue.svg?raw";

console.log(svg);
const div = document.createElement("div")
div.innerHTML = svg;
document.body.appendChild(div);

document.querySelector("svg").addEventListener("click", function (){
    const childList = this.childNodes;
    childList.forEach((item) => {
        if(item !== this.lastChild){
            item.style.fill = "#0077FF";
        }
    })
})
