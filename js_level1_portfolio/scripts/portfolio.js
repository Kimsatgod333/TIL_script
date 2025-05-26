//프로젝트소개 팝업 알고리즘
// 알고리즘 기준 반복해야하는 데이터를 변수로 생성
const popupBg = document.querySelector('.popup_bg');
const thumbNailA = document.querySelectorAll('.design a');
console.log(popupBg, thumbNailA);
// 1.팝업숨기기 popup_bg
popupBg.style.display = 'none';
//변수로 만든 DOM요소가 여러개일 경우 이벤트를 위해 접근할때는 인덱스를 사용하여 하나식 개별 접근해야한다.
//프로젝트 팝업 실행시 클릭한 대상의 이미지가 출력되는 알고리즘
// 2. 썸네일 이미지(a)를 클릭할경우 팝업창 노출 (popup_bg)
thumbNailA[0].addEventListener('click',function(){
    console.log(this);//이벤트객체자동인식하는지 확인
    console.log(this.children[0].src);
    console.log(popupBg.children[0].children[0].src);
    popupShow();//팝업 출력 함수 호출
    popupBg.children[0].children[0].src = this.children[0].src;
});
thumbNailA[1].addEventListener('click',function(){
    popupShow();//팝업 출력 함수 호출
    popupBg.children[0].children[0].src = this.children[0].src;
});
thumbNailA[2].addEventListener('click',function(){
    popupShow();//팝업 출력 함수 호출
    popupBg.children[0].children[0].src = this.children[0].src;
});
thumbNailA[3].addEventListener('click',function(){
    popupShow();//팝업 출력 함수 호출
    popupBg.children[0].children[0].src = this.children[0].src;
});
thumbNailA[4].addEventListener('click',function(){
    popupShow();//팝업 출력 함수 호출
    popupBg.children[0].children[0].src = this.children[0].src;
});
thumbNailA[5].addEventListener('click',function(){
    popupShow();//팝업 출력 함수 호출
    popupBg.children[0].children[0].src = this.children[0].src;
});
thumbNailA[6].addEventListener('click',function(){
    popupShow();//팝업 출력 함수 호출
    popupBg.children[0].children[0].src = this.children[0].src;
});
thumbNailA[7].addEventListener('click',function(){
    popupShow();//팝업 출력 함수 호출
    popupBg.children[0].children[0].src = this.children[0].src;
});
thumbNailA[8].addEventListener('click',function(){
    popupShow();//팝업 출력 함수 호출
    popupBg.children[0].children[0].src = this.children[0].src;
});
thumbNailA[9].addEventListener('click',function(){
    popupShow();//팝업 출력 함수 호출
    popupBg.children[0].children[0].src = this.children[0].src;
});
thumbNailA[10].addEventListener('click',function(){
    popupShow();//팝업 출력 함수 호출
    popupBg.children[0].children[0].src = this.children[0].src;
});
function popupShow(){
    return popupBg.style.display = 'flex';
}
// 3. (팝업 실행 후)팝업창의 배경(popup_bg 또는 html, body)을 클릭할경우 팝업창 다시 숨기기(popup_bg)
popupBg.addEventListener('click', popupHide);
function popupHide(){
    return popupBg.style.display = 'none';
}