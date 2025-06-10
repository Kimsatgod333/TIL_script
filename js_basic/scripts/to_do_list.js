//오늘의 할일 JS
//1.input에 텍스트를 입력하고 
//2. 등록버튼을 누를시 (클릭 이벤트 내에서 1번 입력값 인식)
// 3. 기존 li의 다음위치에 등록
// 위 알고리즘 3번 작업 시 주의 사항
// ul태그의 마지막 자식 위치(appendChild)로 li를 추가(문자열<li> 생성으로는 삽입할수는X, creatElement로 JS내에서 요소를 생성해야 가능) 
const toInput = document.querySelector('.to');
const toBtn = document.querySelector('#to_btn')
const ul = document.querySelector('ul');
console.log(toInput, toBtn, ul)
toBtn.addEventListener('click', ()=>{
    if(toInput.value == ''){
        alert('텍스트 입력 후 등록가능합니다.')
    }else{
        //console.log(toInput.value)
        //ul.appendChild("<li>ads</li>") <<문자열 삽입에러
        let li = document.createElement('li');
        li.innerHTML = `<span>${toInput.value}</span><button type="button" class="del_btn">X</button>`
        console.log(li);
        ul.appendChild(li);
        toInput.value = ''
        //등록된 할일 옆 X 클릭시 자신의 부모li 제거하기
        const close = document.querySelectorAll('.del_btn');
        for(let i of close){
            //console.log(i);//배열 형태가 아닌 객체형태로 축력되어 바로 사용가능한 형태인지 확인
            i.addEventListener('click', ()=>{
                i.parentNode.remove();
            })
        }
        const liSpan = document.querySelectorAll('li span');
        for(let i of liSpan){
            console.log(i);
            i.addEventListener('click', ()=>{
                i.parentNode.style.textDecoration = 'line-through'
            })
        }
    }//조건문 else 위치
})//toBtn 이벤트 종료