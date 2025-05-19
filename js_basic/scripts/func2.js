// func2.js
let b = 20;//전역변수
let c = 30;//전역(블록{}바깥)
function test(){//블록선언(여기부터 지역스코프시작)
    let a = 10; //지역변수 (블록{}안쪽)
    console.log(a+b);
}//블록 종료(지역 종료)
test();//함수 호출 (함수밖에서)
//console.log(a); //지역변수는 전역에서 호출하면 에러남
// console.log(a+b); //위와 동일함.a는 지역변수 내에 있기 때문에 전역으로 호출하면 에러
console.log(b+c); //전역변수기 때문에 전역스코프 위치 실행 가능
console.log('---------------')
let d = 5; //전역변수
let e = 15;//전역변수
let f; //전역변수 생성(값 선언 안된 상태 undefined)
let g; //전역변수 생성(값 선언 안된 상태 undefined)
scopeTest(); //함수 호출(실행)
console.log(f);//호출 후 f의 결과를 실행하는 함수기 때문에 25가 정상적으로 실행된다.
function scopeTest(){//지역스코프(블록스코프), 함수 호출 전 대기상태의 함수 생성구조.대기상태에서는 실행되지 않음. 호출을 하여야 실행이된다.
    f = 25;//지역변수
    g = 35;//지역변수
    console.log(d+f); //5+25
    console.log(e+g); //15+35
}
console.log(g+d);//g는 지역스코프기 때문에 작동시 오류남.
console.log(d+e);//5+15 d, e는 전역스코프이나, 위의 내용들이 그대로 있을경우 오류로 인식함. 위의 내용을 삭제하거나 주석처리할경우 정상처리됨.
console.log('----------------------------------');
//함수선언 대기상태 안에서 다른 함수를 호출할 수 있다.
let x = 1; //전역변수
let y;//전역변수
function func1(){ //함수 대기 상태 func1
    y = 5;//전역변수에 값 대입
    console.log(x+y);
}
function func2(){ //함수 대기 상태 func2
    let z = 10; //지역 변수 생성 및 값 대임
    func1();//6 func2 함수내에서 func1을 호출. 이때 func2는 대기상태로 실행되지는 않음.
    console.log(x+y+z);
}
func2();//16 func2 함수 호출(func2 안 func1도 함께 절차에 맞게 실행)
console.log('----------------------------------헨젤과 그레텔 알고리즘');
function storyFunc1(){
    let person = ['헨젤','그레텔'];//헨젤과 그레텔이 조약돌을 이용해서 집을 찾아갔습니다.
    let src = '조약돌';
    console.log(`${person[0]}과 ${person[1]}이 ${src}을 이용해서 집을 찾아갔습니다.`);
}
function storyFunc2(){
    let person = ['헨젤','그레텔']; //헨젤과 그레텔이  빵부스러기를 이용해서 집을 찾아갔습니다.
    let src = '빵부스러기';//결과값을 수정하기 위해 새롭게 함수를 사용하게 되면 비효율적인것을 알수 있다.
    console.log(`${person[0]}과 ${person[1]}이 ${src}을 이용해서 집을 찾아갔습니다.`);
}
storyFunc1(); //함수호출
storyFunc2();//함수호출
console.log('-----------------------------헨젤과 그레텔 알고리즘-매개변수');
function storyFunc(src/* 매개변수를 생성, 생성을 하였다면 무조건 사용할수 있도록 한다. */){
    let person = ['헨젤','그레텔']
    //헨젤과 그레텔이 조약돌을 이용해서 집을 찾아갔습니다. 
    //헨젤과 그레텔이 빵부스러기를 이용해서 집을 찾아갔습니다.
    //let src = '빵부스러기';
    console.log(`${person[0]}과 ${person[1]}이 ${src}를(을) 이용해서 집을 찾아갔습니다.`);
}
storyFunc('조약돌'/* 값을 생성한 변수에 대입 */);
storyFunc('빵부스러기');
console.log('-----------------------------커피 레시피(기본값 포함)');
//function coffeFunc(){} 함수 생성, 싫행결과는 항상같으므로 매개변수는 선언하지 않음
//function coffeeFunc1(data1){} 함수르 생성한다. 결과 실행 시 매번 달라지는 데이터가 1개 있기때문에 매개변수를 1개 생성한다.
//function coffeeFunc1(data1, data2){} 함수를 생성 한다. 결과 실행 시 매번 달라지는 데이터가 2개 있기 때문에 매개변수를 2개 생성한다.
//function cofffeFunc1(data1){실행함수+매개변수 data1 활용}
//coffeFunc1(10);
//(위)프로그래밍 해석 : 함수를 생성 후 달라지는 데이터1개에 맞춘 매개변수1개 생성완료, 이후 함수를 호출하고 매개변수에 대입할 값 10 입력.
//매개변수를 생성하고 매개변수에 값을 대입했다면 반드시 함수 내부에 매개변수를 활용한 결과식을 만들어야 한다.
//매개변수 사용 시 호출할 때 매개변수에 전달할 대입값을 작성안해도 함수가 실행되게 하고 싶다면 매개변수 생성 시 기본값을 함께 작성해야 함. funtion 함수명(매개변수=기본값){}
function coffeeFunc1(data1=1, data2=0.5 /* 변수구분시 ,로 구분 생성하자마자 값을 넣으면 해당값은 기본값이 된다. */){
    let water = data1+'컵 물을 채운다';
    let espresso = data2+'샷 에스프레소를 넣는다.';
    console.log(water, espresso);
}
coffeeFunc1(2, 1 /* 순서대로 data1, data2에 값이 대입된다. */);
coffeeFunc1(3,0.5);
coffeeFunc1();// 기본값없이 매개변수에 값을 대입하지 않으면 매개변수에 값을 아예 주지 않은것으로 간주하여 undefined가 나온다.
//==========================커피주문 알고리즘(고객기준)
console.log('----------------------커피주문 알고리즘');
function coffeeFunc2(menu, count=1){
    let notice = '잔 주문완료되었습니다.'
    console.log(menu, count, notice);
}
coffeeFunc2('카페라떼');//1은 기본값이므로 매개변수 생략
coffeeFunc2('아메리카노', 2);//2는 기본값이 아니므로 매개변수 작성
coffeeFunc2('녹차라떼');
coffeeFunc2('아메리카노', 4);
console.log('------------------------커피주문 알고리즘 활용');
function coffeeFunc3(temp , menu, count=1){
    let notice = '잔 주문완료되었습니다.';
    const type = ['따뜻한', '차가운']; 
    console.log(type[temp], menu, count, notice);// 따뜻한, 차가운을 구별하기 위해서 배열을 만들고, 해당 배열을 적용하기 위하여 기존 temp값을 type으로 대체하고, []안에 temp를 집어 넣고 함수를 불러오면 결과는 같지만, 기존과 달리 함수호출시 매개변수 값에 일일이 문자로 적지 않고 배열값을 입력하여서 간단하게 따뜻한, 차가움이 구별이 가능해진다.
}
coffeeFunc3(0, '카페라떼', 2);
coffeeFunc3(1, '아메리카노');
coffeeFunc3(0, '녹차라떼', 2);
coffeeFunc3(1, '핫초코');
console.log('------------------------함수 리턴(return)');
//더하기 알고리즘
// 함수 내부 {}는 대기장소로 호출하지 않는한 절대 실행되지 않는다.
//함수 외부는 {}가 끝난 위치로 함수를 호출해서 실행할 수 있는 위치다.
//함수 내에서 return을 작성하면 내부의 데이터를 함수 외부로 반환해서 실행시키거나 데이터를 전달하는 것을 말한다.
function plusFunc(num){
    let total = num + 1;
    return total; //리턴으로 실행함수가 아닌 값만 보냈을경우
}
plusFunc(8);
//호출 할때 리턴이 보낸 반환값을 묶어주는 실행함수를 별도로 작성해야함.
console.log(plusFunc(8));
console.log('--------------------------구구단 알고리즘(리턴, 매개변수 활용)');
let dan99 =''; //전역변수(초기값) 앞으로 문자데이터가 들어올 예정으로 빈문자 초기값
function dan99Func(num){
    dan99 = `${num}x1=${num * 1} `;
    dan99 += `${num}x2=${num * 2} `; //dan99 = dan99 + ${num}x2=${num * 2}, 기존 dan99변수에 우측 데이터를 더해서 대입.
    dan99 += `${num}x3=${num * 3} `;
    dan99 += `${num}x4=${num * 4} `;
    dan99 += `${num}x5=${num * 5} `;
    dan99 += `${num}x6=${num * 6} `;
    dan99 += `${num}x7=${num * 7} `;
    dan99 += `${num}x8=${num * 8} `;
    dan99 += `${num}x9=${num * 9}`;//일반적으로 연산을 하게 되면 새롭게 적은 값이 기존값을 없에서 마지막으로 연산된 값만 나오기 때문에 복합연산자를 이용하여 기존값을 유지하면서 새로운값이 기입되도록 한다.
    return dan99;
}
dan99Func(2);
console.log(dan99Func(2));
console.log(dan99Func(7));
console.log('----------------------할인율 계산기');
// 27900원을 입력했을 때 (가격은 달라질 수 있음.)
// 입력한 가격에 대한 5%, 10%, 20%, 30%, 40%, 50% 할인율을 동시 출력
// 10% 할인율 계산법 : 가격 * 0.9
let discountResult ='';
function discount(num){
    discountResult =`5% 할인 적용 : ${num*0.95}원 / `
    discountResult +=`10% 할인 적용 : ${num*0.9}원 / `
    discountResult +=`20% 할인 적용 : ${num*0.8}원 / `
    discountResult +=`30% 할인 적용 : ${num*0.7}원 / `
    discountResult +=`40% 할인 적용 : ${num*0.6}원 / `
    discountResult +=`50% 할인 적용 : ${num*0.5}원`
    return discountResult;
}
discount();
console.log(discount(39800));