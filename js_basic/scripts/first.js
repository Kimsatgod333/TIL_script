// 한줄주석
// 변수
// var 변수명 = 대입값;
// var 변수선언키워드
// = 대입연산자(오른쪽에서 왼쪽으로 값을 대입)
var num; //num 변수생성
num = 1; //1을 num에 대입한다.(변수에 값을 대입)  //이미 var로 num을 생성하였을때는 다음 줄에서는 var를 생략한다.
var num2 = 2; // 생성과 대입
// 콘솔 실행 함수
//console.log(num2);
//객체.함수(실행하는값);
//콘솔(객체)창에 num2변수값(실행값)을 로그로 출력(실행함수)
//console.log(num);
//==========2일차 250513
var bowl;
bowl = 'rice';
//console.log(bowl);//쌀
bowl = 'nut';
//console.log(bowl);//콩
// 자바스크립트는 절차적 언어이기 때문에 CSS처럼 우선순위에 따라 최종결과값만 인식하는것이 아닌 실행 함수의 작성 위치에 따라 다른 변수값을 인식할 수 있다.
var a = 1;
var b = 5;
var c = 10;
//문자 b가 아닌 변수 b를 a에 대입한다.(O) 변수를 대입한다 == 변수값을 대입한다.
c = a;
console.log(a);//b의 값을 받기 전 a의 기존 값 출력
a = b; 
console.log(b);
b = c;
console.log(c);
//=======자료형 구분 내장함수 typeof
/* console.log(typeof a); */
/* console.log(typeof(b)); */
console.log('============데이터공부')
var d;
console.log(typeof d); //값이 할당되지 않은 상태 undefined(오류 점검용)
d = a;
console.log('d의 값은', d); //`d의 값은`+ d
console.log('a의 값은 '+a);
console.log('b의 값은', b);
console.log('c의 값은 '+c);
console.log('--------------');
console.log(1+1); //숫자 + 숫자 = 더하기 결과 2
console.log('1'+1);//문자 + 숫자 = 연결 결과 1 1 (숫자 11이 아님)
console.log('--------------');
var box1 = 10;
var box2 = 'hello';
var box3 = 'javascript';
var box4;
console.log('box1='+box1+', box1은'+typeof box1+'타입이다.');
console.log(box2+' '+box3+'는 '+typeof(box2+box3)+'입니다!');//hello javascript는 String입니다! 라는 내용이 출력
console.log(box4); //undefined 정의안된상태(오류)
box4 = box2+box3;
console.log(box4); //hellojavascript
//box4 = null; //값제거
//box4= 0; //숫자 초기화(데이터 타입은 유지) 쇼핑몰 같은곳에서는 물건을 살때 초기값이 1이기 때문에 1로 쓰기도 함
box4='';//문자 초기화(데이터 타입은 유지, 따옴표 사이에 공백 없도록 주의)
console.log(box4);
console.log(box4.length); //hello의 문자 갯수
//객체.속성;
//객체.함수();
console.log('------------------------');
var num1 = 10;
var num2 = 20;
var num3 = 0;
var total; //결과 변수(위 데이터 변수들이 최종 대입될 대상)
console.log(num1, num2, num3); //10 20 0
console.log(num1 + num2 + num3);//30
total = num1 + num2;
console.log(total);//30 유지보수적으로는 함숫값에 객체들을 따로따로 넣는것보다 total에 미리 값들을 대입한 이후에 함숫값에 total을 기입하는것이 훨씬 유리함. ☆☆☆☆☆☆
console.log("she's gone");
console.log('---------------------');
console.log('1+1은 '+(1+1)+'입니다.');//1+1은 2입니다. 템플릿적용전
//일반 문자와 프로그래밍식을 쉽게 작성할 수 있게하는 템플릿문자열 활용
console.log(`1+1은 ${1+1}입니다.`);//템플릿 적용후, 적용전과 내용은 동일함.
var num4 = 1;
var num5 = 2;
console.log(`변수 num4의 값은 ${num4}입니다.`);
console.log(`num4와 num5의 더한 결과값은 ${num4+num5}입니다.`);
console.log('---------------------');
var subway = 2500;
var coffee = 3000;
var result = subway + coffee;
console.log(`오늘 총 지출액은 ${result}원입니다.`);
console.log('-----------------------구구단');
var dan99 = 2;
console.log(`${dan99}X1=${dan99*1}`);
console.log(`${dan99}X2=${dan99*2}`);
console.log(`${dan99}X3=${dan99*3}`);
console.log(`${dan99}X4=${dan99*4}`);
console.log(`${dan99}X5=${dan99*5}`);
console.log(`${dan99}X6=${dan99*6}`);
console.log(`${dan99}X7=${dan99*7}`);
console.log(`${dan99}X8=${dan99*8}`);
console.log(`${dan99}X9=${dan99*9}`);