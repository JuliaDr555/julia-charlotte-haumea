// addFooter("h3")
const footer = document.createElement("footer");
//document.getElementById("body").appendChild(document.createElement("footer"));

const body = document.body;
body.appendChild(footer);


const today = new Date();
const thisYear = today.getFullYear();
const footer2 = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = "&copyYuliya Drits " + thisYear;

footer.appendChild(copyright);
//document.body.appendChild(footer);

const skills = ["JavaScript", "HTML", "CSS", "GitHub", "Git", "Microsoft Word", "Microsoft Excel", "Paint"]
const skillsSection = document.getElementById("skills");


const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");

    skill.innerText = skills[i];

    skillsList.appendChild(skill);
}

//Add events for the message form
const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log("Name:", usersName);
    console.log("Email", usersEmail);
    console.log("Message", usersMessage);


    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a>: <span>${usersMessage}</span>`;

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", function() {
        const entry = removeButton.parentNode;
        entry.remove();

 // Check if the message list is empty
        if (messageList.children.length === 0) {
            messageSection.style.display = "none";
        } else {
            messageSection.style.display = "block";
        }
    });

    
   newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

  // Clear the form fields after submission
    event.target.reset();

 // Check if the message list is empty after adding a new message
 if (messageList.children.length === 0) {
    messageSection.style.display = "none";
} else {
    messageSection.style.display = "block";
}
});