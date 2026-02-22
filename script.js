
let interviewList = [];
let rejectList = [];





let total = document.getElementById('total');
let interviwCaount = document.getElementById('interviwCaount');
let rejectCount = document.getElementById('rejectCount');


const allFilterBtn = document.getElementById('all-filter-btn')
const interviwFilterBtn = document.getElementById('interviw-filter-btn')
const rejectFilterBtn = document.getElementById('reject-filter-btn')


const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');
// console.log(mainContainer);

function calculateCaunt (){
 total.innerText = allCardSection.children.length
 interviewCaount.innerText = interviewList.length
 rejectCount.innerText = rejectList.length

}
 
calculateCaunt()

function toggleStyle (id){
    
    allFilterBtn.classList.add('bg-white', 'text-black')
    interviwFilterBtn.classList.add('bg-white', 'text-black')
    rejectFilterBtn.classList.add('bg-white', 'text-black')

    // if any button has black then remove

    allFilterBtn.classList.remove('bg-blue-500', 'text-white')
    interviwFilterBtn.classList.remove('bg-blue-500', 'text-white')
    rejectFilterBtn.classList.remove('bg-blue-500', 'text-white')

    
    const selected = document.getElementById(id)
    // console.log(selected);

    selected.classList.add('bg-blue-500', 'text-white')
    selected.classList.remove('bg-white', 'text-black')


}


mainContainer.addEventListener('click' , function(event){

    const parenNode = event.target.parentNode.parentNode;

    const jobName = parenNode.querySelector('.jobName')
    const jobPost = parenNode.querySelector('.job-post').innerText;
    const typeSalary = parenNode.querySelector('.type-salary').innerText;
    const stat = parenNode.querySelector('.stat').innerText;
    const description = parenNode.querySelector('.description').innerText;

    const cardInfo = { 
        jobName,
        jobPost,
        typeSalary,
        stat,
        description

    }

    const interviewList = 



});






