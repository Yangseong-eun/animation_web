let mainText = document.querySelector("h1");

window.addEventListener('scroll', function(){
    let value=window.scrollY;

    if(value>200){
        mainText.style.animation="disappear 2s ease-out"
    }
    else{
        mainText.style.animation="again 1s ease-in"
    }
})

const content = "저는 현재 html,css,javascript,node js를 \n 공부하고 있습니다\n Bootstrap과 scss공부 예정!";
const text = document.querySelector(".text");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing,200)