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
