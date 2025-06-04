//main .lang_group 기준
//초기설정 : 한국어~중국어 옵션 숨기기
// #lang_select 클릭 시 .lang_open보이기
//.lang_open이 보이는 상태에서 #lang_select 클릭 시 .lang_open 숨기기
//변수생성 >> 이벤트 제작>> 이벤트 만족시 실행함수(중간중간 콘솔 체크 필수)
const langSelect = document.querySelector('#lang_select');
const langOpen = document.querySelector('.lang_group .lang_open');
const langList = document.querySelectorAll('.lang_open a')
console.log(langOpen, langSelect, langList);
//참(보이기), 거짓(숨기기) 상태
langOpen.style.display = 'none';//초기 숨김상태
//let openif = false; //초기 거짓(숨겨진)상태
/* langSelect.addEventListener('click',()=>{
    if(openif == false){
        //langOpen 숨겨진 상태면 보이기
        langOpen.style.display = 'flex';
        openif = true;
    }
    else if(openif == true){
        //langOpen 보이면 숨기기
        langOpen.style.display = 'none';
        openif = false;
    }
}) */
langSelect.addEventListener('click',()=>{
    langOpen.style.display == 'flex' ? langOpen.style.display = 'none' : langOpen.style.display = 'flex';
})
//네이버 로그인 에러 메세지 알고리즘
//아이디를 입력한 상태에서 비밀번호를 입력하지 않은 상태에서 로그인 버튼 클릭시 '비밀번호를 입력해주세요' 문구 출력
//아이디, 비밀번호를 입력후 로그인 클릭시 정보가 틀릴경우 아이디, 비밀번호 입력정보가 잘못되었습니다. 다시 입력해주세요. 문구 출력
//로그인 실패가 3회이상 진행되었을때 가상영수증퀴즈와 아이디 비밀번호 자동입력 방지 문자를 잘못 입력하였습니다. 다시 확인해 주세요. 메세지 출력
//아이디,비밀번호를 입력하지 않은상태(value='')에서 로그인 버튼을 누를경우 '아이디 또는 전화번호를 입력해주세요 라는 메세지 출력'
const userId = document.querySelector('input[name=user_id]')
const userPw = document.querySelector('input[name=user_pw]')
const loginErrMsg = document.querySelector('.error_msg')
const loginBtn = document.querySelector('#login_btn');
console.log(loginErrMsg, userId, userPw, loginBtn)
loginBtn.addEventListener('click',()=>{
    /* if(userId.value == '' && userPw.value == ''){
        loginErrMsg.textContent = '아이디 또는 전화번호를 입력해주세요'
    } */
    //삼항조건 활용 조건1
    //조건식 ? 조건식 참결과 : 조건식 거짓결과
    //조건결과대입변수 = 조건식 ? 조건식 참결과 : 조건식 거짓결과
    loginErrMsg.textContent = userId.value == '' && userPw.value == '' ? '아이디 또는 전화번호를 입력해주세요' : '';
})