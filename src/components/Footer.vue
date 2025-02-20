<template>
    <footer class="footer">
      <div class="container">
        <p>&copy; {{ currentYear }} Ingen ska vara ensam - Högtider i gemenskap (ISVE). Alla rättigheter förbehållna.</p>
        <nav class="footer-nav">
          <ul>
            <li><router-link to="/integritetspolicy">Integritetspolicy</router-link></li>
            <li><router-link to="/villkor">Villkor</router-link></li>
          </ul>
        </nav>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent',
    computed: {
      currentYear() {
        return new Date().getFullYear();
      }
    }
  }
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: #ddd;
    padding: 1rem 0;
    font-size: 0.9rem;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .footer-nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  .footer-nav li {
    margin-left: 1rem;
  }
  
  .footer-nav a {
    color: #ddd;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .footer-nav a:hover {
    color: #fff;
  }
  
  @media (max-width: 600px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .footer-nav ul {
      justify-content: center;
      margin-top: 0.5rem;
    }
  }
  </style>
  