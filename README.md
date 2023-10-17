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
 - Avatessa Webstyle tai ContactStyle CSS teidostot voi niissä heti nähdä molempia toteutus tapoja!
 3. **Implementation of responsive design elements.**
 - Nämä näkee vaihtaessa puheli nnäkymään jolloin etusivilla olevat elemntit muutuvat tehdäkseen sivusta luettavamman
 4. **Use of layouts for advanced user interfaces (arrays, float, flexbox, css grid)**
 - Nettisivulla on käytetty molempia Flex-boxeja sekä Gridejä. Etusivulla on kaksi flex-boxia ja grid.
 5. **Styling demonstrates a strong grasp of layout principles, aesthetics, and user experience.of the content.**
 - Ei ole oikein silmää frontend rakentamiseen, mutta toivottavasti netti sivu on luettava 

  #  <span style="color:yellow;">JAVA </span>
  1. Simple interactions (like alerts on button click).
  - Tämä varmaan täytyy ajastimessa joka aloitetaan heti sivun latauksessa joka laukaisee alertin nettisivulla joka kysyy käyttäjältä tykkääkö hän nettisivusta.
  ![Image of the alert](/READMEASSETS/alert.png)
  2. Multiple event listeners and basic DOM manipulations.
  - Nettisivulla on form, 4 nappia, linkkejä jotka kaikki sisältävät kuuntelijoita. Napit tekevät DOM manipuloitia galleriassa sekä ajastettu alert joka kysyy käyttäjän mielipidettä vaihtaa otsikon vieressä olevaa emojia!
  3. Use of arrays, objects, and functions.
  - Kurkkaamalla javascriptiin näkee, että sivulla on käytetty kaikkia.
  4. Advanced logic, looping through data, and dynamic DOM updates.
  - Voit dynaamisesti vaikutta DOM elementteihin galleriassa. Javascript tiedostotoissa molemmissa on logiikkaa ja loopeja, mutta javascript.js tiedostossa löytyy suurin osa logiikasta.
  5. Consistent use of Object-Oriented JavaScript principles.
  - Verkkosivun kuva galleriassa käytettiin molempia luokkia sekä objecteja jotka ohjaavat gallerian toiminnallisuutta. 

  #  <span style="color:red;">ASYNCHRONOUS OPERATIONS</span>
  1. Use of timers
  - Heti sivun alussa näkee vaihtuvan kuvan joka käyttää ajastinta sekä ajastettu alertti pomppaa käyttäjälle tietyn ajan täyttessä. 
  2. Successful implementation of an AJAX call or Fetch
  - Contact sivulla on fomi joka tekee POSTin tietokantaan. Contact sivulla on myös footerissa nappi jolla voi hakea kuvan koirasta API:sta
  3. Data from the asynchronous call is displayed on the webpage
  - Nappi contact sivulla tuo koiran kuvan nettisivulle. 
  4. Error handling is implemented (for failed API calls, etc.)
  - Formissa on POSTi jossa on virheen käsittelyä. Jos kokeilet painaa sitä antaa se virheen ensin tyhjistä kentistä, mutta jos kentät ovat täytetty valittaa se verkko ongelmasta nettisivulla.
 5. Effective use of asynchronous data to enhance user experience (like filtering, sorting).
 - Form contact sivulla on tehty auttamaan käyttäjää lähettäämään kommentin tietokantaan. Tämä käyttää fetciä ja sisältää virheen hallintaa.
