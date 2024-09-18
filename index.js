let start = document.getElementById("start");
let stop = document.getElementById("stop");
let c=0;
let timeobj;
start.addEventListener("click",function(){

    timeobj = setTimeout(function(){
        document.getElementById("heading").innerHTML = `Timer: ${c}`;
        c++;
    }, 1000)

})

stop.addEventListener("click",function(){
    clearTimeout(timeobj);
})