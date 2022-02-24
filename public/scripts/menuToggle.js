( function() {
	var container, button, menu;
	container = document.getElementById( 'site-navigation' );
	if ( ! container )
		return;

	button = container.getElementsByTagName( 'button' )[0];
	if ( 'undefined' === typeof button )
		return;

	menu = container.getElementsByTagName( 'ul' )[0];

	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}

	if ( -1 === menu.className.indexOf( 'nav-menu' ) )
		menu.className += ' nav-menu';

	button.onclick = function() {
		if ( -1 !== container.className.indexOf( 'toggled' ) )
			container.className = container.className.replace( ' toggled', '' );
		else
			container.className += ' toggled';
	};
	//alert(menu.className);
	//alert(container.className);
} )();


document.querySelector('.menu-toggle').onclick = () => {
	//let x = document.getElementById("myNavbar");
	let x = document.getElementById("site-navigation");
	if (x.className === "navbar") {
	  x.className += " responsive";
	} else {
	  x.className = "navbar";
	}
  }

  function verberg() {
	let m = document.getElementById("site-navigation");
	m.className="navbar"; 
  }

