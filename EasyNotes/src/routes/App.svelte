<script>

</script>

<main>
    <!--
    Sovelluksen kuvaus:
    Ohjelman avulla käyttäjä pystyy tekemään
    muistiinpanoja opintojaksojen luennoilta.
    Jokainen muistiinpano on liitety yhteen
    opintojaksoon. 

    Ohjelmassa on mahdollisuuus listata tallennetut
    muistiinpanot. Voi lisätä myös uusia opintojaksoja
    
    Kaikki tallennustoiminnot tapahtuvat ohjelmassa
    paikallisesti. Dataa haetaan dokumentissa myöhemmin
    määriteltävästä REST API:sta.
    
    Toiminnot:
    
    Muistiinpanojen tallennus:
    Tekstiä jonka pituus on < 0.
    Jos ei yhtään oj, muistiinpanojen tallennus-näkymään
    ei pääse.
    Muistiinpano pitää liittää liittää oj:hin. (error message käyttäjälle?)
    Muistiinpanolle annetaan tallennushetken aikaleima (Date and time)
    Luonti tapahtuu "sessioissa" (siirtymä)
    yhden session aikana voi tehdä muistiinpanoja
    vain yhdelle oj:lle!
    Sessiossa ekan muistiinpanotallennuksen jälkeen
    opintojakso "lukittuu", eli kaikki sen session
    aikana luodut muistiinpanot tulee liittymään session
    valittuun oj:hin eikä käyttäjä voi vaihtaa oj:ita.
    Uusi sessio selkeän siirtymän kautta (päänäkymässä tai napilla)
    Tallenuksen jälkeen syötekenttä tyhjenee.
    Tallenuksen yhteydessä listataan kaikki
    session aikana luodut muistiinpanot. (listaa ne lol)
    Tässä näkymässä ei voi poistaa muistiinpanoja.
    Näkyy vain -Syötetty teksti, ei muita tietoja
    (Koska ollaan muistiinpanojen teko vaiheessa duh)

    Muistiinpanojen listaus:
    Listaus näyttää oletuksena kaikkien opintojaksojen
    muistiinpanot.
    Listauksessa opintojaksosta näkyvät
    siihen kuuluva teksti,
    siihen liitetyn opintojakson nimi,
    id,
    tallennushetken aikaleima (DATE&&TIME).
    Käyttäjällä on mahdollisuus valita näkymään
    vain tietyn ohjelman tunteman opintojakson muistiinpanot.
    Valinta tapahtuu alasvetovalikon avulla. -Easy
    Listauksessa on mahdollisuus poistaa yksittäinen
    muistiinpano. Jos ei ole lainkaan muistiinpanoja
    (yhteensä tai valitulle oj:lle), näytä teksti
    "Ei muistiinpanoja!" + valinnainen emoji hihi
    
    Opintojakson lisäys:
    Ohjelmassa on mahis lisätä oj:ta. 
    Lisäyksen jälkeen oj:hin voi liittää muistiinpanoja.
    Opintojakson tallennuksen jälkee syötekenttä tyhjenee ja on
    mahdollisuus tallentaa uusi oj. 
    Ohjelma näyttää tallennetun oj:n nimen ja sen id:n,
    esim. "opintojakso 'projektitoiminta' lisätty id:llä 5.".
    
    Objektit:

    Opintojakso (OJ)
    Opintojaksolla on nimi (merkkijono) ja id (kokonaisluku)

    Muistiinpano
    Muistiinpanolla on id (kokonaisluku), teksti(merkkijono), aikaleima(datetime),
    ja siihen yhdistetty opintojakso (opintojakso-objekti).
    
    Datan hakeminen
    Ohjelma hakee opintojaksot ja tallennetut muistiinpanot
    REST API:sta.
    
    Opintojaksot
    Opintojaksot noudetaan osoitteesta:
    https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses
    

    -->
</main>

<style>

</style>
