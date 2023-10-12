<script>
    export let data
    console.log(data)
    import logo from '$lib/assets/oba.png';
</script>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    
    <!-- {#each data.reservations as reservation}
        <blockquote>
            <p>{reservation.userName}</p>
            <p>Your reservation id = {reservation.id}</p>
        </blockquote>
        {/each} -->
        
        
        <header> 
            <img src={logo} alt="logo van oba">
            <h1>Betalingen</h1>
        </header>
        
        <main>

            <section>
            
             <ul>
                 <li>SOORT BETALING</li>
                 <li>BETAALDATUM</li>
                 <li>BEDRAG</li>
                 <li>BETALINGSWIJZE</li>
                 <li>DETAILS</li>
             </ul>     
             <ul>
                 <li>Contributie</li>
                 <li>01/08/2023</li>
                 <li>€19.99</li>
                 <li>PIN</li>
                 <li>7394628495</li>
             </ul>
             <ul>
                 <li>Betaling uit deposito</li>
                 <li>21/07/2023</li>
                 <li>€25.00</li>
                 <li>PIN</li>
                 <li>9749937459</li>
               </ul>
             <ul>
                 <li>Boete</li>
                 <li>21/07/2023</li>
                 <li>€2.75</li>
                 <li>Contant</li>
                 <li>3845928503</li>
             </ul>
             <ul>
                 <li>Inschrijving</li>
                 <li>01/06/2023</li>
                 <li>€1.00</li>
                 <li>PIN</li>
                 <li>8648543578</li>
             </ul>
             <ul>
                 <li>Verkopen</li>
                 <li>01/07/2023</li>
                 <li>€2.99</li>
                 <li>PIN</li>
                 <li>9537905742</li>
             </ul>

            </section>

            <div>

            <article class="article-contact"> 
                <h2>Vragen over uw betalingen?</h2>
                <p class="p-contact">Onze klantenservice is bereikbaar op werkdagen van 9.00 tot 17.00 uur.</p>
                <button>Contact</button>
            </article>

            <article class="depositos">
                <h2>Deposito's</h2>
                <p class="p-depositos">Hier kunt u via IDEAL tegoed op uw OBA-pas zetten.</p>
                <p>Het bedrag hieronder geeft het huidige tegoed op uw pas aan</p>

                <div class="tegoed">
                    <h3>Tegoed</h3>
                    <button>Toevoegen aan deposito</button>
                </div>

            </article>
            </div>

                
</main>

</body>
</html>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&family=Poppins:wght@600&display=swap');
    
    *{ 
        margin: 0;
       font-family: poppins;
    }

    body{
        background: #E4E9F7;
    }

    section{
        width: 60rem;
        margin-bottom: 3rem;
    }

    img{
        height: 2rem;
    }

    ul{
        display: flex;
        list-style: none;
    }

    ul:not(:first-of-type){
        background: white;
    }

    ul:nth-last-of-type(5){
        border-top-right-radius: 1rem;
        border-top-left-radius: 1rem;
    }

    ul:last-of-type{
        border-bottom-right-radius: 1rem;
        border-bottom-left-radius: 1rem;
    }

    li{
        padding: 0.5rem 0;
        flex-basis: 100%;
    }

    div{
        display: flex;
        justify-content: space-between;
    }

    .article-contact{
        width: 30rem;
    }

    .p-contact{
        margin: 2rem 0;
    }

    button{
        background: black;
        color: white;
        border: none;
        padding: 0 1rem;
    }

    .p-depositos{
        margin: 2rem 0 0 0;
    }

    .depositos p:last-of-type{
        margin-bottom: 2rem;
    }

</style>