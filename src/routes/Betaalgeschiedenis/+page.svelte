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
              <th>DATUM</th>
              <th>OMSCHRIJVING</th>
              <th>BEDRAG</th>
              <th>TYPE</th>
            </tr>
            <tr>
              <td>01/08/2023</td>
              <td>Maandelijkse kosten jongerenabonnement</td>
              <td>€25.00</td>
              <td>Abonnement</td>
            </tr>
            <tr>
                <td>21/07/2023</td>
                <td>Opwaardering pas</td>
                <td>€19.99</td>
                <td>Opwaardering</td>
              </tr>
            <tr>
                <td>21/07/2023</td>
                <td>Boete 5 dagen te laat</td>
                <td>€2.75</td>
                <td>Boete</td>
            </tr>
            <tr>
                <td>01/07/2023</td>
                <td>Maandelijkse kosten jongerenabonnement</td>
                <td>€19.99</td>
                <td>Abonnement</td>
            </tr>
            <tr>
                <td>01/06/2023</td>
                <td>Maandelijkse kosten jongerenabonnement</td>
                <td>€19.99</td>
                <td>Abonnement</td>


            </tr>
          </table>

    </section>

</body>
</html>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&family=Poppins:wght@600&display=swap');
    
    *{ margin: 0;
       font-family: poppins;
    }

    img{
        height: 2rem;
    }

    section{
        overflow-x: auto
    }


</style>