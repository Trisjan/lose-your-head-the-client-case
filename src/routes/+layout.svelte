<script>
	import bookImage from '$lib/assets/boek-image.png'
    import { onMount } from "svelte";

    let darkMode = false;

    onMount(() => {
        const body = document.querySelector("body");
        const sidebar = body.querySelector("nav");
        const toggle = document.querySelector(".toggle");
        const searchBtn = document.querySelector(".search-box input");
        const modeSwitch = document.querySelector(".toggle-switch");
        const modeText = document.querySelector(".mode-text");

        toggle.addEventListener("click", () => {
            sidebar.classList.toggle("close");
        });

        searchBtn.addEventListener("focus", () => {
            sidebar.classList.remove("close");
        });

        modeSwitch.addEventListener("click", () => {
            body.classList.toggle("dark");
            darkMode = !darkMode;

            if (darkMode) {
                modeText.innerText = "Light Mode";
            } else {
                modeText.innerText = "Dark Mode";
            }
        });
    });
</script>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <title>Mijn OBA</title>
</head>
<body>
	

	<nav class="sidebar">
        <header>
            <div class="image-text">
                <span class="image">
                    <img src="{bookImage}" alt="Gebruiker-foto">
                </span>

                <div class="text logo-text">
                    <span class="name">User Name </span>
                    <span class="profession">5 jaar lid</span>
                </div>
            </div>

            <i class='bx bx-chevron-right toggle'></i>
        </header>

        <div class="menu-bar">
            <div class="menu">

                <li class="search-box">
                    <i class='bx bx-search icon'></i>
                    <input type="text" placeholder="Zoek...">
                </li>

                <ul class="menu-links">
                    <li class="nav-link">
                        <a href="/">
                            <i class='bx bx-home icon'></i>
                            <span class="text nav-text">Welkom</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="/leeslijst">
                            <i class='bx bx-list-ul icon'></i>
                            <span class="text nav-text">Leeslijst</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="/uitleningen-en-verlengen">
                            <i class='bx bx-bar-chart-alt-2 icon' ></i>
                            <span class="text-long nav-text">Uitleningen en verlengen</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="/Uitleengeschiedenis">
                            <i class='bx bx-bell icon'></i>
                            <span class="text nav-text">Uitleengeschiedenis</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="/Betaalgeschiedenis">
                            <i class='bx bx-pie-chart-alt icon' ></i>
                            <span class="text nav-text">Betaalgeschiedenis</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="/Reserveringen">
                            <i class='bx bx-heart icon' ></i>
                            <span class="text nav-text">Reserveringen</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="/desposito's">
                            <i class='bx bx-wallet icon' ></i>
                            <span class="text nav-text">Desposito's</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="/tellerstand-abonnement">
                            <i class='bx bx-wallet icon' ></i>
                            <span class="text nav-text">Tellerstand abonnement</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="bottom-content">
                <li class="">
                    <a href="/uitloggen">
                        <i class='bx bx-log-out icon' ></i>
                        <span class="text nav-text">Uitloggen</span>
                    </a>
                </li>

                <li class="mode">
                    <div class="sun-moon">
                        <i class='bx bx-moon icon moon'></i>
                        <i class='bx bx-sun icon sun'></i>
                    </div>
                    <span class="mode-text text">Dark mode</span>

                    <div class="toggle-switch">
                        <span class="switch"></span>
                    </div>
                </li>
                
            </div>
        </div>

    </nav>
<main>
	<slot />
</main>
</body>
</html>
<style>
	:root {
		--oba__Primary__Rood: #FF2E17;
		--oba__Primary__Wit: #ffff;
		--oba__Primay__Zwart: #0000;
		--oba__Primay__Grijs: #9B9C9F;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	body{
			overflow-x: hidden !important;
			background-color: #E3E9F9;
	}
    main{
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
		margin-top: 9rem;
	}
	.sidebar{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 250px;
    padding: 10px 14px;
    background: var(--oba__Primary__Wit);
    z-index: 100;  
}
.sidebar .close{
    width: 88px;
}
/* ===== Reusable code - Here ===== */
.sidebar li{
    height: 50px;
    list-style: none;
    display: flex;
    align-items: center;
    margin-top: 10px;
}

.sidebar header .image,
.sidebar .icon{
    min-width: 60px;
    border-radius: 6px;
}

