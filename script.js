"use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 100;
let cronometer;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();


function start(){
    pause();
    cronometer = setInterval( () => { timer(); }, 10);
}

function pause(){
    clearInterval(cronometer);
}

function reset(){
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 100;

    document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    document.getElementById('millisecond').innerText = '000';
}

function timer(){
    if((millisecond += 10) == 1000){
        millisecond = 100;
        second++;
    }

    if(second == 60){
        second = 0;
        minute++;
    }

    if(minute == 60){
        minute = 0;
        hour++;
    }

    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerHTML = returnData(millisecond);
}

function returnData(input){
    return input >= 10 ? input : `0${input}`;
}