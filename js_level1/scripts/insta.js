//인스타그램 알고리즘
//1. 프로필 클릭시 프로필 페이지로 이동 O 페이지 제작 필요
const profileDOM = document.querySelector('.profile');
console.log(profileDOM);
profileDOM.addEventListener('click',clickProfile);
function clickProfile(){
    return window.location.href = 'insta_profile.html';
}
//2. 메뉴 클릭시 저장~신고 등의 기능활성화 O 추가 작성및 제작 필요
//3. 사진 한번 터치시 반응 없음 (x js)
//4. 사진 두번 처치시 좋아요 자동 등록 (O)
const photo = document.querySelector('main > .photo');
const likeImg = document.querySelector('.like img');
console.log(photo);
console.log(likeImg.src);
//객체.속성 //속성 일기
//객체.속성=값 //속성 값 변경
photo.addEventListener('dblclick', likeOn);
function likeOn(){
    return likeImg.src = './images/like_on.png'
}
//5. 좋아요 아이콘 한번 터치시 좋아요(O), 다시 터치시 좋아요 해제 (x 조건문 공부필요)
//이미지 더블클릭 전 기준
//likeImg.addEventListener('click',likeOn);
//likdImg 클릭시 스크롤 맨위로 올라가는 문제 해결방법
//콜백함수 호출이 아닌 익명함수 또는 화살표 함수를 이용
//익명함수 또는 화살표함수로 작성시 이벤트 앞 객체정보가 함수의 매개변수로 자동으로 대입된다.
//위 매개변수가 받은 정보를 확인하려면 매개변수에 변수명(e)을 작성하고 console.log()로 확인할 수 있다.
likeImg.addEventListener('click', function(e){
    //console.log(e);
    e.preventDefault();//태그의 동적기능을 취소시킴(a태그의 새로고침)
    likeOn();
})
//6. 댓글 아이콘 터치시 댓글 입력창 실행,O추가작성 및 제작 필요 실행화면에서 바깥쪽 영역 터치 댓글입력창 닫힘O추가작성 및 제작 필요
//7. 공유 아이콘 터치 시 공유가능 계정 표시된 창 실행(o) 제작 필요, 바깥쪽 영역 터치 시 닫힘. O 추가작성 및 제작 필요
//8. 즐겨찾기 아이콘 터치 시 즐겨찾기 저장(x- DB필요)이 됨과 동시에 컬렉션 선택 화면 출력(O), 바깥쪽 영역 터치시 닫힘
//9. 기본: 글1줄, 날짜만 미리표시, 글 터치시 전체 내용 펼치기 O 추가작성 및 제작 필요
const hashtagDOM = document.querySelector('.tag');
const storyDOM = document.querySelector('.story');
const dateDOM = document.querySelector('.date');
console.log(storyDOM, dateDOM);
console.log(hashtagDOM);
//함수를 생성하지 않고 바로 작성한 이유. 즉시 실행되고 반복되는 내용이 아니기 때문.
hashtagDOM.style.display = 'none'
// 글 클릭 시 해쉬태그 표시
storyDOM.addEventListener('click',tagShow);
function tagShow(){
    return hashtagDOM.style.display = 'block';
}
//10. 해시태그 클릭시 해당태그를 사용하는 게시글 페이지로 이동 (O)추가작성 및 제작 필요
hashtagDOM.addEventListener('click',clickHashtag);
function clickHashtag(){
    return window.location.href = 'insta_tag.html';
}
//별도의 동적기능 없이 단순한 링크만 있는 경우 js없이 a태그에 링크걸기
//동적기능예) 해외IP접속차단, 동일IP접속차단, 성인사이트접속인증, 로그인에 따른 접속가능 페이지일 경우 로그인 유무 확인 등
//11. 날짜 터치기능 없음 (x js)
//추가 페이지 필요 목록) 개인프로필 페이지(insta_profile.html), 저장~신고 등의 기능, 댓글 입력창, 공유가능 계정들 표시, 컬렉션 선택 화면, 태그 사용 게시글(insta_tag.html)