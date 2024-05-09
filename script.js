const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
    // const storedNotes = localStorage.getItem("notes");
    // if (storedNotes && storedNotes.trim() !== "") {
    //     notesContainer.innerHTML = storedNotes;
    // }
    notesContainer.innerHTML=localStorage.getItem("notes")
}

showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    
    let inputBox = document.createElement("div");
    let img = document.createElement("img");

    let issueDateInput = document.createElement("input");
    let deadlineInput = document.createElement("input");

    let issuetext = document.createElement("p");
    let deadlinetext = document.createElement("p");

    let status = document.createElement("div");
    // status=document.querySelector('.status')
    status.addEventListener('click', function(){
        status.style.backgroundColor='green';
        // alert("hello")
        console.log("Button clicked")
    });
    status.addEventListener('mouseover', function(){
        // status.style.backgroundColor='yellow';
        let statusmessage=document.createElement('div');
        statusmessage.className="status-message";
        statusmessage.innerHTML='<p>If Task is completed then mark it</p>';
        status.appendChild(statusmessage);

        status.addEventListener('mouseout', function(){
            statusmessage.remove(); // Remove statusmessage when mouse moves away
        });
    });
    // status.div.innerHTML='<i class="fa-solid fa-check"></i>'
    issuetext.className="issue-text";
    deadlinetext.className="deadline-text";
    status.className="status";

    issuetext.innerText="Issue-Date - ";
   deadlinetext.innerText="| Deadline-Date - ";

    
    issueDateInput.type = "date";
    issueDateInput.className = "issue-date";

    deadlineInput.type = "date";
    deadlineInput.className = "deadline";

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "Images/delete.png";
    inputBox.appendChild(img);
    inputBox.appendChild(issueDateInput);
    inputBox.appendChild(deadlineInput);
    inputBox.appendChild(issuetext);
    inputBox.appendChild(deadlinetext);
    inputBox.appendChild(status);
    notesContainer.appendChild(inputBox);
    // updateStorage();
    
});

notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});


notesContainer.addEventListener("keyup", () => {
    updateStorage();
});

document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})




const clock=document.querySelector(".clock");

setInterval(function()
{
    let date=new Date();

    clock.innerHTML=date.toLocaleTimeString();
})