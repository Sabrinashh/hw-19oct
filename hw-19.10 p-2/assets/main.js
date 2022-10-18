let seconds = document.querySelector("#seconds");
let minute=document.querySelector("#min");
let start = document.getElementById('start');
 start.addEventListener('onclick', e=>{
    clearInterval(int);
})
let second = 00;
let min = 00;
let int = setInterval(startTimer,1000);

let btnstop = document.getElementById('stop');
btnstop.onclick = function() {
    clearInterval(int);
}

let btnreset = document.getElementById('reset');
btnreset.onclick = function() {
    clearInterval(int);
     second = "00";
     min="00"
     seconds.innerHTML = second;
    minute.innerHTML = min;
 }
  
 function startTimer () {
    second++; 
    
    if(second <= 9){
      seconds.innerHTML = "0" + second;
    }

    if (second > 9){
      seconds.innerHTML = second;
    } 

    if (second > 59) {
      min++;
      minute.innerHTML = "0" + min;
      second = 0;
      seconds.innerHTML = "0" + 0;
    }

    if (min > 9){
        minute.innerHTML = min;
    } 
  }
  
  

