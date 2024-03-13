<template>
  <v-app>
    <v-app-bar app height="180" color="primary" style="background-color: transparent !important;  position: sticky !important;" >
      <v-toolbar-title style="margin-left: 8%;">
        <img src="/img/tran_logo.png" alt="Logo" height="150">
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="navbutton1">
        <v-btn text class="navbutton">Home</v-btn>
        <v-btn text class="navbutton">Packages</v-btn>
        <v-btn text class="navbutton">About</v-btn>
        <v-btn text class="navbutton">Contacts</v-btn>
        <v-btn text class="navbutton" style="height: 50px; background-color: #66cc33; border-radius: 25px; border: 1px solid white;">Members Entry</v-btn>
        <v-btn text class="navbutton" style="height: 50px; background-color: #66cc33; border-radius: 25px; border: 1px solid white;">Buy Package</v-btn>
      </div>
    </v-app-bar>

    <!-- Your main content here -->

  </v-app>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
.navbutton { 
  margin-left: 10px;
  margin: 5px;
  font-weight: 600;
  font-size: 16px;
  font-style: normal;
  color: #ffffff;
  line-height: 28px;
  text-decoration: none;
  text-transform: capitalize;
  font-family: 'Open Sans', sans-serif; /* You need to add the font family correctly */
  letter-spacing: 0;
}
.navbutton1{
  margin-right: 10%; /* Adjusted margin-left to 10% */
}
</style>
