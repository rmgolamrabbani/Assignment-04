let interviewList = [];
let rejectList = [];
let currentStatus = 'all-filter-btn';

// DOM Elements
let total = document.getElementById('total');
const interviewCountDisplay = document.getElementById('interviewCaount'); 
const rejectCountDisplay = document.getElementById('rejectCount');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectFilterBtn = document.getElementById('reject-filter-btn');

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filtered-section');
let totalJob = document.getElementById('totalJob');

// Calculation Function

function updateUI() {
    const totalCards = allCardSection.querySelectorAll('.card').length;
    if(total) total.innerText = totalCards;
    if(totalJob) totalJob.innerText = totalCards;
    
    interviewCountDisplay.innerText = interviewList.length;
    rejectCountDisplay.innerText = rejectList.length;
}

// Step-1: Filter Toggle

function toggleStyle(id) {
    [allFilterBtn, interviewFilterBtn, rejectFilterBtn].forEach(btn => {
        btn.classList.add('bg-white', 'text-black');
        btn.classList.remove('bg-blue-500', 'text-white');
    });

    const selected = document.getElementById(id);
    currentStatus = id;

    selected.classList.add('bg-blue-500', 'text-white');
    selected.classList.remove('bg-white', 'text-black');

    if (id === 'interview-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview();
        if (id === 'interview-filter-btn'){

        }
    } else if (id === 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    } else if (id === 'reject-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderReject();
    }
}

// Step-2: Main Event Delegation
mainContainer.addEventListener('click', function(event) {
    const target = event.target;

    // Interview Button Logic

    if (target.classList.contains('interview-btn')) {
        const parenNode = target.closest('.card');
        const jobName = parenNode.querySelector('.jobName').innerText;
        
        const cardInfo = { 
            jobName: jobName,
            jobPost: parenNode.querySelector('.job-post').innerText,
            typeSalary: parenNode.querySelector('.type-salary').innerText,
            stat: 'Interview',
            description: parenNode.querySelector('.description').innerText
        };

        const jobExist = interviewList.find(item => item.jobName === jobName);
        if (!jobExist) {
            interviewList.push(cardInfo);
        }

        // Remove from reject list if it was there
        rejectList = rejectList.filter(item => item.jobName !== jobName);
        
        parenNode.querySelector('.stat').innerText = 'Interview';
        updateUI();

        if (currentStatus === 'reject-filter-btn') renderReject();
    }

    // Reject Button Logic
    else if (target.classList.contains('reject-btn')) {
        const parenNode = target.closest('.card');
        const jobName = parenNode.querySelector('.jobName').innerText;

        const cardInfo = { 
            jobName: jobName,
            jobPost: parenNode.querySelector('.job-post').innerText,
            typeSalary: parenNode.querySelector('.type-salary').innerText,
            stat: 'Rejected',
            description: parenNode.querySelector('.description').innerText
        };

        const rejectExist = rejectList.find(item => item.jobName === jobName);
        if (!rejectExist) {
            rejectList.push(cardInfo);
        }

        // Remove from interview list if it was there
        interviewList = interviewList.filter(item => item.jobName !== jobName);

        parenNode.querySelector('.stat').innerText = 'Rejected';
        updateUI();
        if (currentStatus === 'interview-filter-btn') renderInterview();
    }

    // Delete Button Logic
    else if (target.classList.contains('btn-delete')) {
        const parentNode = target.closest('.card');
        const jobName = parentNode.querySelector('.jobName').innerText;

        parentNode.remove();
        interviewList = interviewList.filter(item => item.jobName !== jobName);
        rejectList = rejectList.filter(item => item.jobName !== jobName);

        if (currentStatus === 'interview-filter-btn') renderInterview();
        if (currentStatus === 'reject-filter-btn') renderReject();
        updateUI();
    }
});

// Step-3: Render Functions

function renderInterview() {
    filterSection.innerHTML = '';
    interviewList.forEach(item => {
        filterSection.appendChild(createCardHTML(item));
    });


    // no job condition
    if (interviewList.length === 0) {
        filterSection.innerHTML = `
            <div class="card  border py-15 my-7 flex items-center  bg-gray-50 ">
                
            <div class="text-center">
                <img class="w-1xl pl-25" src="/images/jobs.png" alt="">
                <p class="text-2xl text-slate-800 font-semibold">No jobs available</p>
                <p>Check back soon for new job opportunities</p>
            </div>
                 
            </div>
        `;
        return;
    }

   
}   



function renderReject() {
    filterSection.innerHTML = '';
    rejectList.forEach(item => {
        filterSection.appendChild(createCardHTML(item));
    });

      // no job condition
    if (interviewList.length === 0) {
        filterSection.innerHTML = `
            <div class="card  border py-15 my-7 flex items-center  bg-gray-50 ">
                
            <div class="text-center">
                <img class="w-1xl pl-25" src="/images/jobs.png" alt="">
                <p class="text-2xl text-slate-800 font-semibold">No jobs available</p>
                <p>Check back soon for new job opportunities</p>
            </div>
                 
            </div>
        `;
        return;
    }

}

// Helper to prevent code duplication in renders
function createCardHTML(data) {
    let div = document.createElement('div');
    div.className = 'card flex-row justify-between border p-8 my-6';
    div.innerHTML = `
        <div class="space-y-3">
            <div>
                <p class="jobName text-2xl font-semibold">${data.jobName}</p>
                <p class="job-post opacity-50">${data.jobPost}</p>
            </div>
            <p class="type-salary opacity-50">${data.typeSalary}</p>
            <div>
                <p class="stat bg-gray-300 w-fit py-1 px-2 ">${data.stat}</p>
                <p class="description">${data.description}</p>
            </div>
            <div class="flex gap-5">
                <button class="interview-btn px-4 py-2 border text-green-500 ">Interview</button>
                <button class="reject-btn border text-red-500 px-4 py-2">Rejected</button>
            </div>
        </div>
        <div>
            <button class="btn-delete border text-red-600 px-4 py-2">Delete</button>
        </div>`;
    return div;
}


updateUI();

