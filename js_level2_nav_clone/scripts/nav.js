//데스크탑 메뉴 복제 >> 모바일 메뉴 붙여넣기
const mNavOpen = document.querySelector('.m_nav_open');
const gnb = document.querySelector('.gnb');
const gnbClone = gnb.cloneNode(true);
//데스크탑 nav lnb 숨기기
//모바일 .m_nav_wrap 숨기기
const navLnb = document.querySelectorAll('nav .lnb')
const mNavWrap = document.querySelector('.m_nav_wrap')
const mNavClose = document.querySelector('.m_nav_wrap .close')
const mNav = document.querySelector('.m_nav')
console.log(mNavOpen, gnb, gnbClone, navLnb, mNavWrap);
mNavOpen.appendChild(gnbClone);
for(let i = 0; i<5; i++){
    navLnb[i].style.display = 'none'
}
mNavWrap.style.height = '0';
mNavWrap.style.transition = 'all 0.3s linear';
mNavWrap.style.overflow = 'hidden';
//mNavWrap.style.display = 'none';
//모바일 메뉴 클릭시 m_nav_wrap 보이게 하기
mNav.addEventListener('click', ()=>{
    mNavWrap.style.height = '100vh';
    //mNavWrap.style.display = 'block';
})
//X 버튼 클릭시 m_nav_wrap 숨기기
mNavClose.addEventListener('click', ()=>{
mNavWrap.style.overflow = 'hidden';
mNavWrap.style.height = '0';
    //mNavWrap.style.display = 'none';
})
//nav 마우스 올렸을때 lnb(navLnb), lnb_bg 보이게 하기
const nav = document.querySelector('nav');
const lnbBg = document.querySelector('.lnb_bg');
console.log(nav, lnbBg);
lnbBg.style.display = 'none';//마우스 이벤트 전 숨기기
nav.addEventListener('mouseover',()=>{
    lnbBg.style.display = 'block';
    //navLnb.style.display = 'block'; index를 붙이지 않은 틀린 형태
    for(let i = 0; i<navLnb.length; i++){
        navLnb[i].style.display = 'block';
    }
});
//nav에서 마우스가 빠지면 lnb, lnbBg가 숨겨짐
nav.addEventListener('mouseout', ()=>{
    lnbBg.style.display = 'none';
    for(let i = 0; i<navLnb.length; i++){
        navLnb[i].style.display = 'none';
    }
})