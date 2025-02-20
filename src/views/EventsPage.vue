<template>
    <div class="events-page">
      <div class="container">
        <h1>Våra Evenemang</h1>
        <div class="calendar-wrapper">
          <!-- Byt ut YOUR_CALENDAR_ID mot ert faktiska kalender-ID -->
          <iframe
            src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=Europe/Stockholm"
            style="border: 0"
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "EventsPage"
  };
  </script>
  
  <style scoped>
  .events-page {
    padding: 2rem;
    font-family: 'Helvetica Neue', sans-serif;
    background-color: #f9f9f9;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .calendar-wrapper {
    margin-top: 2rem;
  }
  </style>
  