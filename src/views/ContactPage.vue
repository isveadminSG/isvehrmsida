<template>
    <div class="contact-page">
      <div class="container">
        <h1>Kontakt</h1>
        <p>Kontakta oss för information kring våra evenemang eller om du är intresserad av att bidra.</p>
        <form @submit.prevent="submitForm" novalidate>
          <div class="form-group">
            <label for="name">Namn</label>
            <input type="text" id="name" v-model="form.name" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>
          <div class="form-group">
            <label for="message">Meddelande</label>
            <textarea id="message" v-model="form.message" rows="5" required></textarea>
          </div>
          <button type="submit" class="cta-button">Skicka</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ContactPage",
    data() {
      return {
        form: {
          name: "",
          email: "",
          message: ""
        }
      };
    },
    methods: {
      submitForm() {
        // Här kan du koppla upp mot en backend eller e-postlösning
        console.log("Formulärdata:", this.form);
        alert("Tack för ditt meddelande!");
        // Återställ formuläret
        this.form = {
          name: "",
          email: "",
          message: ""
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .contact-page {
    padding: 2rem;
    font-family: 'Helvetica Neue', sans-serif;
    background-color: #f9f9f9;
  }
  
  .container {
    max-width: 800px;
    margin: 0 auto;
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  label {
    font-weight: bold;
  }
  
  input,
  textarea {
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  input:focus,
  textarea:focus {
    outline: none;
    border-color: #ff7e5f;
    box-shadow: 0 0 5px rgba(255, 126, 95, 0.5);
  }
  
  .cta-button {
    align-self: center;
    background-color: #ff7e5f;
    color: #fff;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }
  
  .cta-button:hover {
    background-color: #feb47b;
  }
  </style>
  