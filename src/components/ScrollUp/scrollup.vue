<template>
  <div class="main-container">
    <v-speed-dial
      v-model="fab"
      bottom
      right
      direction="top"
      transition="slide-y-reverse-transition"
      class="scroll-up-btn"
      v-show="showFab"
    >
      <template v-slot:activator>
        <v-btn v-model="fab" color="blue darken-2" dark fab @click="scrollToTop">
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-arrow-up</v-icon>
        </v-btn>
      </template>
      <v-btn
  fab
  small
  @click="scrollToTop"
  :style="{ 
    background: 'linear-gradient(45deg, #903eff 0%, #3e19ff 100%)',
    borderRadius: '4px',
    zIndex: 500,
    height: '45px',
    width: '50px',
    position: 'fixed',
    color:'white'
  }"
>

        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>

<script>
import { mdiBorderRadius } from '@mdi/js';

export default {
  data: () => ({
    fab: false,
    showFab: false
  }),
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 700) {
        this.showFab = true;
      } else {
        this.showFab = false;
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<style scoped>
.scroll-up-btn {
  background: linear-gradient(45deg, #903eff 0%, #3e19ff 100%);
  position: fixed;
  bottom: 5%;
  left: 95%;
  z-index: 500; /* Ensure it's above other content */
  height: 45px;
  width: 50px;
  border-radius: 4px;
  color: white !important;
}
</style>
