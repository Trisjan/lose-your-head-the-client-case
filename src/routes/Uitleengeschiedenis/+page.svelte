<script>
    export let data
</script>
<h1>Uitleengeschiedenis</h1>
<table style="width:100%">
    <tr>
        <td>Totale uitleningen ooit</td>
        <td>Totaal reserveringen ooit</td>
        <td>Laatste uitleendatum</td>
    </tr>
    <tr>
        <td>5</td>
        <td>0</td>
        <td>02-09-2023</td>
    </tr>
</table>
<p>
    Wilt u een overzicht van titels zien, activeer dan uw uitleengeschiedenis bij 'persoonlijke gegevens'.
    Uw uitleengeschiedenis zal dan vanaf het moment van activeren worden bijgehouden.
</p>
<section class="buttons">
    <button>Verwijder geselecteerde titels uit uw uitleengeschiedenis</button>
    <button>(de)selecteer</button>
    <button>afdrukken</button>
    <button>versturen per e-mail</button>
    <button>csv export</button>
</section>
<section class="books">
    {#each data.uitleengeschiedenis1 as book}
        <article>
            <img src="{book.image.url}" alt="foto van {book.title}">
            <section class="rightside">
                <p>{book.title} / {book.author}</p>
                <p>{book.author}</p>
                <p>{book.category}</p>
                <div>
                    <p>{book.uitleendatum}</p>
                    <p>{book.inleverdatum}</p>
                </div>
            </section>
        </article>
    {/each}
</section>

<style>
    .books {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 1rem;
        max-width: 100%;
    }

    article {
        display: flex;
        background-color: var(--oba__Primary__Wit);
        padding: 1rem;
        border-radius: 1rem;
    }

    article .rightside {
        margin-left: 1rem;
    }

    article div{
        display: flex;
    }

</style>