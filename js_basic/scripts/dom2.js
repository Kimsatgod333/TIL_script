//05.22 DOM 이벤트와 함수
//함수의 매개변수, 익명함수, 화살표함수
//function 함수명(매개변수, 매개변수){실행}
//const 변수명 = function(매개변수){실행}
//const 변수명 =(매개변수) =>{실행}
const bg = document.querySelector('#bg');
const bg1Btn = document.querySelector('#bg1_btn');
const bg2Btn = document.querySelector('#bg2_btn');
console.log(bg);
bg.style.backgroundColor = 'yellow';
bg.style.height = '100vh';
console.log(bg1Btn);
console.log(bg2Btn);
//버튼에 마우스를 올렸을때 배경색이 변경제어되는 알고리즘
//이벤트
bg1Btn.addEventListener('mouseover', changeBg);
bg1Btn.addEventListener('mouseout', rollbackBg);
//bg2Btn.addEventListener('mouseover',bgChange('coral'));
//위 에러 해결법 : 객체 이벤트에서 매개변수가 잇는 함수를 호출하려면 익명함수 또는 화살표함수로 변경해야 호출이 가능.
bg2Btn.addEventListener('mouseover', function(){
    bgChange('coral');//익명함수 내에서 매개변수가 있는 함수 호출
})
bg2Btn.addEventListener('mouseout',()=> bgChange('brown'));// 화살표 함수 내에서 매개변수가 있는 함수 호출, 이벤트내에서 화살표 함수 작성시, 한줄이내로는 {} 중괄호를 생략할수 있다.
//함수
function changeBg(){
    return bg.style.backgroundColor = 'aqua';
}
function rollbackBg(){
    return bg.style.backgroundColor = 'yellow';
}
//매개변수사용 함수
function bgChange(color){
    return bg.style.backgroundColor = color;
}