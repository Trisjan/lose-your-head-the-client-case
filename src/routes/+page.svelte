<!DOCTYPE html>
<script>
    import obaLogohome from '$lib/assets/oba-logo-homePage.png'
    import bookImage from '$lib/assets/boek-image.png'
    // export let data
    // console.log(data)
</script>
    <section class="home-page">
        <img src="{obaLogohome}" alt="OBA" width="700" height="350" class="home-page__img">
        <article>
            <h1>Welkom <span> user name</span> bij OBA!</h1>
            <p>Ontdek een wereld vol kennis en verhalen. Onze collectie staat tot uw beschikking, en ons team helpt u graag bij uw zoektocht naar wijsheid. Laat de pagina's uw gids zijn op een avontuurlijke reis door het geschreven woord.</p>
            <a href="/">Mijn lijst</a>
        </article>
</section>
<section class="home-page__books">
<article>
    <h2>Jouw leeslijst boeken</h2>
    <p>zoek je favoriete boek, kies een afhaallocatie en bevestig je lening. Haal het boek op bij de bibliotheek en geniet van lezen. Vergeet niet om het op tijd terug te brengen om boetes te voorkomen. Veel leesplezier!</p>
    <a href="/">Mijn boeken lijst</a>
</article>
<aside>
    <img src="{bookImage}" alt="Afbeelding 1">
        <img src="{bookImage}" alt="Afbeelding 2">
        <img src="{bookImage}" alt="Afbeelding 3">
        <img src="{bookImage}" alt="Afbeelding 4">
        <img src="{bookImage}" alt="Afbeelding 5">
        <img src="{bookImage}" alt="Afbeelding 6">
</aside>
</section>

<!-- {#each data.reservationsOld as reservation}
{/each} -->
<section class="home-page__ebooks">
<aside>
    <img src="{bookImage}" alt="Afbeelding 1">
        <img src="{bookImage}" alt="Afbeelding 2">
        <img src="{bookImage}" alt="Afbeelding 3">
        <img src="{bookImage}" alt="Afbeelding 4">
        <img src="{bookImage}" alt="Afbeelding 5">
        <img src="{bookImage}" alt="Afbeelding 6">
</aside>    
<article>
    <h2>Jouw E-boeken lijst</h2>
    <p>zoek je favoriete boek, kies een afhaallocatie en bevestig je lening. Haal het boek op bij de bibliotheek en geniet van lezen. Vergeet niet om het op tijd terug te brengen om boetes te voorkomen. Veel leesplezier!</p>
    <a href="/">Mijn E-boeken lijst</a>
</article>
</section>

<section class="home-page__luisterboeken">
<article>
    <h2>Jouw luisterboeken lijst </h2>
    <p>zoek je favoriete boek, kies een afhaallocatie en bevestig je lening. Haal het boek op bij de bibliotheek en geniet van lezen. Vergeet niet om het op tijd terug te brengen om boetes te voorkomen. Veel leesplezier!</p>
    <a href="/">Mijn luisterboeken lijst</a>
</article>
<aside>
    <img src="{bookImage}" alt="Afbeelding 1">
        <img src="{bookImage}" alt="Afbeelding 2">
        <img src="{bookImage}" alt="Afbeelding 3">
        <img src="{bookImage}" alt="Afbeelding 4">
        <img src="{bookImage}" alt="Afbeelding 5">
        <img src="{bookImage}" alt="Afbeelding 6">
</aside>
</section>
<section>
<article>
    <h2>Ontdek de Wereld van Leren bij <span>OBA!</span></h2>
    <p>Bij OBA bieden we niet alleen een schat aan boeken, maar ook een wereld van kennis en leren. Ontdek onze cursussen, van talen en schoolvakken tot rijles theorie en meer. Investeer in jezelf, breid je vaardigheden uit en verrijk je leven met onze educatieve programma's. Kom langs en begin vandaag nog met leren!</p>
</article>

</section>


    <!-- {#each data.reservations as reservation}
        <blockquote>
            <p>{reservation.userName}</p>
            <p>Your reservation id = {reservation.id}</p>
        </blockquote>
    {/each} -->

<style>
    :root{
		 --oba__Primary__Rood: #FF2E17 ; 
		 --oba__Primary__Wit: #ffff ;
		 --oba__Primay__Zwart: #000000;
		 --oba__Primay__Grijs: #9B9C9F;
	 }

    .home-page{
        padding: 7rem ;
     }
    .home-page__img{
    width: 300px;
    position: absolute;
    height: auto;
    right: 0;
    top: 0;
  }

span {
    color: var(--oba__Primary__Rood);
}
     section{
        display: flex;
        flex-direction: column;
        gap: 15rem;
        align-items: center;
     }
article a{
    text-decoration: none;
    color: var(--oba__Primary__Wit);
    background-color: var(--oba__Primay__Zwart);
    padding: .5rem 1rem;
}
.home-page__books, .home-page__luisterboeken{
margin: 2rem 0 ;
padding: 7rem;
background-color: var(--oba__Primary__Wit);
}
 .home-page__ebooks{
   padding: 7rem;
 }
 aside{
     display: grid;
    grid-template-columns: repeat(3, 1fr); /* 2 kolommen */
    grid-gap: .5rem; /* Ruimte tussen de afbeeldingen */
 }
 aside img {
    width: 70%;
    height: auto;
 }
    @media (min-width: 68em){
    .home-page{
        padding: 0 7rem 7rem ;
     }
    .home-page__img{
    width: 700px;
    position: absolute;
    right: 0px;
    top: 0;
    }
    section{
    display: flex;
    flex-direction: row;
    gap: 15rem;
    align-items: center;
     }
     
    article h1{
        font-size: 2rem;
    }
    article{
        width: 30%;
    }
    }
</style>