let a = 1;
let b = 10;
console.log(a, b);
// b = ++a;
// console.log(a,b); // 2, 2 ++가 되어 a는 1증가하여 2가 되고, b는 1증가한 a가 대입되어 2가된다.
b = a++;
//console.log(a,b); // 2, 1 위의 결과와 달리 b는 a가 1증가하기 전에 연산이 진행되어 기존의 a의값인 1이 대입 되었고, 이후 a는 1증가가되어 2가 된것이다.
a = --b;
//console.log(a,b);//0, 0 위의 값이 영향을 주는것으로 인해 b의 값이 1이 된상태에서 --로 1감소가 진행됨에 따라 b의 값이 0이됨. 그리고 0이된 b의 값을 대입 하였기 때문에 a도 0이됨. 위의 값을 삭제하거나, 주석처리하면 a, b가 초기값이 되므로 9, 9가 된다.
//======================예제 2
let x = 5;
//let y = ++x; //1증가된 x값을 대입받는 y변수, 증감연산은 x변수에도 영향을 주기 때문에 일회성 더하기 연산자로 +1을 붙여서 계산하고 x에 영향을 주지않게 해야함.
let y = x+1; //1증가된 x값을 대입받는 y변수이나, 위와 달리, x변수에 영향을 주지 않는 대입
console.log(x, y);
y = x++;
console.log(x, y); //6, 5 a,b의 경우와 마찬가지로 y는 x값이 증가되기 전에 대입되므로 5가 됨.
x = ++y;
console.log(x, y); //6, 6 y는 위에서 5였기 때문에 증가 연산으로 y는 6이되고, 그 값을 x에 대입하였기 때문에 x도 6이 된다.
x++;
console.log(x, y);
--y; //증감연산자는 대입이 없어도 변수에 영향을 줌
console.log(x, y);
x+1;//7,5 더하기, 빼기, 곱하기, 나누기 등 일반 산술 연산자는 대입연산자가 없으면 변수에 영향을 주지 않는다
console.log(x, y); //7,5
let num1 = 10;
let num2 = 20;
let num3 = 30;
let num4 = 40;
//num1, num2, num3, num4의 값은?
num1++; // 11
num2--;// 19
num3++; // 31
num4--; // 39
console.log(num1, num2, num3, num4);
//num1, num2, num3, num4의 값은? 11, 19, 31, 39
num1=++num2; //20
num2=num1++; //20 num1= 21
console.log(num1, num2, num3, num4);
//num1, num2, num3, num4의 값은? 21, 20, 31, 39
num3 = num1+num2; //41
num4 = ++num3; //42 num3=42 ^
console.log(num1, num2, num3, num4);
//num1, num2, num3, num4의 값은? 21, 20 , 42, 42
num1 = ++num3 + 10; // 53 num3= 43. 43+10=53 ^
num2 = --num4 + 1; // 42
console.log(num1, num2, num3, num4);
//num1, num2, num3, num4의 값은? 53, 42, 43, 41
//=========복합대입연산자
console.log('============');
let number = 10;
//number = 15 기존값을 무시하고 원하는값을 기입한것이며, 기존값을 제거해 버리게 되버려 좋지 않다.
//number = 5 // 이 값을 쓰면 기존의 10이 사라지고 5가됨, 위와 동일.
//number = number + 5 기존 값에서 원하는 값을 더하여 사용하는것이므로, 기존 값을 유지하는 경향이 있음.
number += 5; //복합대입. 결과는 number = number + 5와 동일하다.
console.log(number); //15
number -= 5; //빼기 복합 number = number - 5;
console.log(number);//15
number *= 5; // 곱하기 복합 number = number * 5;
console.log(number);//50 
number /= 5; //나누기복합 number = number / 5
console.log(number);//10
number %= 5;//나머지복합 number = number % 5
console.log(number); //0