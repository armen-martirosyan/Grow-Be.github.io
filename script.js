import brandsFoo from "./components/brands.js";
import forSection from "./components/forsec.js";
import choosefoo from "./components/choose.js";
import teamsfoo from "./components/teams.js";

brandsFoo();
forSection();
choosefoo();
teamsfoo();

// clients.js

let offset = 0;
const slideRow = document.querySelector(".clients");
const sliderNext = document.querySelector(".next");
const sliderPrev = document.querySelector(".prev");


sliderNext.addEventListener("click", function () {
	offset = offset + 100;
	if(offset > 200){
		offset = 0;
	}
	slideRow.style.left = -offset + "%";
});
sliderPrev.addEventListener("click", function () {
	offset = offset -100;
	if(offset < 0) {
		offset = 200;
	}
	slideRow.style.left = -offset + "%";
});


let clients = document.querySelector(".clients");

const link = "https://reqres.in/api/users?page=1";
const xhr = new XMLHttpRequest();
xhr.open("GET", link);
xhr.onload = () => {
	let newRespons = JSON.parse(xhr.response);
	let user = newRespons.data;
//	user.splice(3, 2);
	if(xhr.readyState == 4 && xhr.status == 200) {
		user.map(user => {
		let persBox = document.createElement("div");
		persBox.classList.add("pers-box");
		let pers = document.createElement("div");
		let persText = document.createElement("p");
		let persPic = document.createElement("img");
		let persName = document.createElement("h4");
		let persEmail = document.createElement("a");
		persEmail.setAttribute("href", "#");
		pers.classList.add("person");
		persText.innerHTML = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint cupiditate non provident.";
		persPic.setAttribute("src", user.avatar);
		persName.innerHTML = `${user.first_name}  ${user.last_name}`;
		persEmail.innerHTML = `${user.email}`;
		pers.appendChild(persText);
		pers.appendChild(persPic);
		pers.appendChild(persName);
		pers.appendChild(persEmail);
		persBox.appendChild(pers);
		clients.appendChild(persBox);
	});
	}
	else {
	console.error(newRespons.response);
}
	
}
xhr.send();

const slideRow1 = document.querySelector(".clients1");
const sliderNext1 = document.querySelector(".next1");
const sliderPrev1 = document.querySelector(".prev1");


sliderNext1.addEventListener("click", function () {
	offset = offset + 100;
	if(offset > 500){
		offset = 0;
	}
	slideRow1.style.left = -offset + "%";
});
sliderPrev1.addEventListener("click", function () {
	offset = offset -100;
	if(offset < 0) {
		offset = 500;
	}
	slideRow1.style.left = -offset + "%";
});

let clients1 = document.querySelector(".clients1");
const link1 = "https://reqres.in/api/users?page=1";
const xhr1 = new XMLHttpRequest();
xhr1.open("GET", link);
xhr1.onload = () => {
	let newRespons1 = JSON.parse(xhr1.response);
	let user1 = newRespons1.data;
	if(xhr1.readyState == 4 && xhr1.status == 200) {
		user1.map(user1 => {
		let persBox1 = document.createElement("div");
		persBox1.classList.add("pers-box-1");
		let pers = document.createElement("div");
		let persText = document.createElement("p");
		let persPic = document.createElement("img");
		let persName = document.createElement("h4");
		let persEmail = document.createElement("a");
		persEmail.setAttribute("href", "#");
		pers.classList.add("person");
		persText.innerHTML = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint cupiditate non provident.";
		persPic.setAttribute("src", user1.avatar);
		persName.innerHTML = `${user1.first_name}  ${user1.last_name}`;
		persEmail.innerHTML = `${user1.email}`;
		pers.appendChild(persText);
		pers.appendChild(persPic);
		pers.appendChild(persName);
		pers.appendChild(persEmail);
		persBox1.appendChild(pers);
		clients1.appendChild(persBox1);
	});
	}
	else {
	console.error(newRespons.response);
}
	
}
xhr1.send();




let burger = document.querySelector(".burger");
let line1 = document.querySelector(".line-1");
let line2 = document.querySelector(".line-2");
let line3 = document.querySelector(".line-3");
let hidMenu = document.querySelector(".hidden-menu");

burger.addEventListener("click", function () {
	line1.classList.toggle("line-1-close");
	line2.classList.toggle("line-2-close");
	line3.classList.toggle("line-3-close");
	hidMenu.classList.toggle("show-menu");
});

