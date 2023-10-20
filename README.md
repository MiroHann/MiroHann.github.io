# Vertais arviointia varten!

#  <span style="color:lightgreen;">HTML </span>

1. **Basic HTML structure is present**
 - Tämän löytää heti HTML tiedoston avatessa!
 2. **HTML structure with clear content differentiation (headings, paragraphs, lists)**
 - Verkkosivulla on selvä erottelu.
 3. **Use of forms, links, and media**
 - Formin löytää contact.htm tiedostosta.
 - Linkkejä esiintyy kuvissa sekä otskikoissa, kuten otsikon ME alla olevasta kuvasta ja sivun pää otsikosta.
 - media löytyy pää sivulta kuvien muodossa galleriassa sekä ME otsikon alta.
 4. **Tables are effectively used**
 - Tämän näkee Skills/hobbies osuuden alla jossa on esitetty taitoja taulukon muodossa
 5. **Consistent use of semantic HTML throughout, ensuring better structure and understanding of the content.**
 - Tämän näkee yleisesti htm tiedostossa

 #  <span style="color:lightblue;">CSS </span>
 1. **Basic CSS styling (colors, fonts).**
 - Tämän näkee jo heti nettisivun avatessa sillä värit ja fontit ovat muutettuja
 2. **Use of classes and IDs to style specific elements.**
 - Avatessa Webstyle tai ContactStyle CSS teidostot voi niissä heti nähdä molempia toteutus tapoja! Käytin enemmän Class pohjaista osoitusta, mutta responsiivisuuden ohjaavassa osiossa käytin myös hiukan ID pohjaista osoitusta!
 ![Kuva ID pohjaisesta osoituksesta!](/READMEASSESTS/IDOsoitus.png)
 3. **Implementation of responsive design elements.**
 - Nämä näkee vaihtaessa puheli näkymään jolloin etusivulla olevat elementit muutuvat tehdäkseen sivusta luettavamman. 
 - Etusivulla olevat flexboxit muutuvat column orientaatioon näytön koon muutuessa tarpeeksi pieneksi!
 - Galleria elementti muutuu hieman tiivimmäksi jotta sitä on helpompi käyttää!
 ![Kuva ID pohjaisesta osoituksesta!](/READMEASSESTS/Responsive.gif)
 4. **Use of layouts for advanced user interfaces (arrays, float, flexbox, css grid)**
 - Nettisivulla on käytetty molempia Flex-boxeja sekä Gridejä. Etusivulla on kolme flex-boxia ja grid.
 5. **Styling demonstrates a strong grasp of layout principles, aesthetics, and user experience.of the content.**
 - Ei ole oikein silmää frontend rakentamiseen, mutta toivottavasti netti sivu on luettava.

  #  <span style="color:yellow;">JAVA </span>
  1. **Simple interactions (like alerts on button click).**
  - Tämä varmaan täytyy ajastimessa joka aloitetaan heti sivun latauksessa joka laukaisee alertin nettisivulla joka kysyy käyttäjältä tykkääkö hän nettisivusta.
  ![Image of the alert](/READMEASSESTS/alert.png)
  2. **Multiple event listeners and basic DOM manipulations.**
  - Nettisivulla on lomake elementti, 4 nappia, linkkejä jotka kaikki sisältävät kuuntelijoita. 
  - Napit tekevät DOM manipuloitia galleriassa vaihtaakseen kuvaa ja muita elementtejä!
  - Ajastettu alert joka kysyy käyttäjän mielipidettä vaihtaa otsikon vieressä olevaa emojia! 
  - Lomakke sisältää eri virheen käsittelyjä jotka kertovat käyttäjälle DOM manipulaatiota käyttäen mistä virheestä on kyse!
  3. **Use of arrays, objects, and functions.**
  - Kurkkaamalla javascriptiin näkee, että sivulla on käytetty kaikkia.
  - Arraytä käytin kuvien osotteiden talletamiseen. 
  - Objecteja ohjaamaan gallerian toiminnalisuutta. 
  - Funtioita taas on vähän joka paikassa.
  4. **Advanced logic, looping through data, and dynamic DOM updates.**
  - Voit dynaamisesti vaikutta DOM elementteihin galleriassa. Javascript tiedostotoissa molemmissa on logiikkaa ja loopeja!
  5. **Consistent use of Object-Oriented JavaScript principles.**
  - Verkkosivun kuva galleriassa käytettiin molempia luokkia sekä objecteja jotka ohjaavat gallerian toiminnallisuutta. 

  #  <span style="color:red;">ASYNCHRONOUS OPERATIONS</span>
  1. **Use of timers**
  - Heti ensimmäisellä sivulla näkee vaihtuvan kuvan joka käyttää ajastinta. Ensimmäiseltä sivulta myös löytyy ajastettu alertti joka pomppaa käyttäjälle tietyn ajan täyttessä. josta löytyy JAVA osuudesta kuva! 
  2. **Successful implementation of an AJAX call or Fetch**
  - Contact sivulla on formi joka tekee POSTin tietokantaan josta löytyy kohdassa viisi demovideo sekä contact sivulla on myös alaviittessä nappi jolla voi hakea kuvan koirasta https://dog.ceo/api/breeds/image/random apia käytteäen. jotka molemmat käyttävät fetchiä!
  3. **Data from the asynchronous call is displayed on the webpagev**
  - Contact sivulla on alaviitteessä nappi jossa lukee "press me for an image!" jos paina nappia tekee nettisivu API callin fetchiä käyttäen https://dog.ceo/api/breeds/image/random API:ta
  4. **Error handling is implemented (for failed API calls, etc.)**
  - Formissa on POSTi jossa on virheen käsittelyä. Jos kokeilet painaa sitä antaa se virheen ensin tyhjistä kentistä, mutta jos kentät ovat täytetty valittaa se verkko ongelmasta nettisivulla.
 5. **Effective use of asynchronous data to enhance user experience (like filtering, sorting).**
 - Form käyttää fetch kirjastoa lähettääkseen POST methodilla tiedot tietokantaan.
 - Formissa on myös virheen käsittely joka estää POST methodin yrityksen jos yhetyttä ei saada tehtyä backendiin
 - Demo toiminnalisuudesta! https://youtu.be/yVWTNesLfD4