let interviewList = [];
let rejectList = [];
let currentStatus = 'all-filter-btn';




const total = document.getElementById('total');
const interviewCount = document.getElementById('interviewCaount');
const rejectCount = document.getElementById('rejectCount');


const allFilterBtn = document.getElementById('all-filter-btn')
const interviewFilterBtn = document.getElementById('interview-filter-btn')
const rejectFilterBtn = document.getElementById('reject-filter-btn')


const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filtered-section')

let totalJob = document.getElementById('totalJob')

// calculation

function calculateCaunt() {
    total.innerText = allCardSection.querySelectorAll('.card').length;
    totalJob.innerText = allCardSection.querySelectorAll('.card').length;
    interviewCount.innerText = interviewList.length;
    rejectCount.innerText = rejectList.length;
}


// step-1  filter-button-toggole

function toggleStyle(id) {

    allFilterBtn.classList.add('bg-white', 'text-black')
    interviewFilterBtn.classList.add('bg-white', 'text-black')
    rejectFilterBtn.classList.add('bg-white', 'text-black')

    // if any button has black then remove
    allFilterBtn.classList.remove('bg-blue-500', 'text-white')
    interviewFilterBtn.classList.remove('bg-blue-500', 'text-white')
    rejectFilterBtn.classList.remove('bg-blue-500', 'text-white')


    const selected = document.getElementById(id)
    // console.log(selected);

    currentStatus = id
    console.log(currentStatus);
    // console.log(selected);

    selected.classList.add('bg-blue-500', 'text-white')
    selected.classList.remove('bg-white', 'text-black')

    // step-4
    if (id == 'interview-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderInterview()
    } else if (id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')
    } else if (id == 'reject-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderReject()
    }

}

// step-2 event 

mainContainer.addEventListener('click', function (event) {
    const target = event.target;

    if (target.classList.contains('interview-btn')) {
        handleStatusChange(target, 'interview');
    } else if (target.classList.contains('reject-btn')) {
        handleStatusChange(target, 'reject');
    } else if (target.classList.contains('btn-delete')) {
        const card = target.closest('.card');
        const jobTitle = card.querySelector('.jobName').innerText;
        card.remove();
        
        
        interviewList = interviewList.filter(item => item.jobName !== jobTitle);
        rejectList = rejectList.filter(item => item.jobName !== jobTitle);
        
        if (currentStatus !== 'all-filter-btn') {
            currentStatus === 'interview-filter-btn' ? renderList(interviewList) : renderList(rejectList);
        }
        calculateCaunt();
    }
});

// function handleStatusChange(target, status) {
//     const parentNode = target.closest('.card');
//     const jobInfo = {
//         jobName: parentNode.querySelector('.jobName').innerText,
//         jobPost: parentNode.querySelector('.job-post')?.innerText || parentNode.querySelector('.latinName')?.innerText,
//         typeSalary: parentNode.querySelector('.type-salary')?.innerText || parentNode.querySelector('.light')?.innerText,
//         description: parentNode.querySelector('.description')?.innerText || parentNode.querySelector('.notes')?.innerText,
//         stat: status === 'interview' ? 'Interview' : 'Rejected'
//     };

//     if (status === 'interview') {
//         if (!interviewList.find(i => i.jobName === jobInfo.jobName)) {
//             interviewList.push(jobInfo);
//             rejectList = rejectList.filter(i => i.jobName !== jobInfo.jobName);
//         }
//     } else {
//         if (!rejectList.find(r => r.jobName === jobInfo.jobName)) {
//             rejectList.push(jobInfo);
//             interviewList = interviewList.filter(i => i.jobName !== jobInfo.jobName);
//         }
//     }

//     calculateCaunt();
//     if (currentStatus !== 'all-filter-btn') {
//         currentStatus === 'interview-filter-btn' ? renderList(interviewList) : renderList(rejectList);
//     }
// }


// function renderInterview() {
//     filterSection.innerHTML = '';

//     for (let interview of interviewList) {
//         console.log(interview);

//         let div = document.createElement('div');
//         div.className = 'card flex-row justify-between border p-8 my-6';
//         div.innerHTML =
//             `

//                      <div class="space-y-3">

//             <div>
//                 <p class="jobName text-2xl font-semibold">Mobile First Corp</p>
//                 <p class="job-post opacity-50">React Native Developer</p>
//             </div>

//                     <p class="type-salary opacity-50">Remote Full-time $130,000 - $175,000</p>

//             <div>
//                 <p class=" stat bg-gray-300 w-fit py-1 px-2 ">Not Applied</p>
//                 <p class="description">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
//             </div>



//             <div class="flex gap-5">
//                  <button class="interview-btn px-4 py-2 border text-green-500 ">Interview</button>
//                  <button class="reject-btn border text-red-500 px-4 py-2">Rejected</button>
//             </div>

// </div>


//             <div>
//                 <button class="btn-delete border text-red-600 px-4 py-2">Delete</button>
//             </div>

// `

//         filterSection.appendChild(div);


//     }


// }


// function renderReject() {
//     // make the filterSection empty every time
//     filterSection.innerHTML = ''
//     // crating innerHtml
//     for (let reject of rejectList) {

//         let div = document.createElement('div');
//         div.className = 'card flex-row justify-between border p-8 my-6'
//         div.innerHTML = `
//                      <div class="space-y-3">

//                  <div>
//                      <p class="jobName text-2xl font-semibold">Mobile First Corp</p>
//                      <p class="job-post opacity-50">React Native Developer</p>
//                  </div>

//                     <p class="type-salary opacity-50">Remote Full-time $130,000 - $175,000</p>

//                      <div>
//                         <p class=" stat bg-gray-300 w-fit py-1 px-2 ">Not Applied</p>
//                         <p class="description">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
//                     </div>



//                     <div class="flex gap-5">
//                       <button class="interview-btn px-4 py-2 border text-green-500 ">Interview</button>
//                      <button class="reject-btn border text-red-500 px-4 py-2">Rejected</button>
//                     </div>
//         </div>


//                 <div>
//                      <button class="btn-delete border text-red-600 px-4 py-2">Delete</button>
//                 </div>


//  `

//         filterSection.appendChild(div)


//     }
// }

function renderList(list) {
    filterSection.innerHTML = '';
    list.forEach(item => {
        const div = document.createElement('div');
        div.className = 'card flex-row justify-between border p-8 my-6';
        div.innerHTML = `
            <div class="space-y-3">
                <div>
                    <p class="jobName text-2xl font-semibold">${item.jobName}</p>
                    <p class="opacity-50">${item.jobPost}</p>
                </div>
                <p class="opacity-50">${item.typeSalary}</p>
                <div>
                    <p class="stat bg-gray-300 w-fit py-1 px-2">${item.stat}</p>
                    <p>${item.description}</p>
                </div>
                
                <div class="flex gap-5">
                        <button class="interview-btn px-4 py-2 border text-green-500 ">Interview</button>
                        <button class="reject-btn border text-red-500 px-4 py-2">Rejected</button>
                </div>

            </div>
            <div>
                <button class="btn-delete border text-red-600 px-4 py-2">Delete</button>
            </div>`;
        filterSection.appendChild(div);
    });
}

calculateCaunt();

