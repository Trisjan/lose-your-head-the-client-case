<section id="leeslijst">
<h1> Leeslijst </h1>
<p>Hier vind je al jouw opgeslagen boeken.</p>

<div class="cards">
    <div class="card">ONE</div>
    <div class="card">TWO</div>
    <div class="card">THREE</div>
    <div class="card">FOUR</div>
    <div class="card">FIVE</div>
    <div class="card">SIX</div>
    <div class="card">SEVEN</div>
    <div class="card">EIGHT</div>
    <div class="card">NINE</div>
    <div class="card">TEN</div>
    <div class="card">ELEVEN</div>
    <div class="card">TWELVE</div>
  </div>


</section>

<style>
    h1, p {
        margin-left: 5em;
    }

.card {
  background-color: rgb(31, 31, 32);
  color: white;
  padding: 1rem;
  height: 4rem;
}

.cards {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
}

@media (min-width: 600px) {
  .cards { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 900px) {
  .cards { grid-template-columns: repeat(3, 1fr); }
}


</style>
