let teams = document.querySelector(".teams");
function teamsfoo() {
const xhr = fetch("https://reqres.in/api/users?page=1")
	.then(x => x.json())
	.then(y => {
		const user = y.data;

		user.splice(3, 2);

let arrIcon = ["./images/icons/face_icon.png", "./images/icons/twit_icon.png", "./images/icons/lin_icon.png", "./images/icons/goog_icon.png"];
		user.map(user => {
			let teamBox = document.createElement("div");
			teamBox.classList.add("team-box");
			teamBox.innerHTML = `<img class="team-box-pic" src=${user.avatar} />`;
			let teamName = document.createElement("h4");
			teamName.innerHTML = `${user.first_name}  ${user.last_name}`;
			let teamEmail = document.createElement("a");
			teamEmail.setAttribute("href", "#");
			teamEmail.innerHTML = `${user.email}`;
			teams.appendChild(teamBox);
			let iconCont = document.createElement("div");
			iconCont.classList.add("icon-container");
			teamBox.appendChild(teamName);
			teamBox.appendChild(teamEmail);

			for(let i = 0; i < arrIcon.length; i++) {
				let iconBox = document.createElement("div");
				iconBox.classList.add("icon-box");
				let iconBoxPic = document.createElement("img");
				iconBoxPic.setAttribute("src", arrIcon[i]);
				iconCont.appendChild(iconBox);
				iconBox.appendChild(iconBoxPic);
					teamBox.appendChild(iconCont);
			}
			
		});
		})

}



export default teamsfoo;