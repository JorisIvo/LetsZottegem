document.querySelector('.menu-toggle').onclick = () => {
	let x = document.getElementById("myNavbar");
	if (x.className === "navbar") {
	  x.className += " responsive";
	} else {
	  x.className = "navbar";
	  x.style.display = none;
	}
  }
