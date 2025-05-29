//1. 작은 썸네일 이미지 이벤트 시 큰 이미지 변경
const thumbnail = document.querySelectorAll('.small a')
const bigImg = document.querySelector('.big img')
console.log(thumbnail, bigImg);
//콘솔 확인시 1개의 DOM요소가 아닌 [index] 표시된 여러개 DOM요소로 출력될때는 실제 사용시 요소[index]를 붙여서 사용해야한다.
/* thumbnail[0].addEventListener('mouseover',function(){
    changeBigImg(1);
})
thumbnail[1].addEventListener('mouseover',function(){
    changeBigImg(2);
})
thumbnail[2].addEventListener('mouseover',function(){
    changeBigImg(3);
})
thumbnail[3].addEventListener('mouseover',function(){
    changeBigImg(4);
})
thumbnail[4].addEventListener('mouseover',function(){
    changeBigImg(5);
})
function changeBigImg(num){
    return bigImg.src = `./images/big${num}.jpg`;
} */
//테두리 활성화 추가 ver
//첫번째 썸네일 활성화 디자인
thumbnail[0].style.border = '3px solid #59AFFF'
thumbnail[0].addEventListener('mouseover', function(){
    bigThumSrcBorder(1, this)
})
thumbnail[1].addEventListener('mouseover', function(){
    bigThumSrcBorder(2, this)
})
thumbnail[2].addEventListener('mouseover', function(){
    bigThumSrcBorder(3, this)
})
thumbnail[3].addEventListener('mouseover', function(){
    bigThumSrcBorder(4, this)
})
thumbnail[4].addEventListener('mouseover', function(){
    bigThumSrcBorder(5, this)
})
function bigThumSrcBorder(num, target){
    //사용자가 마우스 올리는 순서를 정의할 수 없기 때문에 전부 초기화 기준으로 설정
    thumbnail[0].style.border = '0'
    thumbnail[1].style.border = '0'
    thumbnail[2].style.border = '0'
    thumbnail[3].style.border = '0'
    thumbnail[4].style.border = '0'
    target.style.border = '3px solid #59AFFF'
    return bigImg.src = `./images/big${num}.jpg`;
}
// this
// * 특정 DOM요소 이벤트(click, mouseover 등) 내에서 작성하는 키워드
// 이벤트 요소가 달라도 this는 이벤트 내에서 해당 요소를 가리키는 통합명칭으로 사용할 수 있기 때문에 쉬운 선언이 가능하다.
//주의: 화살표함수에서는 사용불가. 익명함수에서만 사용가능
// DOM.이벤트리스너(이벤트, ()=>{this}) x
// DOM.이벤트리스너(이벤트, function(){this}) o
//주의2: 이벤트 내에 호출하는 함수라 해도 함수 내부에 this를 직접적으로 작성해서는 안되며, 이벤트 익명함수 내에서 작성해야한다.
// DOM.이벤트리스너(이벤트, function(){함수호출(this)}) o
// function 호출한 함수명() {this} x