//회원가입 버튼 클릭 시 join_msg에 '가입축하합니다.' 메세지 출력
const joinBtn = document.querySelector('#join');
const joinMsg = document.querySelector('.join_msg');
const payCancelBtn = document.querySelector('#pay_cancel')
console.log(joinBtn,joinMsg)
joinMsg.classList.add('hide'); // 초기 상태 (숨기기)
payCancelBtn.classList.add('hide')
joinBtn.addEventListener('click',()=>{
    joinMsg.classList.remove('hide');
    joinMsg.textContent = '가입축하합니다.';
    //3초후 메세지 자동 사라지기
    const hideMsg = setTimeout(()=>{
        joinMsg.classList.add('hide')
    },3000)
});
const payBtn = document.querySelector('#pay');
const payMsg = document.querySelector('.pay_msg');
let payMsgOut;
console.log(payBtn, payMsg)
payMsg.classList.add('hide')
payBtn.addEventListener('click',()=>{
    payMsg.classList.remove('hide')
    payMsg.textContent = '결제완료되었습니다. 5초후 광고 사이트로 이동합니다.';
    payCancelBtn.classList.remove('hide');
    //5초후 timer3.html로 이동
    payMsgOut = setTimeout(()=>{
        window.location.href = './timer3.html'
    },5000)
})
payCancelBtn.addEventListener('click',()=>{
    clearTimeout(payMsgOut);
    console.log('결제취소')
})