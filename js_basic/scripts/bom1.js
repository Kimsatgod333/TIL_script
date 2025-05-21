//BOM(browser object model) 내장함수
/* const msg1 = window.alert('잠시만 기다려 주세요'); */ //변수에 전달하는 값은 없기 때문에 undefined가 뜸
/* const msg2 = window.alert('잘못 접근하셨습니다.'); //작성한 순서대로 경고문이 뜨는것을 확인할 수 있음
console.log(msg1); */
/* const userAge = window.prompt('나이를 입력하세요');
console.log(userAge); */ //window.prompt는 사용자가 입력한 값을 변수에 대입하여 출력하기 때문에 값을 가진다.
/* const userPrint = window.confirm('인쇄하시겠습니까');
console.log(userPrint); */ //window.confirm은 사용자가 확인, 취소중에서 누르는 버튼에 따라 변수에 true, false로 값이 나뉘게 된다.
/* const userInfo = window.open('https://google.com', '_blank'); */
/* const userWrite = window.document.write('hello js');
window.document.write('안녕하세요 자바스크립트'); *///변수 없이 사용할수도 있음. window.document.write이외에도 변수에 대입하는값이 없고,일회성으로만 동작하고 재사용하지 않는 이유로 굳이 변수에 대입할 필요가 없을경우, 변수를 작성하지 않고 바로 내장함수를 작성해도 된다.
//변수선언이 필요한 BOM 내장 함수 : prompt(), comfirm() 
/* window.print(); */
//사용자에 따른 인쇄제한이 있는 사이트라면 인쇄내장함수를 변수에 담아야 함다.
//DOM(document object model) - HTML Node
const pTag = window.document.getElementsByTagName('p');
const h1Tag = document.getElementsByTagName('h1');
const h2Tag = document.getElementsByTagName('h2');
const spanTag = document.getElementsByTagName('span');
const ulCls = document.getElementsByClassName('group');
const liCls = document.getElementsByClassName('list');
const activeCls = document.getElementsByClassName('active');
const wrapId = document.getElementById('wrap');
const dlCls = document.getElementsByClassName('difined');
const dtId = document.getElementById('title');
const ddCls = document.getElementsByClassName('contents');
const dtTag = document.getElementsByTagName('dt'); //해당 태그의 특정 부분만 수정하고 싶을 경우 선언하고 나서 ()옆에 수정하고 싶은 태그의 index 번호를 []안에 넣는다. 예시:const dtTag = document.getElementsByTagName('dt')[1]; 해당 선언이후 스타일 편집을 할때는 index번호를 붙이지 않도록 주의
console.log(pTag);
console.log(h1Tag);
console.log(h2Tag);
console.log(spanTag);
console.log(ulCls);
console.log(liCls);
console.log(activeCls);
console.log(wrapId);
console.log(dlCls);
console.log(dtTag);
console.log(dtId);
console.log(ddCls);
//========================DOM 객체 속성
//객체.style = 'CSS속성:값';
pTag[0].style = 'background-color:cyan';
pTag[1].style = 'background-color:pink';
ulCls[0].style = 'border:3px solid #ccc';
liCls[0].style = 'border-bottom:1px solid red';
liCls[1].style = 'border-bottom:1px solid orange';
liCls[2].style = 'border-bottom:1px solid blue';
liCls[3].style = 'border-bottom:1px solid indigo';
activeCls[0].style = 'color:violet'
activeCls[1].style = 'color:darkorange'
wrapId.style = 'padding:30px';
func.style = 'color:red'; //변수를 선언하지 않아도 전역변수 처럼 사용 가능
//위와 같이 style 속성을 이용한 CSS는 일반 CSS선택자와 다르게 가장 우선순위가 높은 개념으로 적용된다. 적용 후 모습은 웹 브라우저 F12 개발자도구에서만 확인 가능하다.
//우선순위: 자바스크립트 style속성 > ID > Class > Tag 
dlCls[0].style = 'background-color:purple';
dtId.style = 'background-color:cyan;'
dtTag[1].style = 'background-color:magenta;'
ddCls[0].style = 'background-color:hotpink'
ddCls[1].style = 'background-color:yellow'
//ES6 querySelector 이용 DOM선택하기
const orderOl = document.querySelector('.order');
const orderLi = document.querySelectorAll('.order li');
const orderToday = document.querySelector('#today');
const orderItem = document.querySelector('.order .item');
console.log(orderOl);
console.log(orderLi);
console.log(orderToday);
console.log(orderItem);
orderLi[0].style = 'font-size:2rem';
orderToday.style = 'font-weight:800';
orderItem.style = 'color:gray';
console.log('---------------------------------');
// 모든 a 글자색 검정
// nav 배경색
//  gnb 자식 li 테두리 1px lnb자식 li2px
// gnb, lnb 배경색 다르게
const nav = document.querySelector('nav');
const navGnb = document.querySelector('.gnb');
const navLnb = document.querySelector('.lnb');
const navGnbLi = document.querySelectorAll('.gnb > li');
const navLnbLi = document.querySelectorAll('.lnb > li')
const navA = document.querySelectorAll('nav a')
const navUl = document.querySelectorAll('nav ul');
console.log(nav);
console.log(navGnb);
console.log(navLnb);
console.log(navGnbLi);
console.log(navLnbLi);
console.log(navA);
console.log(navUl);
nav.style = 'background-color:skyblue';
navGnb.style = 'background-color:violet';
//navLnb.style = 'background-color:cyan';
// 객체.속성 = '값';
// 객체.속성.속성 = '값' 두번째 속성에는 CSS에서 사용하는 속성을 기입함. 이때 특수문자나 공백이 들어가서는 안되기 때문에 기존에 -이나 공백이들어가는 구간은 캐멀 표기법으로 작성하여 -이나 공백을 생략한다.;
navLnb.style.backgroundColor = 'cyan';
navLnb.style.padding = '30px';
navLnb.style.borderTop = '2px solid red';//한가지 객체에 여러 속성을 넣는법: 여러개를 작성함.
navGnbLi[0].style = 'border:1px solid blue';
navGnbLi[1].style = 'border:1px solid blue';
navLnbLi[0].style = 'border:2px solid lime';
navLnbLi[1].style = 'border:2px solid lime';
navA[0].style = 'color:#000;'
navA[1].style = 'color:#000;'
navA[2].style = 'color:#000;'
navA[3].style = 'color:#000;'
console.log('---------------------------------');
let a = 10;
let b = "10";
console.log(a, typeof a); //10 number
console.log(b, typeof b); //10 string
//let age = prompt('당신의 나이는?');
//alert(typeof age);//prompt로 사용자가 입력하는 값은 무조건 문자(string)으로 처리된다.(암시적 형변환)
//자동으로 형변환 된 데이터타입이 문자인 경우 숫자로 바꾸고 싶다면 명시적형변환중 숫자로 변환해주는 Number()내장함수를 사용한다.
//Num(숫자로변환하고 싶은 데이터 또는 함수)
//const age = prompt('당신의 나이는?');
//위 프로그래밍 동작 순서
// 1. prompt('당신의 나이는?') 사용자가 입력한 값을 문자로 자동변호나
// 2. Number() prompt가 문자로 변환한 값을 숫자로 명시적변환
// 3. age = : 변수 age에 숫자로 변환한 값을 대입
//console.log(`올해 당신의 나이는 ${age}살입니다.`);
//console.log(`내년 당신의 나이는 ${Number(age) + 1}살입니다.`);
//console.log('=======================쇼핑몰 구입 알고리즘');
//상품 1개 가격 기준 15700원
//현재 이벤트중 1+1
// 1. 사용자가 구입할 물건 개수 정하기
// 2. 개수에 따라 최종 가격 구하기
// 결과예) 구입할 물건은 ?개 이고 이벤트상품 ?개가 추가됩니다. 총 결제 가격은 ?원입니다.
let price = 15700;
const productQa = Number(prompt('구입할 개수를 입력하세요'));
const eventNum = productQa;
const total = price * productQa;
console.log(`구입할 물건은 ${productQa}개 이고 이벤트상품 ${eventNum}개가 추가됩니다. 총 결제 가격은 ${total}원입니다.`);