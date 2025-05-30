//11. 상품 옵션 선택시 색상 선택 후(클릭(x) 변경(o)) 사이즈 선택 가능, 색상 미선택시 사이즈
//색상, 사이즈 select 변수 선언
const colorSelect = document.querySelector('select[name=color]');
const sizeSelect = document.querySelector('select[name=size]');
const orderColor = document.querySelector('.order_select .color')
const orderSize = document.querySelector('.order_select .size')
console.log(orderColor, orderSize);
console.log(colorSelect, sizeSelect);
sizeSelect.disabled = true;
//색상 select를 변경(change)했을 때 이벤트
/* colorSelect.addEventListener('change', changeFunc)
function changeFunc(){
    sizeSelect.disabled = false;
} */
console.log('-------------------12번--------------------')
// 12. 색상 >> 사이즈 선택시 선택한 색상, 사이즈 정보가 아래에 새로운 요소로 수량, 가격과 함께 새롭게 출력
// 12-1. 위 12번 진행 전 새로운 요소(.order_select) 숨기기
const orderSelect = document.querySelector('.order_select')
console.log(orderSelect);
orderSelect.style.display = 'none';
// 12-2. 위 12번 색상 >> 사이즈 선택 시 새로운 요소(.order_select) 보이기
colorSelect.addEventListener('change',orderFunc)
sizeSelect.addEventListener('change',orderFunc)
function orderFunc(){
    //console.log(colorSelect.value) //선택한 색상 정보 확인
    sizeSelect.disabled = false; //사이즈 뵈기
    //console.log(sizeSelect.value);
    //orderSelect 출력 조건 >> color의 value값이 존재하는 option선택 후 size의 value값이 존재하는 option을 추가로 선택했을 경우 orderSelect활성화
    //조건문 연습
    //if(조건식){조건이 참일 경우 실행되는 명령}
    console.log(Boolean(colorSelect.value))
    //사용자가 선택한 color, size값(value)이 모두 참일때 조건 실행(value=""이면 거짓)
    if(colorSelect.value && sizeSelect.value){
        orderSelect.style.display = 'block';
        orderColor.textContent = colorSelect.value;
        orderSize.textContent = sizeSelect.value;
    }
    if(colorSelect.value == false){
        sizeSelect.disabled = true;
        orderSelect.style.display = 'none';
    }
    if(sizeSelect.value == false){
        orderSelect.style.display = 'none';
    }
}
//13. 수량 조정 시 1~9999개까지 선택 가능 기능
//13-1. '-' 버튼 클릭 시 수량값이 1보다 작으면 1~9999개까지 선택 가능합니다. 
//13-2. '+' 버튼 클릭 시 수량값이 9999보다 크면 1~9999개까지 선택 가능합니다.
//13-3. '-', '+' 버튼 클릭 시 수량 범위 내에서 1씩 증감하는 함수 생성
const minusBtn = document.querySelector('#minus')
const plusBtn = document.querySelector('#plus')
const orderNum = document.querySelector('input[name=user_num]')
const orderPrice = document.querySelector('.order_select .price em')
const totalPrice = document.querySelector('.total .price em')
let num = 1;
let price = 39900;
let total = 0;
console.log(minusBtn, plusBtn, orderNum);
plusBtn.addEventListener('click',()=>{
    ++num
    orderNum.value = num
    total = num * price;
    orderPrice.textContent = total.toLocaleString('ko-kr');
    if(orderNum.value > 9999){
        total = price
        orderPrice.textContent = total.toLocaleString('ko-kr');
        num = 9999
        orderNum.value = num;
        window.alert('1~9999개까지 선택 가능합니다.')
    }
    /* if(num >=1 && num <= 9999){
        total = num *  price
        orderNum.value = num
        orderPrice.textContent = total.toLocaleString('ko-kr');
        } */
})
minusBtn.addEventListener('click',()=>{
    --num
    total =num *  price
    orderPrice.textContent = total.toLocaleString('ko-kr');
    orderNum.value = num
    if(orderNum.value < 1){
        total = price
        orderPrice.textContent = total.toLocaleString('ko-kr');
        num = 1
        orderNum.value = num;
        window.alert('1~9999개까지 선택 가능합니다.')
        /* if(num >=1){
            total =num *  price
            orderNum.value = num
            orderPrice.textContent = total.toLocaleString('ko-kr');
        } */
    }
})
if(orderSelect.style.display == 'block'){
    totalPrice.textContent = orderPrice.textContent
}
//15. 박스의 x 클릭시 선택한 상품 옵션 삭제
const closeBtn = document.querySelector('.order_select .close')
closeBtn.addEventListener('click',(e)=>{
    orderSelect.style.display = 'none'
    e.preventDefault()
    colorSelect.value = ''
    sizeSelect.value = ''
    sizeSelect.disabled = true;
})
//장바구니 클릭 시 '장바구니 담겼습니다.' 메세지 출력 alert()
const cartBtn = document.querySelector('#cart_btn')
cartBtn.addEventListener('click', ()=>{
    if(sizeSelect.disabled == true){
        window.alert('옵션을 선택해주세요')
    }
    if(sizeSelect.disabled == false){
        window.alert('장바구니 담겼습니다.')
    }
})
/* cartBtn.addEventListener('click', cartGo)
function cartGo(){
    if(sizeSelect.disabled == true){
        window.alert('옵션을 선택해주세요')
    }
    if(sizeSelect.disabled == false){
        window.alert('장바구니 담겼습니다.')
    }
} */
//바로구매 클릭 시 '로그인이 필요합니다.' 메세지 출력
const buyBtn = document.querySelector('#buy_btn')
buyBtn.addEventListener('click', ()=>{
    loginMsg()
})
function loginMsg(){
    return window.alert('로그인이 필요합니다.')
}