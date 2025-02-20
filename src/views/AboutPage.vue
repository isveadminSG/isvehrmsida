<template>
    <div class="about-page">
      <!-- Introsektion -->
      <section class="intro">
        <div class="container">
          <h1>Om Oss</h1>
          <p>
            ISVE (Ingen ska vara ensam - Högtider i gemenskap) grundades med visionen att ingen
            ska behöva fira högtider ensam. Vi arbetar för att skapa gemenskap, värme och minnesvärda
            stunder genom våra evenemang.
          </p>
        </div>
      </section>
  
      <!-- Uppdragssektion -->
      <section class="mission">
        <div class="container">
          <h2>Vårt Uppdrag</h2>
          <p>
            Vårt uppdrag är att erbjuda en plats där alla kan mötas, dela traditioner och fira livets
            höjdpunkter tillsammans. Genom våra arrangemang vill vi sprida glädje och skapa en
            inkluderande miljö för alla.
          </p>
        </div>
      </section>
  
      <!-- Värderingssektion -->
      <section class="values">
        <div class="container">
          <h2>Våra Värderingar</h2>
          <ul>
            <li><strong>Gemenskap:</strong> Vi tror på att förena människor och skapa tillhörighet.</li>
            <li><strong>Inkludering:</strong> Alla är välkomna, oavsett bakgrund. Ensamhet är en <strong style="color: red">känsla</strong> inte en status</li>
            <li><strong>Tradition:</strong> Vi värnar om våra traditioner och förnyar dem för en modern tid.</li>
            <li><strong>Glädje:</strong> Vi strävar efter att sprida positiv energi och lycka i våra evenemang.</li>
          </ul>
        </div>
      </section>
  
      <!-- Historiksektion -->
      <section class="history">
        <div class="container">
          <h2>Vår Historia</h2>
          <p>
            ISVE grundades av tre bröder i lilla orten Munkedal som såg behovet av att motverka ensamhet under
            högtider. Sedan starten har vi vuxit till en stark gemenskap med årliga evenemang som
            lockar mångar deltagare. Genom åren har vi utvecklats och anpassat våra insatser för att
            möta tidens förändringar och behov.
          </p>
        </div>
      </section>
  

    <!-- Teamsektion med gruppbild och interaktiva hotspots -->
    <section class="team">
      <div class="container">
        <h2>Vårt Team</h2>
        <div class="group-photo">
          <img src="../assets/omoss.jpg" alt="Vårt Team" />
          <div 
            v-for="member in team" 
            :key="member.id" 
            class="hotspot" 
            :style="{ top: member.y, left: member.x }"
          >
            <div class="popup">
              <h3>{{ member.name }}</h3>
              <p>{{ member.presentation }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

          <!-- Sponsring -->
    <section class="sponsoring">
      <div class="container">
        <h2>Sponsring</h2>
        <p>
          Vill du stödja vårt arbete och bidra till att ingen ska fira högtider ensam? Genom
          sponsring kan du hjälpa oss att skapa ännu fler minnesvärda evenemang och stärka gemenskapen
          i vårt samhälle. Kontakta oss för mer information om sponsringsmöjligheter och hur du kan
          bli en del av vårt nätverk.
        </p>
      </div>
    </section>
  
      <!-- Bli Involverad -->
      <section class="involved">
        <div class="container">
          <h2>Bli Involverad</h2>
          <p>
            Vill du vara med och sprida gemenskap? Vi söker alltid nya medlemmar och frivilliga som
            vill engagera sig. Kontakta oss för att få veta mer om hur du kan bidra!
          </p>
        </div>
      </section>
    </div>
  </template>
  
  <script>
 export default {
  name: "AboutPage",
  data() {
    return {
      // Koordinater (x, y) anges i procent för att placera hotspot:en på gruppbilden.
      team: [
        { 
          id: 1, 
          name: "Sebastian Göransson", 
          presentation: "'Jag skulle väl säga att jag är en aktiv kille med stora ambitioner, \ngillar inte att sitta still om man säger så. Gillar att lära mig nya saker hela tiden och är inte rädd för att prova på nya saker. Är ganska snäll och omtänksam, ger gärna en hjälpande hand om det bes om.'", 
          x: "30%", 
          y: "40%" 
        },
        { 
          id: 2, 
          name: "Thomas Eriksson", 
          presentation: "'Jag skulle nog beskriva mig som en intensiv men lugn och trygg person. Jag har ofta många järn i elden. Älskar att hitta på saker tillsammans med särbo, vänner och mina barn. Jag har fyra barn och två bonusbarn tillsammans med min särbo Amanda. Jag bor på Pilegård i Munkedal vilket är det gula huset ni känner igen från våra firande. Jag värnar om den familj jag skapat och vill att de som är runt mig ska må så bra som möjligt.'", 
          x: "45%", 
          y: "70%" 
        },
        { 
          id: 3, 
          name: "Daniel Göransson", 
          presentation: "'Jag skulle väl säga att jag är en man mitt i livet någonstans. Där jag fortfarande funderar över vad jag vill bli när jag blir stor. Jag är oftast en lugn, trygg och lyssnande person! Jag värdesätter genuinitet.Jag tycker om att vara spontan till vardags. På ledig tid umgås jag med min son Sixten. Där kommer spontaniteten in väl till pass eftersom att han är väldigt ombytlig av sig.'", 
          x: "68%", 
          y: "45%" 
        }
      ]
    };
  }
};
  </script>
  
  <style scoped>
  .about-page {
    font-family: 'Helvetica Neue', sans-serif;
    color: #444;
  }
  
  /* Gemensam container */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
    display: block;
  }
  
  /* Sektioner */
  .intro,
  .mission,
  .values,
  .history,
  .team,
  .involved {
    padding: 4rem 1rem;
    border-bottom: 1px solid #eee;
  }
  
  .intro h1 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  
  .intro p,
  .mission p,
  .history p,
  .involved p {
    font-size: 1.1rem;
    line-height: 1.6;
    text-align: center;
  }
  
  /* Värderingslista */
  .values ul {
    list-style: none;
    padding: 0;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .values li {
    background: #f0f0f0;
    margin: 0.5rem 0;
    padding: 1rem;
    border-radius: 8px;
  }
  
 /* Gruppbild med hotspots */
.group-photo {
  position: relative;
  margin: 2rem 0;
}
.group-photo img {
  width: 100%;
  height: auto;
  display: block;
}

/* Hotspot-styling */
.hotspot {
  position: absolute;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.7);
  border: 2px solid #ff7e5f;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index:10;
}

/* Popup-styling */
.popup {
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
  white-space: pre-wrap;       /* Preserve newlines and wrap text */
width: 500px;
z-index:0;
}
.hotspot:hover .popup {
  opacity: 1;
}

  /* Sponsring sektionen */
.sponsoring h2 {
  text-align: center;
  margin-bottom: 1rem;
}

.sponsoring p {
  max-width: 800px;
  margin: 0 auto;
}

@media (max-width: 750px) {
  .team-members {
    flex-direction: column;
    align-items: center;
  }
  .popup {
    max-width: 250px;
    left: -10px;
    bottom: 0;
  }
}
  </style>
  