
<script>
    import { navOptions } from  './Nav.svelte';	// import application navigation
    let selected = navOptions[0];	// keep track of the selected 'page' object (default to the about component since we must have local db connection established first)
    let intSelected = 0;	// selected page index
    
    // change the selected component (the event.originalTarget.id is not accessible in Chrome so switched to event.srcElement.id)
    function changeComponent(event) {
        selected = navOptions[event.srcElement.id];
        intSelected = event.srcElement.id;
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
        
        <nav id="site-navigation" class="main-navigation">
            <button class="menu-toggle">Menu</button>
        <div>    
        <ul id="myNavbar" class="navbar menu">
            {#each navOptions as option, i}
            <!-- <li class="nav-item">
                <button class={intSelected==i ? "nav-link active p-2 ml-1" : "p-2 ml-1 nav-link"} on:click={changeComponent} id={i} role="tab">{option.page}</button> 
                <a on:click={changeComponent} id={i} role="tab">
                    {option.page}
                </a>
            </li> -->
            <li>
				<a on:click={changeComponent} id={i} >{option.page}</a>
			</li>

            {/each}
        </ul>
    </div>
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

    <style scoped>

    .menu-toggle {
	display: none;
    }


     header {
            font-family: 'Oswald', sans-serif;
            text-align: center;
     }
    
     h1 {
            margin-top: 0;
     }
    
     img {
            margin-top: 20px;
            width: 60px;
            height: 60px;
    }

        /* nav {
		border-bottom: 1px solid black;
		border-top: 1px solid black;
		padding: 10px 0;
		text-align: center;
		text-transform: uppercase;
		font-family: 'Oswald', sans-serif;
		font-weight: bold;
		letter-spacing: 1px;
	}     */
    

    a {
		display: inline-block;
		text-decoration: none;
		color: #333;
		padding: 5px;
        margin: 0;
        padding: 0; 
	}

    ul {
	margin:0 0 1.5em 3em;
    }

    .menu {
	display:table;
	margin:0 auto;
}

    .main-navigation {
	background-color:#fff;
	font-size:14px;
	font-weight:700;
	letter-spacing:1px;
	padding:15px 0;
	border-top:1px solid;
	border-bottom:1px solid;
	text-transform:uppercase;
}
.main-navigation a {
		text-decoration:none;
}
.main-navigation ul {
	list-style:none;
	margin:0 auto;
	padding:3px 0;
}
.main-navigation li {
	display:inline;
	float:left;
	margin:0 1em;
	position:relative;
}
.main-navigation ul ul {
	display:none;
	text-transform:none;
	box-shadow:none;
	opacity:0.9;
	float:left;
	left:-1em;
	padding:0.5em 1em;
	position:absolute;
	top:1.5em;
	z-index:99999;
	padding-top:35px;
	transition:all 0.3s;
	font-weight:400;
  background-color:#fff;
}
.main-navigation ul ul li {
	margin:0;
	width:150px;
}

/* .main-navigation ul li:hover>ul {
	display: block;
} */


    /* @media only screen and (min-width: 767px) {
		nav {
		li {
			display: inline;
		}
		ul {
			display: block;
		}

        .menu-toggle {
			display: none;
		}

    }
 */


    @media screen and (max-width:1023px) {
        
		
		/*.menu-toggle,.main-navigation.toggled .nav-menu { */
			.menu-toggle {		
			display:block;
	}

	        
        button.menu-toggle {
			background:none;
			border:0;
			box-shadow:none;
			color: #222222;
			font-size:14px;
			margin:0 auto;
			outline-style:none;
			text-shadow:none;
			text-transform:uppercase;
	}

    .main-navigation {
			display:block;
			float:none;
			margin:0 auto;
	}

    .main-navigation a {
				display:block;
				padding:0.5em 0;
				text-decoration:none;
	}

    .main-navigation ul {
			display:none;
	}

    .main-navigation li {
				float:none;
				margin:0;
				position:relative;
				padding:0;
				text-align:center;
	}

    .main-navigation li:last-child {
				border-bottom:0;
	}

	.navbar.responsive {
		display: block;
	}

    }
        
    </style>
