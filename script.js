let hours, seconds, minutes = 0;

function hour(){
    if(minutes > 60){
        hours++;
        minutes = 0;
    }

}

function second(){
    seconds++

    if(seconds == 60){
        minutes++;
        seconds = 0;
    }
}