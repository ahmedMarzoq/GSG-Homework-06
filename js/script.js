let mSeconds = 0,  seconds = 0,  minutes = 0;
let timerFlag;
let startStopBtn = true;
const startbtn = document.getElementById('timer-start-btn');
const resetbtn = document.getElementById('timer-reset-btn');
const timerView = document.querySelector('p');

startbtn.addEventListener('click', () => {
    // console.log('😂😁');
    
    if (startStopBtn) {
            timerFlag = setInterval(() => {
                mSeconds++;
                if(mSeconds == 100) {
                    mSeconds = 0;
                    seconds++;
                }
                if(seconds == 60) {
                    seconds = 0;
                    minutes++;
                }
                timerView.textContent =(minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds) + ":" + (mSeconds < 10 ? "0" + mSeconds : mSeconds);
            }, 10);        
        startbtn.textContent = 'STOP';  
        startStopBtn = false;
    }else{
        startbtn.textContent = 'START';  
        startStopBtn = true;
        clearInterval(timerFlag);
        timerFlag = false;
    }
});

resetbtn.addEventListener('click', () => {
    // console.log('😂😁');
    clearInterval(timerFlag);
    timerFlag = false;
    mSeconds = 0;
    seconds = 0;
    minutes = 0;
    timerView.textContent = '00:00:00';

    //start -- stop -- btn
    startbtn.textContent = 'START';  
    startStopBtn = true;
    clearInterval(timerFlag);
    timerFlag = false;
});