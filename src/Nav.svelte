<script context="module">
    // main navigation for the application
    import Home from './pages/index.svelte';
    import Kaart from './pages/kaart.svelte';
    import Vragen from './pages/vragen.svelte';
    import Netwerk from './pages/netwerk.svelte';
    import Woordenschat from './pages/woordenschat.svelte';
    import ActiefLetsen from './pages/actiefLetsen.svelte';
    import Contact from './pages/contact.svelte';
    import LidWorden from './pages/lid.svelte';
    import Links from './pages/links.svelte';


    
    // these are our 'pages' to navigate through (in order for this export to work the script tag MUST include context="module")
    export const navOptions = [
          //  { page: 'About this app',   component: About },
        { page: 'Home',   component: Home },
       { page: 'Kaart',   component: Kaart },
       { page: 'Vragen',   component: Vragen },
       { page: 'Netwerk',   component: Netwerk },
       { page: 'Woordenschat',   component: Woordenschat },
       { page: 'Actief Letsen',   component: ActiefLetsen },
       { page: 'Contact',   component: Contact },
       { page: 'Lid worden',   component: LidWorden },
       { page: 'Links',   component: Links },


            // other navigation pages can go here
    ];
    </script>