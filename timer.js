const hour= document.getElementById("hour");
const min= document.getElementById("minute");
const sec= document.getElementById("second");

const sets=document.getElementById("starts");
const resets= document.getElementById("ends");

const disp=document.getElementById("t1");

var interval=null;
var total=0;

function ringalrm(){
    var al= new Audio("http://www.ufoseries.com/soundEffects/hqAlarmBell.mp3");
    al.play();
}

totalVal= ()=>{
    total=Number(hour.value)*3600+ Number(min.value)*60+Number(sec.val);
}

Timer=()=>{
    totalVal();
    total--;
    if(total >=0)
    {
        var hr= Math.floor(total/3600);
        var m= Math.floor((total/60) -hr*60);
        var s=total - ((hr*3600)+(m*60));

        hour.value=hr;
        min.value=m;
        sec.value=s
    }
    else{
        //ringalrm();
        console.log("time over!");
        t1.innerText='Time Over!';
    }
}
resets.addEventListener('click',()=>{
    clearInterval(interval);
    hour.value=00; 
    min.value=00;
    sec.value=00;
});
sets.addEventListener("click",()=>{
    clearInterval(interval);
    interval=setInterval(Timer,1000);
    t1.innerText="Timer started";
    console.log("Timer start...");
 
});

