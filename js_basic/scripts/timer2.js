let num = 2;
/* function numTimer(){
    num++;
    console.log(num);
}
setInterval(numTimer, 2000); */
//이벤트의 다양한 함수 호출방법(콜백, 화살표함수, 익명함수 순서)
//DOM.addEventListener('event',콜백함수);
//DOM.addEventListener('event',()=>{});
//DOM.addEventListener('event',function(){});
//타이머의 다양한 함수 작성법
//setInterval(콜백함수, ms); 콜백함수를 재사용가능,
//const 변수명 = setInterval(익명함수, ms); <이것도 많이 씀. 타이머를 담은 변수명으로 타이머 정지, 재생등의 제어 가능 ()=>형태의 화살표 함수로 변경가능
/* const numTimer = setInterval(()=>{
    num++
    console.log(num);
}, 2000) */
/* const numTimer = setInterval(function(){
    num++
    console.log(num);
}, 2000) */
const slideContainer = document.querySelector('.slide_container');
function slideTimer(){
    num--
    slideContainer.style.transform = `translateX(-${num*400}px)`
    if(num < 0){
        num = 2;
        slideContainer.style.transform = `translateX(-${num*400}px)`
    }
}
setInterval(slideTimer, 3000);