//HTML li상품 1개 준비후 JS를 이용한 다수의 상품 복제 준비
//1.복제 전 복제대상 선택
const productLi = document.querySelector('.product_list li');
//2. 오류 확인후 복제변수 생성
//const productLiClone = productLi.cloneNode(true);
//3. 복제 후 붙여넣기 할 위치 변수 선택
const productUl = document.querySelector('.product_list')
//console.log(productLi,productLiClone, productUl);
//4.붙여넣기 진행
//productUl.appendChild(productLiClone);
for(let i = 1; i<8; i++){
    const productLiClone = productLi.cloneNode(true)
    productUl.appendChild(productLiClone);
}
//슬라이드 애니메이션(타이머 함수)
const slideContainer = document.querySelectorAll('.slide_container');
console.log(slideContainer);
let num = 0;
const slideTimer = setInterval(()=>{
    num++
    if(num > 5){num = 0}
    for(let i of slideContainer){
        i.style.transform = `translateX(calc(-480px * ${num}))`;
    }
}, 3000);
//동기와 비동기 출력 연습
//console.log('A')
//console.log('B')
//console.log('C')
//위 동기 작업은 순차적으로 콜스택에 쌓이며 실행
console.log('A');
setTimeout(()=>{
    console.log('B')
} ,2000)
console.log('C')
//위 동기(a,c)와 비동기(b)는 순차적으로 실행되지 않는다.
//동기작업(a,c)는 콜스택에 바로 쌓이며 즉시 실행되고
//비동기작업(b)는 콜백 큐에 저장되고 준비가 되면 순차적 순서 상관없이 독립적으로 실행된다.
//clearInterval(setInterval변수명)
//카운트다운 버튼 클릭 시 10초 카운트다운 시작
//1초 간격으로 10->9->8->...->0 0초가되면 타이머가 멈추고 '이벤트 종료'메세지 출력
const saleTimer = document.querySelector('.sale_timer em')
const saleBtn = document.querySelector('#timer_btn')
console.log(saleTimer,saleBtn)

saleBtn.addEventListener('click',startCountDownFunc)
function startCountDownFunc(){
    let num = 10
    const startCountDown = setInterval(()=>{
        if(num < 0){
            clearInterval(startCountDown);
            alert('이벤트 종료')
        }else{
            saleTimer.textContent = num;
        num--
        }
    },1000)
}