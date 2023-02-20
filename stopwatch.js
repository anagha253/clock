const startbtn=document.getElementById("start");
const pausebtn=document.getElementById("pause");
const resetbtn=document.getElementById("reset");
const displ=document.getElementById("watch");

let starttime=0;
let currtime=0;
let elaspedtime=0;
let paused=true;
let intervalId;
let hr=0;
let min=0;
let sec=0;

startbtn.addEventListener("click",() => {
    if(paused){
        paused=false;
        starttime=Date.now()-elaspedtime;
        intervalId=setInterval(updatetime, 1000);
    }
});
pausebtn.addEventListener("click",() => {
    if(!paused){
        paused=true;
        elaspedtime=Date.now()- starttime;
        clearInterval(intervalId); 
    }
});
resetbtn.addEventListener("click",() => {
    paused=true;
    clearInterval(intervalId);
    starttime=0;
    elaspedtime=0;
    currtime=0;
    hr=0;
    min=0;
    sec=0;
    displ.textContent="00:00:00";
});

function updatetime(){
    elaspedtime=Date.now()-starttime;

    sec=Math.floor((elaspedtime/1000)%60);
    min=Math.floor((elaspedtime/1000 *60)%60);
    hr=Math.floor((elaspedtime/1000 *60 *60)%60);

    sec=pad(sec);
    min=pad(min);
    hr=pad(hr);

    displ.textContent = `${hr}:${min}:${sec}`;

    function pad(unit)
    {
        return (("0"+unit).length >2? unit:"0"+unit);
    }

}