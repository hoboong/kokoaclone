const MAIN_CHAT = document.querySelector(".main-chat"),
    INPUT = document.querySelector("input");

const MESSAGES_LS = "messages"

function loadMessages(){
    const message = localStorage.getItem(MESSAGES_LS);
    if(message !== null) {

    }
}

function saveMessage(text) {
    
}

function handleSubmit() {
    event.preventDefault();
    const currentValue = INPUT.value;
    paintMessage(currentValue);
}

function paintMessage(text){
    console.log(text);
}


function init() {
    loadMessages();
    MAIN_CHAT.addEventListener("submit", handleSubmit);
}


init();