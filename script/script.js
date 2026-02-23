// list
let interviewList = [];
let rejectList = [];


// button
let totalCount = document.getElementById('total');
let interviewCount = document.getElementById('interview-count');
let rejectCount = document.getElementById('reject-count');

const allCard = document.getElementById('all-cards');


// calculating total
function calculate() {
    totalCount.innerText = allCard.children.length;
    interviewCount.innerText = interviewList.length;
    rejectCount.innerText = rejectList.length;
}

calculate();

// dynamic button
const allBtn = document.getElementById('all-btn');
const interviewBtn = document.getElementById('interview-btn');
const rejectBtn = document.getElementById('reject-btn');
const filterSec = document.getElementById('filter-section');

const btnSec = document.getElementById('btn-section');
btnSec.addEventListener('click', function (event) {

    if (event.target.id === 'btn-section') {
        return;
    }
    interviewBtn.classList.remove("bg-primary", "text-white");
    rejectBtn.classList.remove("bg-primary", "text-white");
    allBtn.classList.remove("bg-primary", "text-white");

    event.target.classList.remove("text-gray-500", "bg-white")
    event.target.classList.add("text-white", "bg-primary");

    if(event.target === interviewBtn)
    {
        filterSec.classList.remove('hidden');
        allCard.classList.add('hidden');
    }
    else if(event.target === allBtn)
    {
        filterSec.classList.add('hidden');
        allCard.classList.remove('hidden');
    }

})


// filteredSection
const mainContain = document.getElementById('mainContainer');

mainContain.addEventListener('click', function (event) {
    
    if (event.target.classList.contains('interview-main')) {
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
            st: 'INTERVIEW',
            describe
        }
        
        parNode.querySelector('.st').innerText ='INTERVIEW';
        const cardExist = interviewList.find(item => item.company === cardInfo.company);
        if (!cardExist) {
            interviewList.push(cardInfo);
        }
        calculate();
        renderInterview();
    }
    else if (event.target.classList.contains('reject-main')) {
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
            st: 'REJECT',
            describe
        }
        
        parNode.querySelector('.st').innerText ='REJECT';
        const cardExist = rejectList.find(item => item.company === cardInfo.company);
        if (!cardExist) {
            rejectList.push(cardInfo);
        }
        calculate();
        renderReject();
    }
})

function renderInterview() {
    filterSec.innerHTML = ""

    for (let card of interviewList) {
        let div = document.createElement('div');
        div.className = 'bg-white p-6 rounded-lg flex justify-between';
        div.innerHTML = `
            <div class="space-y-5">
                    <div>
                        <h2 class="company font-semibold text-xl text-[#002C5C]">${card.company}</h2>
                        <p class="skill text-gray-500">${card.skill}}</p>
                    </div>
                    <div>
                        <h2 class="payment text-gray-500">${card.payment}</h2>
                    </div>
                    <div>
                        <h2 class="st mb-2 bg-[#2e08ae1b] py-2 px-3 rounded-md inline-block ">${card.st}</h2>
                        <p class="describe">${card.describe}</p>
                    </div>
                    <div>
                        <button
                            class="interview-main btn bg-white font-semibold mr-2 rounded-md border-green-500 text-green-500 border-2 py-2 px-3">INTERVIEW</button>
                        <button
                            class="reject-main btn bg-white font-semibold rounded-md border-2 border-red-500 text-red-500 py-2 px-3">REJECTED</button>
                    </div>
                </div>
                <div>
                    <button class="btn border-2 border-gray-100 px-[10px] rounded-full"><i
                            class="fa-regular fa-trash-can text-gray-400"></i></button>
                </div>
        `
        filterSec.appendChild(div);
    }
}
function renderReject() {
    filterSec.innerHTML = ""

    for (let card of rejectList) {
        let div = document.createElement('div');
        div.className = 'bg-white p-6 rounded-lg flex justify-between';
        div.innerHTML = `
            <div class="space-y-5">
                    <div>
                        <h2 class="company font-semibold text-xl text-[#002C5C]">${card.company}</h2>
                        <p class="skill text-gray-500">${card.skill}}</p>
                    </div>
                    <div>
                        <h2 class="payment text-gray-500">${card.payment}</h2>
                    </div>
                    <div>
                        <h2 class="st mb-2 bg-[#2e08ae1b] py-2 px-3 rounded-md inline-block ">${card.st}</h2>
                        <p class="describe">${card.describe}</p>
                    </div>
                    <div>
                        <button
                            class="interview-main btn bg-white font-semibold mr-2 rounded-md border-green-500 text-green-500 border-2 py-2 px-3">INTERVIEW</button>
                        <button
                            class="reject-main btn bg-white font-semibold rounded-md border-2 border-red-500 text-red-500 py-2 px-3">REJECTED</button>
                    </div>
                </div>
                <div>
                    <button class="btn border-2 border-gray-100 px-[10px] rounded-full"><i
                            class="fa-regular fa-trash-can text-gray-400"></i></button>
                </div>
        `
        filterSec.appendChild(div);
    }
}