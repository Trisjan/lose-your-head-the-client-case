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

    MIJN OBA

    <!-- {#each data.reservations as reservation}
        <blockquote>
            <p>{reservation.userName}</p>
            <p>Your reservation id = {reservation.id}</p>
        </blockquote>
    {/each} -->


    <header> <img src={logo} alt="logo van oba"> </header>


</body>
</html>

<style>



</style>