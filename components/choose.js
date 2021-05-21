let choose = document.querySelector(".choose");

let arr2 = [
{
	pic: "./images/texno1.png",
	title: "Keyword Research",
	text: "Business applications through revolutionary catalysts for chang the Seamlessly underwhelm dures.",
	btn: "Learn More"
},
{
	pic: "./images/texno2.png",
	title: "Seo Optimazadion",
	text: "Business applications through revolutionary catalysts for chang the Seamlessly underwhelm dures.",
	btn: "Learn More"
},
{
	pic: "./images/texno3.png",
	title: "Social Marketing",
	text: "Business applications through revolutionary catalysts for chang the Seamlessly underwhelm dures.",
	btn: "Learn More"
}
];
function choosefoo() {
for(let i = 0; i < arr2.length; i++){
	let chooBox = document.createElement("div");
	chooBox.classList.add("choose-box");
	let chooSmBox = document.createElement("div");
	chooSmBox.classList.add("choose-pic-box");
	let chooPic = document.createElement("img");
	chooPic.setAttribute("src", arr2[i].pic);
	let chooTitle = document.createElement("h3");
	chooTitle.innerHTML = arr2[i].title;
	let chooText = document.createElement("p");
	chooText.innerHTML = arr2[i].text;
	let chooBtn = document.createElement("button");
	chooBtn.classList.add("start-btn");
	chooBtn.innerHTML = arr2[i].btn;
	choose.appendChild(chooBox);
	chooBox.appendChild(chooSmBox);
	chooSmBox.appendChild(chooPic);
	chooBox.appendChild(chooTitle);	
	chooBox.appendChild(chooText);
	chooBox.appendChild(chooBtn);
}
}


export default choosefoo;