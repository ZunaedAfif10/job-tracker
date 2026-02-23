let interviewList = [];
let rejectList = [];

let totalCount = document.getElementById('total');
let interviewCount = document.getElementById('interview-count');
let rejectCount = document.getElementById('reject-count');

const allCard = document.getElementById('all-cards');



function calculate(){
    totalCount.innerText = allCard.children.length;
    interviewCount.innerText = interviewList.length;
    rejectCount.innerText = rejectList.length;
}

calculate();

const allBtn = document.getElementById('all-btn');
const interviewBtn = document.getElementById('interview-btn');
const rejectBtn = document.getElementById('reject-btn');

const btnSec = document.getElementById('btn-section');
btnSec.addEventListener('click',function(event){

        if(event.target.id === 'btn-section')
        {
            return;
        }
        interviewBtn.classList.remove("bg-primary","text-white");
        rejectBtn.classList.remove("bg-primary","text-white");
        allBtn.classList.remove("bg-primary","text-white");

        event.target.classList.remove("text-gray-500","bg-white")
        event.target.classList.add("text-white","bg-primary");
})

const mainContain = document.getElementById('mainContainer');
mainContain.addEventListener('click',function(event){
    const parNode = event.target.parentNode.parentNode;

    const company = parNode.querySelector('.company').innerText;    
    const skill = parNode.querySelector('.skill').innerText;
    const payment = parNode.querySelector('.payment').innerText;    
    const st = parNode.querySelector('.st').innerText;
    const describe = parNode.querySelector('.describe').innerText;    

    const cardInfo = {
        company,
        skill,
        payment,
        st,
        describe
    }

    console.log(cardInfo);
})