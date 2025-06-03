//삼항조건연산자기본문법
//조건 ? 조건이참일때 결과 : 조건이 거짓일때 결과;
let x = 5;
let y = x + 10;
console.log(y == 15 ? 'o' : 'x')
let total = x>10 ? 'o' : 'x';
console.log(total);
//연습2. 성인/ 미성년자 구분
/* const userAge = Number(prompt('당신의 나이는?'))
total = userAge >= 18 ? '성인입니다.' : '미성년자입니다.'
console.log(total);
window.alert(total); */
//봄 500점, 여름 600점
const gameScore = [{
    name : '봄',
    score : 500,
},{
    name : '여름',
    score : 600,
}]
console.log(gameScore);
//오늘의 1등은 00이고 점수는 000입니다!
//조건 예) 봄이가 여름이보다 점수가 큰가
//크면 봄이가 1등, 작으면 여름이가 1등
total = gameScore[0].score > gameScore[1].score ? /* [gameScore[0].name, gameScore[0].score] : [gameScore[1].name, gameScore[1].score]  */ gameScore[0] : gameScore[1]
console.log(`오늘의 1등은 ${/* total[0] */ total.name}이고 점수는 ${/* total[1] */total.score}입니다!`)
//-------삼항조건 + 리뷰 jS
const re = document.querySelector('textarea[name=re]');
const reBtn = document.querySelector('#re_btn');
console.log(re, reBtn);
reBtn.addEventListener('click',()=>{
    //콘솔테스트 : 리뷰내용 실시간 출력
    console.log(re.value)
    //콘솔테스트 : 리뷰 글자 수 출력
    //리뷰내용이 100자 이상인가?
    //이상이면 등록완료
    //아니면 100자이상 입력하세요
    console.log(re.value.length)
    total = re.value.length >= 100 ? '등록완료' : '100자 이상 입력하셔야 합니다.';
    alert(total)
})
//쇼핑 수량과 가격 알고리즘
//1개 가격 기준 12500원
//쇼핑몰 상품 데이터베이스
const productDB = [{
    name:'떡닭도리탕',
    price:12500,
    stock:10,//재고수량(최대구매 가능개수)
},{
    name:'꼬막비빔장', // productDB[1].name
    price:5800,//productDB[1].price
    stock:20,//productDB[1].stock
}]
console.log(productDB)
//DOM 변수
const numInput = document.querySelector('input[name=num]');
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const priceP = document.querySelector('.shopping .price');
//초기 주문수량 표시
let num = 1;//초기 주문수량
let result = ''; //결과 출력변수
numInput.value = num;
console.log(numInput, minusBtn, plusBtn, priceP)
//증가버튼 클릭시 재고수량만큼 증가, 재고수량 오버시 최대 구매 수량입니다. 경고창 출력
plusBtn.addEventListener('click',()=>{
    result = numInput.value >= 10 ? alert('최대구매수량입니다.') : ++num;
    totalP(0)
})
//감소버튼 클릭시 현재수량이 1보다 작거나 같을 경우 '최소구매수량입니다.'출력 아니면 수량감소
minusBtn.addEventListener('click',()=>{
    result = numInput.value <=1 ? alert('최대구매수량입니다.') : --num;
    totalP(0)
})
function totalP(index){
    numInput.value = num;
    priceP.textContent = (num * productDB[index].price).toLocaleString('ko-kr')+'원';
}