const container = document.querySelector("#container")

const content = document.createElement("p")

content.textContent = "Hey I’m red!"
content.style.color = 'red'



const heading_3 = document.createElement("h3")

heading_3.textContent = "I’m a blue h3!"
heading_3.style.color = 'blue'

container.appendChild(content);
container.appendChild(heading_3);

const section = document.createElement("div")
section.setAttribute("style", "border: 1px solid black; background: pink;");

const head_1 = document.createElement("h1")
head_1.textContent = "I’m in a div"

const p = document.createElement("p")
p.textContent = "ME TOO!"

section.appendChild(head_1)
section.appendChild(p)
container.appendChild(section);

const btn = document.querySelector("#btn");


btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});



