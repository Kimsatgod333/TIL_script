function greeting(){
    return console.log('hello');
}
setInterval(greeting,3000);
//타이머함수 setinterval 일정시간반복
let num1 = 0;
function num1Func(){
    num1++
    if(num1 > 4){num1 = 1;}
    console.log(num1)
    //12341234반복
}
//setInterval(num1Func,1000)
let num2 = 0;
//0~5 반복 출력 타이머
function num2Func(){
    console.log(num2);
    num2++
    if(num2 > 5){
        num2 = 0
    }
}
//setInterval(num2Func, 1500)
let num3 = 6;
function num3Func(){
    console.log(num3);
    num3--
    if(num3 < 0){
        num3 = 6;
    }
}
setInterval(num3Func,1000);