.sidebar .icon{
    min-width: 60px;
    border-radius: 6px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.sidebar .text,
.sidebar .icon{
    color: var(--oba__Primay__Zwart);
}

.sidebar .text{
    font-weight: 500;
    white-space: nowrap;
    opacity: 1;
}
.sidebar.close .text{
    opacity: 0;
}

.sidebar .text-long,
.sidebar .icon{
    color: var(--oba__Primay__Zwart);
}

.sidebar .text-long{
    resize: none;
    opacity: 1;
}
.sidebar.close .text-long{
    resize: none;
    opacity: 0;
}

/* =========================== */

.sidebar header{
    position: relative;
}

.sidebar header .image-text{
    display: flex;
    align-items: center;
}
.sidebar header .logo-text{
    display: flex;
    flex-direction: column;
}
header .image-text .name {
    margin-top: 2px;
    font-weight: 600;
}

header .image-text .profession{
    margin-top: -2px;
    display: block;
}

.sidebar header .image{
    display: flex;
    align-items: center;
    justify-content: center;
}

.sidebar header .image img{
    width: 3rem;
	height: 3rem;
    border-radius: 180px;
}

.sidebar header .toggle{
    position: absolute;
    top: 50%;
    right: -25px;
    transform: translateY(-50%) rotate(180deg);
    height: 25px;
    width: 25px;
    background-color: var(--oba__Primary__Rood);
    color: var(--oba__Primay__Zwart);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

body.dark .sidebar header .toggle{
    color: var(--oba__Primay__Zwart);
}

.sidebar.close .toggle{
    transform: translateY(-50%) rotate(0deg);
}

.sidebar .menu{
    margin-top: 18px;
}

.sidebar li.search-box{
    border-radius: 6px;
    background-color: #E3E9F9;
    cursor: pointer;
}

.sidebar li.search-box input{
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    background-color: #E3E9F9;
    color: var(--oba__Primary__Zwart);
    border-radius: 6px;
}
.sidebar li a{
    list-style: none;
    height: 100%;
    background-color: transparent;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    border-radius: 6px;
    text-decoration: none;
}

.sidebar li a:hover{
    background-color: var(--oba__Primary__Rood);
}
.sidebar li a:hover .icon,
.sidebar li a:hover .text{
    color: var(--oba__Primary__Wit);
}
body.dark .sidebar li a:hover .icon,
body.dark .sidebar li a:hover .text{
    color: var(--oba__Primay__Grijs);
}

.sidebar .menu-bar{
    height: calc(100% - 55px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: scroll;
}
.menu-bar::-webkit-scrollbar{
    display: none;
}
.sidebar .menu-bar .mode{
    border-radius: 6px;
    background-color: #E3E9F9;
    position: relative;
}

.menu-bar .mode .sun-moon{
    height: 50px;
    width: 60px;
}

.mode .sun-moon i{
    position: absolute;
}
.mode .sun-moon i.sun{
    opacity: 0;
}
body.dark .mode .sun-moon i.sun{
    opacity: 1;
}
body.dark .mode .sun-moon i.moon{
    opacity: 0;
}

.menu-bar .bottom-content .toggle-switch{
    position: absolute;
    right: 0;
    height: 100%;
    min-width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    cursor: pointer;
}
.toggle-switch .switch{
    position: relative;
    height: 22px;
    width: 40px;
    border-radius: 25px;
    background-color: var(--oba__Primay__Grijs);
}

.switch::before{
    content: '';
    position: absolute;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    background-color: var(--oba__Primary__Wit);
    transition: var(--tran-04);
}

body.dark .switch::before{
    left: 20px;
}

.home{
    position: absolute;
    top: 0;
    top: 0;
    left: 250px;
    height: 100vh;
    width: calc(100% - 250px);
    background-color: var(--oba__Primary__Rood);
    transition: var(--tran-05);
}
.home .text{
    color: var(--oba__Primay__Zwart);
    padding: 12px 60px;
}

.sidebar.close ~ .home{
    left: 78px;
    height: 100vh;
    width: calc(100% - 78px);
}
body.dark .home .text{
    color: var(--oba__Primay__Zwart);
}
@media (min-width: 68em){
        main{
		margin-left: 15rem;
		margin-top: 9rem;
	} 
}
</style>
