
<script>
    import { navOptions } from  './Nav.svelte';	// import application navigation
    let selected = navOptions[0];	// keep track of the selected 'page' object (default to the about component since we must have local db connection established first)
    let intSelected = 0;	// selected page index
    
    // change the selected component (the event.originalTarget.id is not accessible in Chrome so switched to event.srcElement.id)
    function changeComponent(event) {
        selected = navOptions[event.srcElement.id];
        intSelected = event.srcElement.id;
        var m = document.getElementById("nav");
        //m.className = "navbar";
    }

	
/* 	function toonMenu() {
  let x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
} */

/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens.
 */
 /*
 ( function() {
	let container, button, menu;

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
} )();
*/
   

    </script>



    <!-- Include Bootstrap CSS-->
    <!-- <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'> -->
    <header>
        <img src="./images/logo.jpg" alt="logo" />
        <h1>LETS Regio Zottegem - Vlaamse Ardennen </h1>
    </header>
    <div class="container">
        <!--app navigation -->
         <nav id="site-navigation" class="main-navigation navbar">
			<!-- <nav id="myNavbar" class="navbar"> -->
                <!-- <nav id="site-navigation" class="navbar"> -->
            <button class="menu-toggle">Menu</button>
        <!-- <div class="menu-menu-1-container">  --> 
			<!-- <div >   --> 
              <!-- <ul id="myNavbar" class="navbar menu"> -->
				<!-- <ul id="myNavbar" class="navbar"> -->
					<ul id="nav" class="menu">	
            {#each navOptions as option, i}
            <!-- <li class="nav-item">
                <button class={intSelected==i ? "nav-link active p-2 ml-1" : "p-2 ml-1 nav-link"} on:click={changeComponent} id={i} role="tab">{option.page}</button> 
                <a on:click={changeComponent} id={i} role="tab">
                    {option.page}
                </a>
            </li> -->
            <li>
				<a on:click={changeComponent} onclick="verberg()" id={i} >{option.page}</a>
			</li>

            {/each}
        </ul>
    <!-- </div> -->
    </nav>
        <!-- content wrapper -->
        <div class="row">
            <div class="col-sm-12">
                <div class="p-2">
                    <!-- <h1>{selected.page}</h1> -->
                    <!-- this is where our main content is placed -->
                    <svelte:component this={selected.component}/>
                </div>
            </div>
        </div>
    </div>

    