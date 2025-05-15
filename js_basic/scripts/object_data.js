//250515 배열공부
// const yoil = ['월', '화', '수'];
const yoil = new Array('월', '화', '수', '목', '금', '토', '일'); // ['월', '화', '수'] 와 같은 결과
//console.log(yoil[0]);
//console.log(yoil[1]);
//console.log(yoil[2]);
//=========색상배열
const colorArray = ['빨강', '주황', '노랑', '파랑', '보라', '검정', '초록'];
console.log(colorArray[0], colorArray[2], colorArray[4], colorArray[6]);
console.log(`제가 좋아하는 색상은 ${colorArray[1]}, ${colorArray[3]}, ${colorArray[4]}색입니다.`);
//과일 역순으로 출력하기
const fruitArray = ['바나나', '딸기', '망고', '사과', '귤'];
console.log(fruitArray[4], fruitArray[3], fruitArray[2], fruitArray[1], fruitArray[0]);
//위 요일배열과 새로운 날씨카드배열 활용 문자출력
const weatherCard = ['비', '눈', '맑음', '흐림'];
console.log(`${yoil[3]}요일 날씨 : ${weatherCard[0]}`);
console.log(`${yoil[4]}요일 날씨 : ${weatherCard[2]}`);
//=========객체와 배열
const movieInfo = {
    name:'미션임파서블',
    director:'크리스토퍼 맥쿼리',
    genre:'액션',
    rating:169,
    cast:['톰 크루즈', '헤일리 앳웰', '빙 라메스'],
    releaseDate:'2025.05.17',
    age:'15세',
    story:'전 세계 국가와 조직의 기능이 마비되고...',
};
const movieInfo_v2 = {
    type:'2D',
    name:'시크릿쥬쥬 마법의 하모니', 
    director:'조경호',
    genre:'애니메이션',
    rating:69,
    cast:['박선영', '이명호'],
    releaseDate:'2025.05.01',
    age:'전체',
    story:'사라진 별의 보석들이 흑화하면서 선샤인빌을 위험에 빠뜨리는데!',
};
//동일한 분류의 객체가 많을 경우 묶는 방법
const movieAll = [
    {
        name:'미션임파서블',
        director:'크리스토퍼 맥쿼리',
        genre:'액션',
        rating:169,
        cast:['톰 크루즈', '헤일리 앳웰', '빙 라메스'],
        releaseDate:'2025.05.17',
        age:15,
        story:'전 세계 국가와 조직의 기능이 마비되고...',
    },{
        type:'2D',
        name:'시크릿쥬쥬 마법의 하모니',
        director:'조경호',
        genre:'애니메이션',
        rating:69,
        cast:['박선영', '이명호'],
        releaseDate:'2025.05.01',
        age:19,
        story:'사라진 별의 보석들이 흑화하면서 선샤인빌을 위험에 빠뜨리는데!',
    }
];
console.log(movieAll[0].name);
console.log(`감독 : ${movieAll[0].director}`);
console.log(`장르 : ${movieAll[0].genre} / ${movieAll[0].rating}분`);
console.log(`등급 : ${movieAll[0].age}세 이상 관람가`);
//==========산술 연산자
const greeting = 'hello';
const lang = ['figma', 'html', 'css'];
console.log(greeting+lang[0]);
console.log(greeting+lang[1]);
console.log(greeting+lang[2]);
const num1 = 1;
const num7 = 7;
const global = 'world';
console.log(num1+num7);
console.log((num1+num7)+global);
// =============빼기, 곱하기, 나누기 등 연산은 숫자가 문자로 따옴표가 묶여잇을시 자동으로 숫자로 변형시킴.
const data1 = 1;
const data7 = "7";
console.log(data1+data7);//17
console.log(data1-data7);//-6
console.log(data1*data7);//7
console.log(data1/data7);//0.142857
console.log(data1%data7);//1
console.log(data1**data7);//1
console.log(typeof (data1+data7));// string (문자)
console.log(typeof (data1-data7));// number (숫자)