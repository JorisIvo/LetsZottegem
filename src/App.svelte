<script>
    import { navOptions } from  './Nav.svelte';	// import application navigation
    let selected = navOptions[0];	// keep track of the selected 'page' object (default to the about component since we must have local db connection established first)
    let intSelected = 0;	// selected page index
    
    // change the selected component (the event.originalTarget.id is not accessible in Chrome so switched to event.srcElement.id)
    function changeComponent(event) {
        selected = navOptions[event.srcElement.id];
        intSelected = event.srcElement.id;
    }
    </script>


    <!-- Include Bootstrap CSS-->
    <!-- <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'> -->
    <header>
        <img src="./images/logo.jpg" alt="logo" />
        <h1>LETS Regio Zottegem - Vlaamse Ardennen </h1>
    </header>
    <div class="container">
        <!--app navigation -->
        <nav class="nav">
        <ul class="menu-items">
            {#each navOptions as option, i}
            <li class="nav-item">
                <!-- <button class={intSelected==i ? "nav-link active p-2 ml-1" : "p-2 ml-1 nav-link"} on:click={changeComponent} id={i} role="tab">{option.page}</button> -->
                <a on:click={changeComponent} id={i} role="tab">
                    {option.page}
                </a>
            </li>
            {/each}
        </ul>
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

        nav {
		border-bottom: 1px solid black;
		border-top: 1px solid black;
		padding: 10px 0;
		text-align: center;
		text-transform: uppercase;
		font-family: 'Oswald', sans-serif;
		font-weight: bold;
		letter-spacing: 1px;
	}    

    ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

    a {
		display: inline-block;
		text-decoration: none;
		color: #333;
		padding: 5px;
	}


    @media only screen and (min-width: 767px) {
		/* nav { */
		li {
			display: inline;
		}
		ul {
			display: block;
		}
    }
    
        
    </style>