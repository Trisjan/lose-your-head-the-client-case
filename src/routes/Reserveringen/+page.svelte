    <script>
        export let data
        console.log(data)
    </script>

    {#each data.reservation as reservation}
        <blockquote>
            <p>{reservation.title}</p>
            <p>Reservation id = {reservation.id}</p>
            <p>Availability: {reservation.availability}</p>
            <p>Available at {reservation.date}</p>
        </blockquote>
    {/each}