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

    <section>

          <table>
            <tr>
              <th>SOORT BETALING</th>
              <th>BETAALDATUM</th>
              <th>BEDRAG</th>
              <th>BETALINGSWIJZE</th>
              <th>DETAILS</th>
            </tr>

        <div> 

            <tr>
              <td>Contributie</td>
              <td>01/08/2023</td>
              <td>€19.99</td>
              <td>PIN</td>
              <td>7394628495</td>
            </tr>
            <tr>
                <td>Betaling uit deposito</td>
                <td>21/07/2023</td>
                <td>€25.00</td>
                <td>PIN</td>
                <td>9749937459</td>
              </tr>
            <tr>
                <td>Boete</td>
                <td>21/07/2023</td>
                <td>€2.75</td>
                <td>Contant</td>
                <td>3845928503</td>
            </tr>
            <tr>
                <td>Inschrijving</td>
                <td>01/06/2023</td>
                <td>€1.00</td>
                <td>PIN</td>
                <td>8648543578</td>
            </tr>
            <tr>
                <td>Verkopen</td>
                <td>01/07/2023</td>
                <td>€2.99</td>
                <td>PIN</td>
                <td>9537905742</td>
            </tr>

        </div>       

          </table>

    </section>

    <article>
        
    </article>

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

    img{
        height: 2rem;
    }

    section{
        overflow-x: auto
    }

    div{
        position: absolute;
        background: white;
        border-radius: 1rem;
        padding: 1rem;
    }

    td, th{
        padding: 0 2rem  ;
    }

</style>