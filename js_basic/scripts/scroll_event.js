const headerBottom = document.querySelector('header .bottom');
const topBtn = document.querySelector('#top');
//topBtn 맨 위에서는 숨기기, 스크롤 이벤트와 관계없이 바로 숨겨야 하므로 스크롤 이벤트 밖에서 선언
topBtn.style.opacity = '0'
topBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    window.scrollTo({
        left:0,
        top:0,
        behavior:'smooth',
    })
})
//window.addEventListener('scroll', ()=>{실행결과});
//검색 폼 복제 변수
const searchClone = document.querySelector('header form').cloneNode(true);//DOM 변수를 선언 하자마자 복제(선언된 요소의 자식자손까지)
let isSearchClone = false;//안보이면 false 보이면 true
window.addEventListener('scroll', ()=>{
    //console.log('스크롤 이벤트 실행중..')
    console.log(window.scrollY)
    //1. 스크롤 이벤트에 따라 헤더 디자인 변경
    if(window.scrollY > 100){//스크롤 위치가 100보다 크면
        headerBottom.classList.add('active');
        headerBottom.appendChild(searchClone);
        isSearchClone = true;
    }else{//위 조건이 아니면
        if(isSearchClone){//else 조건이 되어도 바로 실행되지 않고 이중 검사후 실행
            headerBottom.classList.remove('active');
            headerBottom.removeChild(searchClone);
            isSearchClone = false;
        }
    }
    //2. 스크롤 이벤트에 따라 맨위로 디자인 변경
    //스크롤 위치가 500보다 크면 맨 위로 보이기(아니면 숨기기)
    if(window.scrollY > 500){
        topBtn.style.opacity = '1'
    }else{
        topBtn.style.opacity = '0'
    }
    //맨 위로 클릭했을 때 스크롤 y 0으로 올리기
})//이벤트 종료