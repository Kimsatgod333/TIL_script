const birthdayFlower = [
    {
        month:1,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:2,
        flower:'제비꽃',
        content:'겸손, 양보',
    },{
        month:3,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:4,
        flower:'스위트피',
        content:'추억, 즐거움'
    },{
        month:5,
        flower:'은방울꽃',
        content:'희망, 섬세함'
    },{
        month:6,
        flower:'백합',
        content:'순결'
    },{
        month:7,
        flower:'미나리아재비',
        content:'아름다움, 인격'
    },{
        month:8,
        flower:'글라디올러스',
        content:'비밀, 상상, 견고함'
    },{
        month:9,
        flower:'물망초',
        content:'진실한 사랑'
    },{
        month:10,
        flower:'금잔화',
        content:'실망, 비애'
    },{
        month:11,
        flower:'국화',
        content:'성실, 진실'
    },{
        month:12,
        flower:'포인세티아',
        content:'축하, 감사'
    }
]
const mainBg = document.querySelector('main')
const birthdayYears = document.querySelector('input[name=years]')
const birthdayMonth = document.querySelector('input[name=month]')
const birthdayDays = document.querySelector('input[name=days]')
const flowerAnswer = document.querySelector('.flower_answer')
const answerBtn = document.querySelector('#answer_btn')
const flowerImg = document.querySelector('.flower_img')
console.log(birthdayMonth, flowerAnswer, answerBtn)
answerBtn.addEventListener('click', function(){
    yourFlower(birthdayMonth.value);
})
birthdayYears.addEventListener('click', dayMonth)
birthdayMonth.addEventListener('click', dayMonth)
birthdayDays.addEventListener('click', dayMonth)
birthdayYears.addEventListener('keydown', dayMonth)
birthdayMonth.addEventListener('keydown', dayMonth)
birthdayDays.addEventListener('keydown', dayMonth)
function yourFlower(num){
    flowerAnswer.style.opacity = '1'
    flowerImg.style.opacity = '1'
    flowerAnswer.innerHTML = `${birthdayFlower[num - 1].month}월 당신의 탄생화는 <em>${birthdayFlower[num - 1].flower}</em>입니다.<br>${birthdayFlower[num - 1].flower}의 꽃말은 <em>${birthdayFlower[num - 1].content}</em>입니다.`
    return flowerImg.style.background = `url(./images/bg${num}.jpg) no-repeat center / cover`
}
birthdayMonth.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        yourFlower(birthdayMonth.value)
    }
})
function dayMonth(){
    if(birthdayMonth.value > 12){
        birthdayMonth.value = 12;
    }
    if(birthdayMonth.value < 1){
        birthdayMonth.value = 1;
    }
    if(birthdayDays.value > 31){
        birthdayDays.value = 31;
    }
    if(birthdayDays.value < 1){
        birthdayDays.value = 1;
    }
    if(birthdayYears.value < 1){
        birthdayYears.value = 1;
    }
}
