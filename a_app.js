const alarmset=document.getElementById("alarmsets");

alarmset.addEventListener('click',setalarm);

function ringalrm(){
    var al= new Audio("http://www.ufoseries.com/soundEffects/hqAlarmBell.mp3");
    al.play();
}

function setalarm(){
    console.log("Setting the alarm!");
    const alarms=document.getElementById("time");
    timeset=new Date(alarms.value);
    console.log(`Set alarm at ${timeset}...`);
    timenow=new Date();
    let alrmtime=(timeset-timenow);
    console.log(`rings at ${alrmtime}`);
    if(alrmtime>=0)
    {
        setTimeout(()=>{
            console.log("Ringing....");
            ringalrm();
        },alrmtime);        
    }
    
}