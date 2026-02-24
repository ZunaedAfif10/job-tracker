// list
let interviewList = [];
let rejectList = [];
let allList = [];



let stat = 'all-cards';

// button
let totalCount = document.getElementById('total');
let interviewCount = document.getElementById('interview-count');
let rejectCount = document.getElementById('reject-count');
let sidebar = document.getElementById('sidebar');

// console.log(allList);
let allCard = document.getElementById('all-cards');
allList = allCard.querySelectorAll('.company');


function cardDelete(company) {
    
    // console.log(company);
    for (card of allList) {
        // console.log(card);
        if (card.innerText === company) {
            prevNode = card.parentNode.parentNode.parentNode;
            // console.log(prevNode);
            prevNode.remove();
            break;
        }
    }
}



// calculating total
function calculate() {
    totalCount.innerText = allCard.children.length;
    interviewCount.innerText = interviewList.length;
    rejectCount.innerText = rejectList.length;
    sidebar.innerText = totalCount.innerText + ' jobs';
}

calculate();


// dynamic button
const allBtn = document.getElementById('all-btn');
const interviewBtn = document.getElementById('interview-btn');
const rejectBtn = document.getElementById('reject-btn');
const filterSec = document.getElementById('filter-section');

const noJob = document.getElementById('no-job');
const btnSec = document.getElementById('btn-section');
btnSec.addEventListener('click', function (event) {
    stat = event.target.id;
    // console.log(stat);
    if (event.target.id === 'btn-section') {
        return;
    }
    interviewBtn.classList.remove("bg-primary", "text-white");
    rejectBtn.classList.remove("bg-primary", "text-white");
    allBtn.classList.remove("bg-primary", "text-white");

    event.target.classList.remove("text-gray-500", "bg-white")
    event.target.classList.add("text-white", "bg-primary");

    if (event.target === interviewBtn) {
        filterSec.classList.remove('hidden');
        allCard.classList.add('hidden');
        sidebar.innerText = interviewCount.innerText + ' of ' + totalCount.innerText + ' jobs';
        if (interviewList.length === 0) {
            noJob.classList.remove('hidden');
        }
        else if (interviewList.length !== 0) {
            noJob.classList.add('hidden');
        }
        renderInterview();
    }
    else if (event.target === rejectBtn) {
        filterSec.classList.remove('hidden');
        allCard.classList.add('hidden');
        sidebar.innerText = rejectCount.innerText + ' of ' + totalCount.innerText + ' jobs';
        if (rejectList.length === 0) {
            noJob.classList.remove('hidden');
        }
        else if (rejectList.length !== 0) {
            noJob.classList.add('hidden');
        }
        renderReject();
    }
    else if (event.target === allBtn) {
        filterSec.classList.add('hidden');
        allCard.classList.remove('hidden');
        sidebar.innerText = totalCount.innerText + ' jobs';
    }

})


// filteredSection
const mainContain = document.getElementById('mainContainer');

mainContain.addEventListener('click', function (event) {
    // console.log(event.target.classList);
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

        parNode.querySelector('.st').innerText = 'INTERVIEW';
        parNode.querySelector('.st').className = 'st border-green-500 text-green-500 border-2 font-semibold py-2 px-3 rounded-md inline-block mb-2';
        const cardExist = interviewList.find(item => item.company === cardInfo.company);
        if (!cardExist) {
            interviewList.push(cardInfo);
        }
        rejectList = rejectList.filter(item => item.company != cardInfo.company);
        calculate();
        if (stat === 'reject-btn') {
            renderReject();
            if (rejectList.length === 0) {
                noJob.classList.remove('hidden');
            }
            else if (rejectList.length !== 0) {
                noJob.classList.add('hidden');
            }
            sidebar.innerText = rejectCount.innerText + ' of ' + totalCount.innerText + ' jobs';
        }
        if (stat === 'interview-btn') {
            sidebar.innerText = interviewCount.innerText + ' of ' + totalCount.innerText + ' jobs';
        }

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

        parNode.querySelector('.st').innerText = 'REJECT';
        parNode.querySelector('.st').className = 'st border-red-500 text-red-500 border-2 font-semibold py-2 px-3 rounded-md inline-block mb-2';
        const cardExist = rejectList.find(item => item.company === cardInfo.company);
        if (!cardExist) {
            rejectList.push(cardInfo);
        }
        interviewList = interviewList.filter(item => item.company != cardInfo.company);
        calculate();
        if (stat === 'interview-btn') {
            renderInterview();
            if (interviewList.length === 0) {
                noJob.classList.remove('hidden');
            }
            else if (interviewList.length !== 0) {
                noJob.classList.add('hidden');
            }
            sidebar.innerText = interviewCount.innerText + ' of ' + totalCount.innerText + ' jobs';
        }
        if (stat === 'reject-btn') {
            sidebar.innerText = rejectCount.innerText + ' of ' + totalCount.innerText + ' jobs';
        }


    }
    else if (event.target.closest('.delete')) {
        // console.log(event.target.id);
        const parNode = event.target.parentNode.parentNode;

        const company = parNode.querySelector('.company').innerText;

        const cardInfo = {
            company
        }
        parNode.remove();

        interviewList = interviewList.filter(item => item.company != cardInfo.company);
        rejectList = rejectList.filter(item => item.company != cardInfo.company);

        calculate();
        if (stat === 'reject-btn') {
            renderReject();
            cardDelete(company);
            calculate();
            if (rejectList.length === 0) {
                noJob.classList.remove('hidden');
            }
            else if (rejectList.length !== 0) {
                noJob.classList.add('hidden');
            }
            sidebar.innerText = rejectCount.innerText + ' of ' + totalCount.innerText + ' jobs';
        }

        if (stat === 'interview-btn') {
            renderInterview();
            cardDelete(company);
            calculate();
            if (interviewList.length === 0) {
                noJob.classList.remove('hidden');
            }
            else if (interviewList.length !== 0) {
                noJob.classList.add('hidden');
            }
            sidebar.innerText = interviewCount.innerText + ' of ' + totalCount.innerText + ' jobs';
        }




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
                        <p class="skill text-gray-500">${card.skill}</p>
                    </div>
                    <div>
                        <h2 class="payment text-gray-500">${card.payment}</h2>
                    </div>
                    <div>
                        <h2 class="st mb-2 border-green-500 text-green-500 border-2 font-semibold py-2 px-3 rounded-md inline-block ">${card.st}</h2>
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
                    <button class="btn delete border-2 border-gray-100 px-[10px] rounded-full"><i
                            class="fa-regular pointer-events-none fa-trash-can text-gray-400"></i></button>
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
                        <p class="skill text-gray-500">${card.skill}</p>
                    </div>
                    <div>
                        <h2 class="payment text-gray-500">${card.payment}</h2>
                    </div>
                    <div>
                        <h2 class="st mb-2 border-red-500 text-red-500 border-2 font-semibold py-2 px-3 rounded-md inline-block ">${card.st}</h2>
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
                    <button class="btn delete border-2 border-gray-100 px-[10px] rounded-full"><i
                            class="fa-regular pointer-events-none fa-trash-can text-gray-400"></i></button>
                </div>
        `
        filterSec.appendChild(div);
    }
}