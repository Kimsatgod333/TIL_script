//window.scrollTo(x,y) 문서 스크롤 이동하는 내장함수 (절대좌표)
const btn1 = document.querySelector('#btn1');
const topBtn = document.querySelector('#top');
console.log(btn1,topBtn);
btn1.addEventListener('click',()=>{
    //window.scrollTo(0, 950)
    //추가 속성이나 메서드 연결 시 x y를 {객체}문법으로 작성
    window.scrollTo({
        left:0, top:950,
        behavior:'smooth'//스크롤 애니메이션, CSS의 body, html{scroll-behavior:'smooth';}와 동일한 기능
    })
})
topBtn.addEventListener('click',()=>{
    window.scrollTo({
        left:0, top:0,
        behavior:'smooth'
    })
})
//특정 위치로 바로가기, 위치속성 offsetTop 활용
const blogBtn = document.querySelector('#blog_btn');
const cafeBtn = document.querySelector('#cafe_btn');
const newsBtn = document.querySelector('#news_btn');
const webtoonBtn = document.querySelector('#webtoon_btn');
const sections = document.querySelectorAll('section');
const navBtn = document.querySelectorAll('.nav button');
console.log(cafeBtn, sections, newsBtn, webtoonBtn, navBtn);
/* blogBtn.addEventListener('click',()=>{
    window.scrollTo({
        left:0,
        top:sections[0].offsetTop,
        behavior:'smooth'
    });
})
cafeBtn.addEventListener('click',()=>{
    window.scrollTo(0, sections[1].offsetTop);
})
newsBtn.addEventListener('click',()=>{
    window.scrollTo(0, sections[2].offsetTop);
})
webtoonBtn.addEventListener('click', ()=>{
    window.scrollTo(0, sections[3].offsetTop);
}) */
//forEach 활용 navBtn, sections 묶기
navBtn.forEach((obj, ind)=>{
    console.log(obj, ind);
    //obj 클릭이벤트 생성
    //클릭 이벤트 내에서 window.scrollTo 동일인덱스의 sections top위치 이동
    obj.addEventListener('click', ()=>{
        window.scrollTo({
            left:0,
            top:sections[ind].offsetTop,
            behavior:'smooth'
        });
    })
})
//스크롤 상대적 이동 DOM.scrollBy
//이전, 다음 버튼 클릭 시 웹툰 width만큼 가로스크롤(윈도우x, toon_wrap O) 이동
const toonWrap = document.querySelector('.webtoon_wrap');
const toonNext = document.querySelector('.webtoon_wrap_all .next');
const toonPrev = document.querySelector('.webtoon_wrap_all .prev');
console.log(toonWrap,toonNext, toonPrev);
toonNext.addEventListener('click',()=>{
    toonWrap.scrollBy({
        left:toonWrap.children[0].children[0].offsetWidth,
        top:0,
        behavior:'smooth'
    });
})
toonPrev.addEventListener('click', ()=>{
    toonWrap.scrollBy({
        left:-toonWrap.children[0].children[0].offsetWidth,
        top:0,
        behavior:'smooth'
    });
})