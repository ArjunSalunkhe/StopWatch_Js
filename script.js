let cur = document.querySelector(".cursor");

window.addEventListener("mousemove",(dets)=>{
    cur.style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    // console.log(dets.clientX,dets.clientY);
})


let start = document.querySelector("#start");
let stop_ = document.querySelector("#stop");
let reset = document.querySelector("#reset");

let count = 0;
let sec = 0;
let min = 0;
let hr = 0;

let timer = false;

start.addEventListener("click",()=>{
   timer = true;
   stopwatch();
})

stop_.addEventListener("click",()=>{
   timer = false;
})

reset.addEventListener("click",()=>{
   timer = false;
   count = 0;
    sec = 0;
    min = 0;
    hr = 0;
    document.querySelector("#hr").innerHTML = "00";
    document.querySelector("#min").innerHTML = "00";
    document.querySelector("#sec").innerHTML = "00";
    document.querySelector("#count").innerHTML ="00";

})

function stopwatch(){

    if(timer == true){
        count = count + 1;

        if(count == 100){
            sec = sec + 1;
            count = 0;
        }
        if(sec == 60){
            min = min + 1;
            sec = 0;
        }
        if(min == 60){
            hr = hr + 1;
            min = 0;
        }
        if(hr == 24){
            count = 0;
            sec = 0;
            min = 0;
            hr  =0;
        }
        hrstring = hr;
        minstring  = min;
        secstring = sec;
        countstring = count;
        
        if(hrstring<10){
            hrstring = "0" + hrstring;
        }
        if(minstring<10){
            minstring = "0" + minstring;
        }
        if(secstring<10){
            secstring = "0" + secstring;
        }
        if(countstring<10){
            countstring = "0" + countstring;
        }


        document.querySelector("#hr").innerHTML = hrstring;
        document.querySelector("#min").innerHTML = minstring;
        document.querySelector("#sec").innerHTML = secstring;
        document.querySelector("#count").innerHTML = countstring;
        
        setTimeout('stopwatch()',10);
    }
    

}

