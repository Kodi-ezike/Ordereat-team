//variables for the team buttons
const all = document.getElementById('all');
const finance = document.getElementById('finance');
const marketing = document.getElementById('marketing');
const content = document.getElementById('content');
const development = document.getElementById('development');

//variables for the team sections
const allTeams = document.getElementById('all-teams');
const financeTeam = document.getElementById('finance-team');
const marketingTeam = document.getElementById('marketing-team');
const contentTeam = document.getElementById('content-team');
const developmentTeam = document.getElementById('development-team');

all.addEventListener('click', ()=>{
    allTeams.style.display ='flex';
    financeTeam.style.display = 'none';
    marketingTeam.style.display = 'none';
    contentTeam.style.display = 'none';
    developmentTeam.style.display = 'none';
});

finance.addEventListener('click', ()=>{
    financeTeam.style.display = 'flex';
    allTeams.style.display = 'none';
    marketingTeam.style.display = 'none';
    contentTeam.style.display = 'none';
    developmentTeam.style.display = 'none';
});

marketing.addEventListener('click', ()=>{
    marketingTeam.style.display = 'flex';
    allTeams.style.display = 'none';
    financeTeam.style.display = 'none';
    contentTeam.style.display = 'none';
    developmentTeam.style.display = 'none';
});

content.addEventListener('click', ()=>{
    contentTeam.style.display = 'flex';
    allTeams.style.display = 'none';
    financeTeam.style.display = 'none';
    marketingTeam.style.display = 'none';
    developmentTeam.style.display = 'none';
});

development.addEventListener('click', ()=>{
    developmentTeam.style.display = 'flex';
    allTeams.style.display = 'none';
    financeTeam.style.display = 'none';
    marketingTeam.style.display = 'none';
    contentTeam.style.display = 'none';
});