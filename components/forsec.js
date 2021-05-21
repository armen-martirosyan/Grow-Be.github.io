let forObj = document.querySelector(".for-obj");

let arr1 = [
{
	pic: "./images/Vector.png",
	title: "Grow Your Business",
	text: "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
	btn: "Read More...",
	backColor: "#FCD5C8"
},
{
	pic: "./images/Vector1.png",
	title: "Get Quality Ieads",
	text: "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
	btn: "Read More...",
	backColor: "#BDE0BC"
},
{
	pic: "./images/Vector2.png",
	title: "Drive More Sales",
	text: "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
	btn: "Read More...",
	backColor: "#FFF3C9"
}
];
function forSection() {
for(let i = 0; i < arr1.length; i++){
	let forBox = document.createElement("div");
	forBox.classList.add("for-box");
	let forSmallBox = document.createElement("div");
	forSmallBox.classList.add("for-small-box");
	forSmallBox.style.backgroundColor = arr1[i].backColor;
	let forPic = document.createElement("img");
	forPic.setAttribute("src", arr1[i].pic);
	let forTitle = document.createElement("h3");
	forTitle.innerHTML = arr1[i].title;
	let forText = document.createElement("p");
	forText.innerHTML = arr1[i].text;
	let forBtn = document.createElement("a");
	forBtn.setAttribute("src", "#");
	forBtn.innerHTML = arr1[i].btn;
	forObj.appendChild(forBox);
	forBox.appendChild(forSmallBox);
	forSmallBox.appendChild(forPic);
	forBox.appendChild(forTitle);	
	forBox.appendChild(forText);
	forBox.appendChild(forBtn);
}
}

export default forSection;