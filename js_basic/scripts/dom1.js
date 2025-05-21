// DOM1 js
// HTML태그에 JS로 동적제어하고 싶은 대상만 변수로 만든다.
// 회원만 주문되는 주문하기 버튼 알고리즘
// (비회원인 경우) 주문하기 버튼을 클릭하였을 때 '회원만 주문할 수 있습니다' 메세지 출력
// 주문하기 버튼 == DOM 객체 변수
// 클릭 하였을때 == 이벤트 (HTML, Javascript)
// 회원만 주문할 수 있습니다. == 함수
// 이벤트리스너 -> 리스너(Listener)란 특정 이벤트가 발생했을 때 실행할 함수를 의미한다.
const orderBtn = document.querySelector('#orderBtn');//변수 생성
console.log(orderBtn);//변수 정상확인
//버튼 onclick 이벤트리스너로 호출할 함수 생성
function userOrderMsg(){
    return console.log('회원만 주문가능합니다. 로그인해주세요');
}
//결제하기 클릭시 '결제 완료되었습니다' 출력 알고리즘
const payBtn = document.querySelector('#payBtn');
console.log(payBtn);
function userPayMsg(){
    return console.log('결제 완료되었습니다');
}
//아이디중복확인 클릭 시 '아이디가 중복되지 않습니다. 사용하셔도 좋습니다' 출력 알고리즘
const userIdBtn = document.querySelector('#idBtn');
console.log(userIdBtn);
function userIdCheckMsg(){
    return console.log('아이디가 중복되지 않습니다. 사용하셔도 좋습니다');
}
//키보드 이벤트
//리뷰입력창에 키보드를 눌렀을 떄 '50자 이상 입력하세요' 출력 알고리즘
const userReview = document.querySelector('input[name*=review]')
console.log(userReview);
function review50Msg(){
    return console.log('50자 이상 입력하세요')
}
//id 입력창 객체 준비 후 키보드를 아무키나 입력했을 때 '아이디는 영어로 시작해야합니다' 출력 알고리즘
const idTypeEn = document.querySelector('input[name=user_id]');
console.log(idTypeEn);
idTypeEn.style.outline = 'none';
//idTypeEn.style.border = '3px solid lime';
function idEnMsg(){
    return console.log('아이디는 영어로 시작해야합니다');
}
function focusgreen(){
    return idTypeEn.style.border = '3px solid green';
}
function blurgray(){
    return idTypeEn.style.border = '1px solid gray';
}
//pw 입력창 객체 준비 후 키보드를 아무키나 입력했을 때 '비밀번호는 특수문자를 포함한 12글자 이상 입력하세요'출력 알고리즘
const pwType = document.querySelector('input[name*=pw]');
console.log(pwType);
function pwOver12Msg(){
    return console.log('비밀번호는 특수문자를 포함한 12글자 이상 입력하세요');
}
//쇼핑몰 상품 수량 입력 알고리즘
//기본 수량 1
//사용자가 숫자 입력을 위해서 커서를 두면 배경색 노랑
//커서를 빼면 배경색 흰색
const productCount = document.querySelector('input[name=product_count]');
console.log(productCount);
function bgYellow(){
    return productCount.style.backgroundColor = 'yellow';
}
function bgwhite(){
    return productCount.style.backgroundColor = '#fff';
}
//문서가 로딩되었을 때 실행함수
function loadMsg(){
    return alert('문서 로딩 완료');
}
console.log('--------------------------이벤트와 콜백함수');
//객->이->함
const googleJoin = document.querySelector('.google_join');
console.log(googleJoin);
//자바스크립트에 작성하는 객체 이벤트 문법
//객체.addEventListener('이벤트', 콜백함수); 이벤트 작성시 on은 사용하지 않음. 콜백함수로 작성시, 함수뒤에 괄호를 붙이지 않음.
googleJoin.addEventListener('click',googleNewTab);
function googleNewTab(){
    return window.open('https://accounts.google.co.kr/', '_blank')
}
//네이버, 카카오
const naverJoin = document.querySelector('.naver_join');
const kakaoJoin = document.querySelector('.kakao_join');
console.log(naverJoin);
console.log(kakaoJoin);
naverJoin.addEventListener('click',naverNewTab);
kakaoJoin.addEventListener('click',kakaoNewTab);
function naverNewTab(){
    return window.open('https://nid.naver.com/');
}
function kakaoNewTab(){
    return window.open('https://accounts.kakao.com/');
}
//현재 페이지 변경방법
//1. 객체
const fileLink = document.querySelector('.file_link');
const indexLink = document.querySelector('.index_link');
const readmeLink = document.querySelector('.readme_link')
//2. 이벤트
console.log(fileLink);
console.log(indexLink);
console.log(readmeLink);
//3. 함수
// JS에서 상대경로 연결시 JS 파일 기준이 아닌 js가 연결되 html 파일이 저장된 위치를 기준으로 상대경로를 작성한다. html이나 css와 달리 js는 자동완성이 되지 않는 점 주의
fileLink.addEventListener('click',link0520);
indexLink.addEventListener('click',indexOpen);
readmeLink.addEventListener('click',readmeOpen);
function link0520(){
    return window.location.href = 'bom1.html';//경로를 작성할때는 js파일이 있는 폴더 기준이 아닌, 해당 js가 연결된 html 파일을 기준으로 경로를 작성한다.
}
function indexOpen(){
    return window.location.href = 'index.html'
}
function readmeOpen(){
    return window.location.href = '../README.md'
}
/* 상품 수량 증가 알고리즘 */
//1. 수량초기값 1 설정
//2. + 버튼 클릭시 수량이 1씩 증가해야 한다.
const numInput = document.querySelector('input[name=num]'); 
const numBtn = document.querySelector('form #num_btn');
const numBtnMinus = document.querySelector('form #num_btn_minus')
console.log(numInput);
console.log(numBtn);
console.log(numBtnMinus);
//1. 수량초기값 1 설정
numInput.value=1; //초기값이므로 이벤트 없이 바로 작성
//2. + 버튼 클릭시 수량이 1씩 증가해야 한다.
//console.log(typeof numInput.value);
numBtn.addEventListener('click',numPlus);
numBtnMinus.addEventListener('click',numMinus);
function numPlus(){
    //수량이 1씩 증가
    // 1. 증감연산자
    //return numInput.value = ++numInput.value;
    //2.더하기 연산자와 형변환메서드 사용법
    return numInput.value = Number(numInput.value) + 1;
}
//3. - 버튼 클릭시 수량이 1씩 감소해야 한다.
function numMinus(){
    return numInput.value = --numInput.value
}