//정규표현식 regex
//필터 시작과 끝 표시
//필터.test('검사문자')
//상황1. 쇼핑몰 리뷰 작성 시 리뷰 내용에 '별로' 라는 단어 입력금지
const userText = '구매하지 마세요';
const regexFilter = /별로/
let result = regexFilter.test(userText);
console.log(result);
//상황2. 쇼필몰 리뷰 작성 시 리뷰 내용에 '별로', '최악' 단어 금지
//필터예시 (별로|최악)
const userReview = '별로 쓸모있지도 않네요 최악입니다.';
const textFilter = /(별로|최악)/;
result = textFilter.test(userReview);
console.log(result);
//회원가입 알고리즘
//아이디에 영어만 입력가능한(정규표현식) 조건 생성
const userId = document.querySelector('input[name*=id]');
const userIdErr = document.querySelector('.error_id');
console.log(userId, userIdErr);
userId.addEventListener('input',idChk)
//function inputTest(){return console.log('입력확인')}
function idChk(){
    if(!/^[a-zA-z]+$/.test(userId.value)){
        return userIdErr.textContent = '영어만 입력 가능합니다.'
    }else{
        return userIdErr.textContent = ''
    }
}
const userAge = document.querySelector('input[name*=age]');
const userAgeErr = document.querySelector('.error_age');
console.log(userAge,userAgeErr);
userAge.addEventListener('input',ageChk)
function ageChk(){
    if(!/^\d+$/.test(userAge.value)){
        return userAgeErr.textContent = '숫자만 입력 가능합니다.'
    }else{
        return userAgeErr.textContent = ''
    }
}
//알파벳과 숫자 조합만 가능한 비밀번호 칸 정규표현식 만들기
const userPw = document.querySelector('input[name*=pw]');
const userPwErr = document.querySelector('.error_pw');
console.log(userPw, userPwErr);
userPw.addEventListener('input',pwChk)
function pwChk(){
    if(!/^[a-zA-Z0-9]+$/.test(userPw.value)){
        return userPwErr.textContent = '영어 + 숫자조합으로만 입력가능합니다.'
    }else{
        return userPwErr.textContent = ''
    }
}
//리뷰 글자 수 제한 알고리즘
//리뷰 작성 시 입력 글자 수 실시간 출력 .current
//현재 포맷에 맞는 최대글자수 표시 .max
//리뷰 작성 시 최대글자수를 오버하면 출력 메세지 출력
const userReview2 = document.querySelector('textarea[name=review]')
const reviewCurrentNum = document.querySelector('.current')
const reviewMax = document.querySelector('.max');
const reviewErr = document.querySelector('.error_msg');
const reviewMaxNum = 100; // 최대입력수 제한
console.log(userReview2, reviewCurrentNum, reviewMax, reviewErr);
//이벤트 전 초기 세팅(리뷰 최대 글자 수 제한 표시)
reviewMax.textContent = reviewMaxNum;
//이벤트
userReview2.addEventListener('input',reviewFunc)
function reviewFunc(){
    //글자 수 속성 length
    if(/^.{0,99}$/.test(userReview2.value)){
        //0~100자 사이일때 (참)
        reviewErr.textContent = ''
        return reviewCurrentNum.textContent = userReview2.value.length; 
    }else{
        //100자 이상일때 (거짓)
        //입력 비활성화
        //userReview2.disabled = true;
        reviewCurrentNum.textContent = userReview2.value.length; 
        return reviewErr.textContent = '100자까지만 작성 가능합니다.';
    }
}