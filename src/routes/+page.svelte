<!DOCTYPE html>
<script>
    export let data
    console.log(data)
</script>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mijn OBA</title>
</head>
<body>
    MIJN OBA

    {#each data.reservationsOld as reservation}
        <blockquote>
            <p>{reservation.userName}</p>
            <p>Your reservation id = {reservation.id}</p>
        </blockquote>
    {/each}
</body>
</html>
<style>
    body{
    min-height: 100vh;
    background-color: var(--oba__Primay__Grijs);
    transition: all 0.3s ease;
    }
</style>