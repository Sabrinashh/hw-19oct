let seconds = document.querySelector("#seconds");
       seconds.addEventListener('click',e=>{
            e.preventDefault();
        })
let start = document.getElementById('start');
 start.addEventListener('onclick', e=>{
int = setInterval(()=>{
 second++;
 seconds.innerText = second;
},1000)
})
let second = 0;
let int = setInterval(()=>{
second++;
seconds.innerText = second;
},1000)
let btnstop = document.getElementById('stop');
btnstop.onclick = function() {
    clearInterval(int);
}
let btnreset = document.getElementById('reset');
btnreset.onclick = function() {
    clearInterval(int);
     second = "00";
     seconds.innerHTML = second;
 }