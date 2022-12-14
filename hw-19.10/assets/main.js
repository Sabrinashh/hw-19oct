let addbtn = document.getElementById('todo');
addbtn.addEventListener('click',function(){
    let datetime = this.previousElementSibling;
    let task = datetime.previousElementSibling;
    datetime.style.borderColor = '#ced4da';
    task.style.borderColor = '#ced4da';
    if (task.value.trim().length > 0 && datetime.value.trim().length > 0) {
        let list = document.getElementById('list');
        let date = datetime.value.split('T')[0];
        let time = datetime.value.split('T')[1];
        list.innerHTML+=`<li class="list-group-item">
            <div class="row align-items-center">
                <p class="col-md-4 m-0">${task.value}</p>
                <p class="col-md-4 m-0">${date} | ${time}</p>
                <div class="col-md-4 row justify-content-between">
                    <button onclick="Done()" class="btn btn-success done-btn col-md-5">Done</button>
                    <button onclick="this.parentElement.parentElement.parentElement.remove()" class="btn btn-danger col-md-5">Delete</button>
                </div>
            </div>
        </li>`
        datetime.value = "";
        task.value="";
        checkAllItem();
    }
    else{
        datetime.style.borderColor = 'red';
        task.style.borderColor = 'red';
    }
})
function Done(){
    let btn=document.getElementsByClassName("done-btn");
    btn.parentElement.parentElement.parentElement.style.backgroundColor='lightgreen';

}

function checkAllItem() {
    let items = document.querySelectorAll(".list-group-item");
    for (const item of items) {
        let datetime = item.children[0].children[1].innerText.split('|');
        let result = changeColor(datetime[0],datetime[1])
        item.style = 'background-color:'+result+ '!important'
    }
}

setInterval(checkAllItem,1000);

function changeColor(taskDate, taskTime) {
    let dateObj = new Date();
    let date = dateObj.toLocaleDateString("az").trim();
    let time = dateObj.toLocaleTimeString().trim();
    taskDate = taskDate.trim();
    taskTime = taskTime.trim();
    if (date == taskDate) {
        return '#fff';
    }
    else{
        date.split('-')
    }
    return 'lightblue';
}