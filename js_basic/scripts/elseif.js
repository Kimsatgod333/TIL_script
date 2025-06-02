const aniImg = document.querySelector('main > img');
const upBtn = document.querySelector('.control .up')
const leftBtn = document.querySelector('.control .left')
const downBtn = document.querySelector('.control .down')
const rightBtn = document.querySelector('.control .right')
const inputMove = document.querySelector('.io input')
let currentY = 0; //이미지 y 초기좌표
let currentX = 0;//x좌표 초기값
//aniImg.style.transform = 'translate(10px, 10px)'
console.log(upBtn, leftBtn, rightBtn, downBtn, inputMove);
downBtn.addEventListener('click',downFunc)
upBtn.addEventListener('click',upFunc)
leftBtn.addEventListener('click',leftFunc)
rightBtn.addEventListener('click',rightFunc);
function downFunc(){
    currentY += 20;
    return aniImg.style.transform = `translate(${currentX}px, ${currentY}px)`
}
function upFunc(){
    currentY -= 20;
    return aniImg.style.transform = `translate(${currentX}px, ${currentY}px`
}
function leftFunc(){
    currentX -= 20;
    return aniImg.style.transform = `translate(${currentX}px, ${currentY}px)`
}
function rightFunc(){
    currentX += 20;
    return aniImg.style.transform = `translate(${currentX}px, ${currentY}px)`
}
//input 입력창에 허용키를 입력하고 Enter를 누르면 캐릭터가 이동하는 알고리즘
//허용키 : 왼쪽, 오른쪽, 위, 아래
inputMove.addEventListener('keydown',function(e){
    if(e.key === 'Enter'){
        //왼쪽 입력 후 Enter 실행 시 이미지가 왼쪽 20px 이동
        if(inputMove.value == '왼쪽'){
            currentX -= 20;
            inputMoveFunc()
        }else if(inputMove.value == '오른쪽'){//조건 1이 거짓일때
            currentX += 20;
            inputMoveFunc()
        }
        else if(inputMove.value == '위'){//조건 1,2 이 거짓일때
            currentY -= 20;
            inputMoveFunc()
        }
        else if(inputMove.value == '아래'){//조건 1, 2, 3이 거짓일때
            currentY += 20;
            inputMoveFunc()
        }
        else{//모든 조건 이 거짓일때
            inputMove.value = '';
        }
    }
})
function inputMoveFunc(){
    inputMove.value = '';
    return aniImg.style.transform = `translate(${currentX}px, ${currentY}px)`
}