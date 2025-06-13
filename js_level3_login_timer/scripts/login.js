//활동 없을 시 5초후 자동로그아웃 알고리즘
let userLogin = true; //사용자의 로그인 상태(참, 거짓)
let logoutTime = 5000; //5초(5000ms)
// 1.사용자가 로그인한 상태라면 자동로그아웃 알고리즘을 시작
let logoutInterval;
if(userLogin == true){logoutFunc()}
function logoutFunc(){
    clearInterval(logoutInterval);//clearInterval은 이전에 실행된 변수를 멈추는 역할이기 때문에 선언하는 변수명이 해당 clearInterval보다 아래있으면 오류가 남, 따라서 선언하는 변수명 자체를 위에 선언을 하여 오류를 해결
        logoutInterval = setTimeout(()=>{
        console.log('활동없음. 자동로그아웃 합니다.')
        window.location.href = './index.html'
    },logoutTime)
}
//사용자의 활동감지 이벤트(마우스이동, 키보드조작, 마우스클릭)
document.addEventListener('mousemove', logoutFunc)
document.addEventListener('keydown', logoutFunc)
document.addEventListener('click', logoutFunc)