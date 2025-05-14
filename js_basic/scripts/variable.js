/* variable.js */
/* 템플릿 문자열 활용 - 월, 요일 출력 */
// new Date();
//getFullYear();
// getMonth();
// getDate();
/* 변수 생성시 기존 변수와 같은 위치에 작성하기 */
var test = new Date();//컴퓨터 시간 불러오기
var ye = test.getFullYear();
var mon = test.getMonth(); //컴퓨터는 숫자를 0부터 인식하기 때문에 5월을 숫자 4로 인식한다.
var day = test.getDate();
//console.log(`${ye}년 ${mon+1}월 ${day}일`);//2025년 5월
//객체의 개수를 체크할땐 보통 0부터 숫자를 인식하지만 특정 속성이나 함수를 1부터 인식하는 종류들도 있다. 대표적인 1부터 인식하는 속성은 문자열의 길이를 체크하는 length 속성이다.
// hello.length; 결과 >> 5
//============= ES6 새로운 변수 let, const와 기존 변수 var
var num1 = 10;
var num1 = 20;
//var는 중복선언이 가능하다. 하지만  실무에선 이미 생성한 변수명을 또 중복선언하는 문제를 내면 안되기 때문에 var는 이를 오류로 선언하지 않으므로, 가능한 사용을 하지 않거나 주의해서 사용해야 한다.
let num2 = 30;
//let num2 = 40;
//let 변수생성키워드는 이미 생성한 변수를 중복선언하지 못하도록 체크하기 때문에 개발자의 실수를 방지할 수 있다.
const num3 = 50;
//const num3; 중복선언 불가
//num3 = 60; 한번 값을 선언했을경우 해당 JS에서는 해당값이 변하지 않고 유지되어야 한다.(상수이기 때문)
// const num4; // 잘못된 선언. 상수는 항상 선언되자 마자 값을 대입해야한다. 나중에 값을 대입하려고 하면 상수에서 값을 변경하려는것으로 간주하여 오류가 일어난다.
const num4 = 60; // 올바른 예시
// =============객체 연습
//1. 도형 정보 저장(너비, 높이, 좌표, 모서리, 색상)
let rectangle = {//rectangle 객체변수명은 콜스텍 저장 
    width:300, /* 클래스, 아이디와 같이 이름을 정하는 것이지, 실제 html이나 css에서의 속성이나 태그와 같은이름을 사용하여도 동일한 효과는 아님, 그래도 알아는 볼수있게 쓰는게 중요 */
    height:200,
    x:0,
    y:100,
    boder:0,
    color:'red', /* 값이 문자면 항상 따옴표로 묶어둘것  */ //width~color 까지의 객체의 모든속성은 메모리힙 저장
}
console.log(rectangle.x, rectangle.y);
// 2. 회원정보 저장(이름, 나이, 성별, 지역)
let user_info = {
    name:'남남수수학학원원장',
    age:63,
    gender:'남성',
    area:'목포',
}
console.log(user_info.age, user_info.gender);
//3. 쇼핑몰 상품 저장(상품명, 가격, 재고수량, 색상)
let product = {
    name:'몬스터 에너지 파피용',
    price:2300 ,
    stock:0,
    color:'coral',
}
console.log(product.price, product.stock);
//몬스터 에너지 파피용의 재고수량은 0개 이다.
console.log(`${product.name}의 재고수량은 ${product.stock}개 이다.`);
// 영화관 좌석 지정(좌석명, 좌석위치, 좌석가격)
let movie_theater = {
    name:'일반',
    location:'d4',
    price:15000,
}
console.log(movie_theater);
console.log(movie_theater.location, movie_theater.price);
console.log(`오늘 ${movie_theater.name}좌석 ${movie_theater.location}번 ${movie_theater.price}원에 예약했다.`)
//============배열 공부
//배열 작성법 1.(값은 개수 제한 없음, 최소 2개 이상)
// let(변수) 변수명 = [배열값, 배열값, 배열값];
// const(상수) 변수명 = [배열값, 배열값, 배열값];
const yoil = ['월', '화', '수', '목', '금', '토', '일'];
console.log(yoil);//test
console.log(yoil[2]);
//오늘은 ?요일 입니다.
console.log(`오늘은 ${yoil[2]}요일 입니다.`);
//내일은 ?요일 입니다.
console.log(`내일은 ${yoil[3]}요일 입니다.`);