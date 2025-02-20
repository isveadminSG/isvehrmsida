<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <img src="../assets/icononly_transparent_nobuffer.png" alt="ISVE logotyp" />
        <h1>ISVE</h1>
      </div>
      <!-- Desktop Navigation -->
      <nav class="navigation">
        <ul>
          <li><router-link to="/">Hem</router-link></li>
          <li><router-link to="/om-oss">Om oss</router-link></li>
          <li><router-link to="/evenemang">Evenemang</router-link></li>
          <li><router-link to="/kontakt">Kontakt</router-link></li>
        </ul>
      </nav>
      <!-- Hamburger Icon for Mobile -->
      <div class="mobile-menu-icon" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <!-- Mobile Navigation Menu -->
    <nav v-if="isMobileMenuOpen" class="mobile-navigation">
      <ul>
        <li><router-link to="/" @click.native="closeMobileMenu">Hem</router-link></li>
        <li><router-link to="/om-oss" @click.native="closeMobileMenu">Om oss</router-link></li>
        <li><router-link to="/evenemang" @click.native="closeMobileMenu">Evenemang</router-link></li>
        <li><router-link to="/kontakt" @click.native="closeMobileMenu">Kontakt</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      isMobileMenuOpen: false
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    }
  }
};
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, #333333, #4B0082);
  padding: 1rem 0;
  color: #fff;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  display: flex;
  align-items: center;
}
.logo img {
  height: 50px;
  margin-right: 0.5rem;
}
/* Desktop Navigation */
.navigation ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}
.navigation li {
  margin-left: 1rem;
}
.navigation a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}
.navigation a:hover {
  color: #ccc;
}
/* Hamburger Icon for Mobile */
.mobile-menu-icon {
  display: none;
  flex-direction: column;
  cursor: pointer;
}
.mobile-menu-icon span {
  background: #fff;
  height: 3px;
  width: 25px;
  margin: 4px 0;
  transition: 0.4s;
}
/* Mobile Navigation Menu */
.mobile-navigation {
  background: linear-gradient(135deg, #333333, #4B0082);
}
.mobile-navigation ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.mobile-navigation li {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.mobile-navigation a {
  display: block;
  padding: 1rem;
  color: #fff;
  text-decoration: none;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .navigation {
    display: none;
  }
  .mobile-menu-icon {
    display: flex;
  }
}
</style>
