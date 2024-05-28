// addFooter("h3")
const footer = document.createElement("footer");
//document.getElementById("body").appendChild(document.createElement("footer"));

const body = document.body;
body.appendChild(footer);


const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement("p");
copyright.innerHTML = "&copy Yuliya Drits " + thisYear;

footer.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS", "GitHub", "Git", "Microsoft Word", "Microsoft Excel", "Paint"]
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");

    skill.innerText = skills[i];

    skillsList.appendChild(skill);
}

//Add events for the message form
const messageForm = document.querySelector('form[name="leave_message-form"]');

messageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log("Name:", usersName);
    console.log("Email", usersEmail);
    console.log("Message", usersMessage);


    const messageSection = document.getElementById("message-section");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a>: <span>${usersMessage}</span>`;

    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", function () {
        const entry = removeButton.parentNode;
        entry.remove();

        // Check if the message list is empty
        if (messageList.children.length === 0) {
            messageSection.style.display = "none";
            messageSection.style.justifyContent = "center";
        } else {
            messageSection.style.display = "flex";
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



//Creating my fetch
fetch('https://api.github.com/users/JuliaDr555/repos')
    .then((response) => {
        if (response.ok) {
            return response.text();
        } else {
            throw new Error("Failed to fetch repositories");
        }
    })
    .then((data) => {
        const repositories = JSON.parse(data);

        const projectSection = document.getElementById("projects")

        let projectList = document.createElement("ul");
        projectSection.appendChild(projectList);

        for (let repository of repositories) {

            let project = document.createElement("li");

            project.innerText = repository.name;

            projectList.appendChild(project);
        }
    })
    .catch((error) => {
        if (error instanceof SyntaxError) {
            console.error("Unparsable response from server");
        } else {
            console.error("Error fething data: ", error.message);
        }
    });