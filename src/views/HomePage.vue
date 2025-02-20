<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="overlay">
        <div class="hero-content">
          <h1>Välkommen till ISVE</h1>
          <p>Ingen ska vara ensam - Högtider i gemenskap</p>
          <p><strong style="color: #A83698">Tillsammans, kan vi motverka ofrivillig ensamhet!</strong></p>
        </div>
      </div>
    </section>

    <!-- Facebook Feed Section -->
    <section class="facebook-feed">
      <div class="container">
        <h2>Följ oss på Facebook</h2>
        <div id="fb-root"></div>
        <div class="fb-page"
             data-href="https://www.facebook.com/profile.php?id=61559910945862"
             data-tabs="timeline"
             data-width=""
             data-height=""
             data-small-header="false"
             data-adapt-container-width="true"
             data-hide-cover="false"
             data-show-facepile="true">
          <blockquote cite="https://www.facebook.com/profile.php?id=61559910945862" class="fb-xfbml-parse-ignore">
            <a href="https://www.facebook.com/profile.php?id=61559910945862">ISVE Facebook-sida</a>
          </blockquote>
        </div>
      </div>
    </section>

        <!-- Huvudsponsor: Sparbanken Tanum -->
        <section class="sponsor">
      <div class="container">
        <h2>Vår Huvudsponsor: Sparbanken Tanum</h2>
        <p>
          Sparbanken Tanum spelar en central roll i att stödja föreningslivet i Bohuslän. Genom sitt
          engagemang och finansiella stöd bidrar de till att stärka lokalsamhället och skapa nya möjligheter
          för föreningar och samhällsprojekt i regionen.
        </p>
        <p>
          Med ett starkt fokus på hållbar utveckling och samhällsengagemang arbetar Sparbanken Tanum outtröttligt
          för att främja en levande och inkluderande föreningskultur. Deras fantastiska insatser har gjort en märkbar
          skillnad för många lokala initiativ, och tack vare deras stöd kan vi fortsätta vårt uppdrag att säkerställa
          att ingen ska fira högtider ensam.
        </p>
        <a class="sponsor-link" href="https://www.sparbankentanum.se" target="_blank" rel="noopener">
          Besök Sparbanken Tanum
        </a>
        <div>
          <img src="../assets/sponsor.jpg" style="width:70%">
        </div>
        
      </div>
    </section>


      <!-- Call-to-Action: Gör som oss -->
      <section class="cta-similar">
      <div class="container">
        <h2>Vill du göra detsamma som oss?</h2>
        <p>
          Är du intresserad av att skapa gemenskap och arrangera evenemang för att ingen ska vara ensam?
          Kontakta oss för att få veta hur du kan bidra och sprida värme i ditt lokalsamhälle.
        </p>
        <router-link class="cta-button" to="/kontakt">Kontakta oss</router-link>
        <div id="fb-root"></div>

<div class="fb-post">
  <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61559910945862%2Fvideos%2F857657919877310%2F&show_text=false&width=560&t=0"
  height="720"
  width="500"
  scrolling="no" 
  frameborder="0"
  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
  allowfullscreen
  ></iframe>
</div>

      </div>
    </section>
  </div>
  




</template>

<script>
export default {
  name: "HomePage",
  mounted() {
    // Ladda Facebook SDK om det inte redan finns
    if (!window.FB) {
      (function(d, s, id) {
        let js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/sv_SE/sdk.js#xfbml=1&version=v13.0";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    } else {
      window.FB.XFBML.parse();
    }
  }
};
</script>

<style scoped>
.home-page {
  font-family: 'Helvetica Neue', sans-serif;
}

/* Sponsor Section */
.sponsor {
  padding: 4rem 1rem;
  text-align: center;
  background: white
}

.sponsor .container {
  max-width: 1200px;
  margin: 0 auto;
  
}

.sponsor h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.sponsor p {
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0.5rem auto;
}

.sponsor-link {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.8rem 1.5rem;
  background-color: #ff7e5f;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.sponsor-link:hover {
  background-color: #feb47b;
}

/* Hero Section */
.hero {
  position: relative;
  height: 80vh;
  background: url('../assets/icononly_transparent_nobuffer.png') no-repeat center center/cover;
  background-color: white;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  text-align: center;
  color: #fff;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.5rem;
}

/* Facebook Feed Section */
.facebook-feed {
  padding: 2rem 1rem;
  background-color: #f9f9f9;
}

.facebook-feed .container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.facebook-feed h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

/* Call-to-Action: Gör som oss */
.cta-similar {
  padding: 4rem 1rem;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  color: #fff;
  text-align: center;
}

.cta-similar .container {
  max-width: 1200px;
  margin: 0 auto;
}

.cta-similar h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-similar p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.cta-button {
  background-color: #fff;
  color: #ff7e5f;
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #f1f1f1;
}
.fb-post {
  margin-top: 50px;
  justify-content: center;
  align-items: center;

}

.fb-post iframe {
  width: 720px;
  height: 500px;
  display: block;  /* Ensures margin auto works */
  margin: 0 auto; 

}

@media (max-width: 750px) {
  .fb-post iframe {
    width: 100%;   /* Takes full width */
    height: 250px;  /* Adjusts height proportionally */
    margin: 0 auto; /* Centers the element horizontally */
  }
}
</style>
