<template>
  <v-app>
    <div class="navbar-container">
    <v-app-bar app height="180" :style="appBarStyle" :color="appBarColor" elevation="0" class="navb">
      <v-toolbar-title style="margin-left: 8%;">
        <img src="/public/img/tran_logo.png" alt="Logo" height="150">
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="navbutton1">
        <v-btn text class="navbutton">Home</v-btn>
        <v-btn text class="navbutton">Packages</v-btn>
        <v-btn text class="navbutton">About</v-btn>
        <v-btn text class="navbutton">Contacts</v-btn>
        <v-btn text class="navbutton" style="height: 50px; background-color: #66cc33; border-radius: 25px; border: 1px solid white;">Members Entry</v-btn>
        <v-btn text class="navbutton" style="height: 50px; background-color: #66cc33; border-radius: 25px; border: 1px solid white;">Buy Package</v-btn>
        <!-- Menu Icon with Image -->
        <v-btn icon @click="toggleMenu" class="menu-icon">
          <v-icon>mdi-menu</v-icon>
          <img src="/public/img/menu.png" alt="Menu" style="height: 30px; width: 30px;">
        </v-btn>
      </div>
    </v-app-bar>
  </div>

    <!-- Your main content here -->

    <v-menu offset-y="50" v-model="menuOpen" bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on" class="menu-icon">
          <v-icon>mdi-menu</v-icon>
          <img src="/public/img/menu.png" alt="Menu" style="height: 20px; width: 20px;">
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in menuItems" :key="index" @click="handleMenuItemClick(item)" class="menu-icon">
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      appBarColor: 'transparent',
      appBarStyle: {
        menuPositionX: 'left', // Adjust as needed
      menuPositionY: 'bottom',
      },
      menuItems: [
        { text: 'Home' },
        { text: 'Packages' },
        { text: 'About' },
        { text: 'Contacts' },
        { text: 'Members Entry' },
        { text: 'Buy Package' },
      ],
      menuOpen: false // Add menuOpen to control the dropdown
    };
  },
  computed: {
    // Computed property to dynamically calculate the background color based on scroll position
    scrollColor() {
      return window.pageYOffset > 0 ? '#66cc33' : 'transparent';
    }
  },
  methods: {
    handleScroll() {
      this.appBarColor = window.pageYOffset === 0 ? 'transparent' : '#66cc33';
    },
    handleMenuItemClick(item) {
      // Handle menu item click event here
      console.log('Clicked on:', item.text);
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen; // Toggle menuOpen value
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll); // Listen for scroll event
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll); // Remove scroll event listener
  }
};
</script>

<style scoped>
.navbar-container {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000; /* Adjust as needed */
}
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

.navbutton1 {
  margin-right: 10%; /* Adjusted margin-left to 10% */
}

.menu-icon {
  display: none !important;
}

.v-list-item {
  font-size: 16px;
  font-weight: 500;
  color: #333333;
  background-color: #66cc33;
  width: 100%;
}

.v-list-item:hover {
  background-color: #66cc33;
}
@media only screen and (max-width: 980px) {
  .menu-icon {
    display: block !important;
  }
  .navbutton {
    display: none;
  }
}

@media only screen and (min-width: 981px) {
  .menu-icon {
    display: none !important;
  }
}
</style>
