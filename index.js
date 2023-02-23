const button = document.getElementById("button");
const email = document.getElementById("email");
const errormessage = document.getElementById("error-messages");

function validateInput(){
    if (email.value.trim()===""){
        let parent = email.parentElement
       let errors = document.querySelector(".error-message");
       parent.classList.add("error");
       errors.style.visibility="visible";
    }
    else if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        let parent = email.parentElement
        let errors = document.querySelector(".error-message");
        parent.classList.add("error");
        errors.style.visibility="visible";
        errors.innerHTML="please provide a valid email address";
        return false;
    }
    else {
        let parent = email.parentElement
        let errors = document.querySelector(".error-message");
        errors.style.visibility="hidden";
        parent.classList.remove("error");
        alert("A reminder would be sent to your email address");
    }
}









document.querySelector("button").addEventListener("click", (event)=> {
    event.preventDefault();
    validateInput();
    
})