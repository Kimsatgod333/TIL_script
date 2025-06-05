//for(초기변수 선언; 조건문; 증감식){조건문이 참일때 반복실행결과}
/* for(let i=1; i<=10; i++){
    console.log('자바스크립트'+i);
} */
//1월 ~ 12월 12번 반복
//개발자가 화면에 출력하고 싶은 첫번째 번호가 for문의 초기변수의 들어가는 값이 된다.
//i를 1로 시작하고 i가 12보다 작거나 같을때까지 증감하라 결과
/* for(let i=1; i<=12; i++){
    console.log(i+'월');
}
for(let i=6; i<=12; i++){
    console.log(i+'월')
} */
console.log('--------------')
const coffee = ['아메리카노', '카페라떼', '에스프레소', '녹차라떼', '돌체라떼', '차이라떼','프라푸치노']
/* console.log(coffee); */
for(let i=0; i<coffee.length; i++)
    console.log(coffee[i])
for(let i=0; i<coffee.length; i++){
    console.log(`${i+1}번 메뉴 ${coffee[i]}`)
}
for(let i=coffee.length - 1; i>=0; i--){
    console.log(`${i+1}번 메뉴 ${coffee[i]}`)
}
//구구단 2~ 9단 출력
//2단 2x1 = 2 형태로 출력
for(let i=1; i <= 9; i++){
    console.log(`2 X ${i} = ${2 * i}`)
}
//for 반복 + if 조건
//1~20까지 출력 반복문
for(let i=1; i <=20; i++){
    //조건문 if 활용 1~20까지 반복숫자 중 홀수만 출력
    if(i%2 == 1){
        console.log(i)
    }
}
console.log('---------------')
//10~20까지 역순으로 짝수만 출력 반복문
for(let i = 20; i >= 10; i--)
    {
        if(i%2==0){
            console.log(i);
        }
    }
console.log('---------------')
const navA = document.querySelectorAll('nav a')
console.log(navA)
for(let i = 0; i<navA.length; i++){
    //console.log(navA[i]);
    //모든 a 글자색 빨강
    //navA[i].style.color = '#f00'
    //홀수 a 빨강, 짝수 a 파랑
    if(i%2==1){
        //navA[i].style.color = '#f00';
        //navA[i].style.backgroundColor = '#ff0';
        navA[i].classList.add('odd');
    }else{
        //navA[i].style.color = '#00f';
        //navA[i].style.backgroundColor = '#eee';
        navA[i].classList.add('even');
    }
}
//li 변수 만들고 배경색 노랑 변경
const list = document.querySelectorAll('.list li')
console.log(list);
for(let i = 0; i<list.length; i++){
    list[i].style.backgroundColor = '#ff0'
}