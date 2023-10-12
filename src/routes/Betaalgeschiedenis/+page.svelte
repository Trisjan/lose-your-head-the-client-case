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
            
             <ul class="ul-titles">
                 <li>SOORT BETALING</li>
                 <li>BETAALDATUM</li>
                 <li>BEDRAG</li>
                 <li>BETALINGSWIJZE</li>
                 <li>DETAILS</li>
             </ul>
             
             <div>
                 
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

             </div>     

            </section>
                
</main>

</body>
</html>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&family=Poppins:wght@600&display=swap');
    
    *{ margin: 0;
       font-family: poppins;
    }

    body{
        background: #E4E9F7;
    }

    section{
        width: 60rem;
        display: flex;
        flex-direction: column;
    }
    
    main{
        overflow-x: scroll;
    }

    img{
        height: 2rem;
    }

    ul{
        display: inline-flex;
        flex-direction: column;
        /* display: flex;
        justify-content: space-between; */
        list-style: none;
    }

    .ul-titles{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    div{
       background: white;
       border-radius: 1rem;
       justify-content: space-between;
    }

</style>