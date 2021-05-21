let brands = document.querySelector(".brands");


function brandsFoo(){
	
let arr = ["images/1.png", "images/6.png", "images/3.png", "images/4.png", "images/5.png", "images/6.png",];
for(let i = 0; i < arr.length; i++){
	let brandsBox = document.createElement("div");
	brandsBox.classList.add("brands-box");
	let brandsPic = document.createElement("img");
	brandsPic.setAttribute("src", arr[i]);
	brands.appendChild(brandsBox);
	brandsBox.appendChild(brandsPic);
}
}
export default brandsFoo;