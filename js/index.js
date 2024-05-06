// addFooter("h3")
//const footer = document.createElement('footer');
document.getElementById("body").appendChild(document.createElement('footer'));

const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = "&copyYuliya Drits " + thisYear;
footer.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS", "GitHub", "Git", "Microsoft Word", "Microsoft Excel", "Paint"]
const skillsSection = document.getElementById("skills");


const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");

    skill.innerText = skills[i];

    skillsList.appendChild(skill);
}