//11. 상품 옵션 선택시 색상 선택 후(클릭(x) 변경(o)) 사이즈 선택 가능, 색상 미선택시 사이즈
//색상, 사이즈 select 변수 선언
const colorSelect = document.querySelector('select[name=color]');
const sizeSelect = document.querySelector('select[name=size]');
console.log(colorSelect, sizeSelect);
sizeSelect.disabled = true;
//색상 select를 변경(change)했을 때 이벤트
colorSelect.addEventListener('change', changeFunc)
function changeFunc(){
    sizeSelect.disabled = false;
}