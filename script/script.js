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