var indiatime= function() {
    document.getElementById("India").innerHTML=new Date().toLocaleString("en-US",{timeZone:'Asia/kolkata',
    timeStyle:"long",hourCycle:"h24"});
}
indiatime();
setInterval(indiatime,1000);

var Londontime= function() {
    document.getElementById("London").innerHTML=new Date().toLocaleString("en-US",{timeZone:'Europe/London',
    timeStyle:"long",hourCycle:"h24"});
}
Londontime();
setInterval(Londontime,1000);