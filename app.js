/// to do list
// store the user input

var userInput=document.getElementById('user__input')
console.log(userInput)
// store the submit button
var submit=document.getElementById('butt')
console.log(submit)
// adding an event listener
submit.addEventListener('click',submitData)


//create the submit function
function submitData(){
    var msg=userInput.value
    event.preventDefault();
    console.log(msg)
    var msgCont=document.getElementById("msg__cont");
    // msgCont.textContent= msg;
    var item=document.createElement('div');
    if(msg !== ""){
        item.textContent=msg;
        item.classList.add('item__ok');
        msgCont.appendChild(item);
    }else if(msg === ""){
        var error=document.createElement('div');
        error.textContent= "Please Write Something To Be Added";
        error.classList.add("item__err");
        var errorCont=document.getElementById('err__cont');
        errorCont.appendChild(error);

    }
    

}