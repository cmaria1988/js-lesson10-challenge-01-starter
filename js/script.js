const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");

const learning = {};
learning.topic = "JS";
learning.learningGoals = ["Build JS Program", "Be a front-end developer", "Mastering JS", "Get the job"];
learning.category = "Front End Development";
learning.topicImportance = "High";

console.log(learning);

learning.topic = "Javascript";
learning.learningGoals.splice(1,1);

console.log(learning);

topicElement.innerText = `✔️ I am learning ${learning.topic}`;
topicElement.classList.remove("hide");

countElement.innerText = `✔️ I have ${learning.learningGoals.length} learning goals.`;
countElement.classList.remove("hide");
