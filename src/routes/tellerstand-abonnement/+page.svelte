<script>

</script>

<section class="tellerstand-page">
<h1>Tellerstand abonnement</h1>
<div class="tellerstand-page__header">
<article>
<p>ITEMS standaard</p>
<em>10</em>
</article>

<article>
<p>ITEMS plus</p>
<em>20</em>
</article>
</div>

    <section class="tellerstand-page__details">
        <h2>GROEPSOVERZICHT</h2>
       <table>
        <tr>
            <th>GROEPSNAAM</th>
            <th>MAX. UITLENINGEN</th>		
            <th>MAX. VRIJE UITLENINGEN</th>
            <th>MAX. VRIJE VERLENINGEN</th>
        </tr>
        <tr>
            <td>003451</td>
            <td>6</td>		
            <td>€ 1870,24</td>
            <td>3</td>
        </tr>
        <tr>
            <td>006753</td>
            <td>7</td>		
            <td>€ 2620,70</td>
            <td>7</td>
        </tr>
        <tr>
            <td>007962</td>
            <td>9</td>		
            <td>€ 1684,44</td>
            <td>3</td>
        </tr>
        </table>
    </section>


        <section class="tellerstand-page__details">
        <h2>DETAILS</h2>
       <table>
        <tr>
            <th>BARCODE</th>
            <th>TRANSACTIE</th>		
            <th>TRANSACTIE DATUM</th>
            <th>DATUM RETOUR</th>
            <th>TITEL</th>
            <th>MATERIAAL</th>
            <th>LOCATIE</th>
            <th>SOORTEENHEID</th>
        </tr>
        <tr>
            <td>100064478392</td>
            <td>Uitlenen</td>		
            <td>23 aug 2022</td>
            <td>23 aug 2022</td>
            <td>Rachael Lippincott, Mikki Daughtry</td>
            <td>DVDSPM</td>
            <td>Oosterdok</td>
            <td>DVDSPM teller leenpas+</td>
        </tr>
        <tr>
            <td>100064478392</td>
            <td>Uitlenen</td>		
            <td>23 aug 2022</td>
            <td>23 aug 2022</td>
            <td>Rachael Lippincott, Mikki Daughtry</td>
            <td>DVDSPM</td>
            <td>Oosterdok</td>
            <td>DVDSPM teller leenpas+</td>
        </tr>
        <tr>
            <td>100064478392</td>
            <td>Uitlenen</td>		
            <td>23 aug 2022</td>
            <td>23 aug 2022</td>
            <td>Rachael Lippincott, Mikki Daughtry</td>
            <td>DVDSPM</td>
            <td>Oosterdok</td>
            <td>DVDSPM teller leenpas+</td>
        </tr>
        </table>
    </section>
</section>

<style>
   :root{
		 --oba__Primary__Rood: #FF2E17 ; 
		 --oba__Primary__Wit: #ffff ;
		 --oba__Primay__Zwart: #000000;
		 --oba__Primay__Grijs: #9B9C9F;
	 }    
.tellerstand-page{
    padding: 0 7rem;
}
.tellerstand-page__header{
    display: flex;
    flex-direction: row;
    gap: 2rem;
}
.tellerstand-page__header article:nth-child(2){
    display: flex;
    background: linear-gradient(90deg,rgba(225,194,83,1) 0%,rgba(255,231,183,1) 50%,rgba(225,194,83,1) 100%);
    width: 20rem;
    height: 10rem;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
} 
.tellerstand-page__header article:nth-child(1){
    display: flex;
    background: linear-gradient(90deg,#9b9c9f 0%,rgb(155 156 159 / 46%) 50%,#9b9c9f 100%);
    width: 20rem;
    height: 10rem;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
} 
.tellerstand-page__header article > em{
    font-size:3rem;
    color: var(--oba__Primary__Zwart);
    font-weight: 800;
}
.tellerstand-page__details{
    padding-top: 7rem;
    display: flex;
    flex-direction: column;
}
.tellerstand-page__details table{
    border-collapse: collapse;
    width: 80%;
}
.tellerstand-page__details th{
  font-size: 14px;
  text-align: left;
 color: var(--oba__Primay__Grijs);
 padding: 0 1.5rem;
}
.tellerstand-page__details td{
background-color: white;
padding: 1.5rem;

}


</style>