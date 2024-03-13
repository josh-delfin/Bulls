<template>
  <div>
    <Navbar />
    <Banner />
    <Counter />
    <Portfolio />
    <Price />
    <Price1 />
    <Testimonials />
    <OpenAccount />
    <Footer />
  </div>
</template>

<script setup lang="ts">
  import Navbar from '@/components/Header/Navbar.vue';
  import Banner from '@/components/Section/Banner.vue';
  import Counter from '@/components/Section/Counter.vue';
  import Portfolio from '@/components/Section/Portfolio.vue';
  import Price from '@/components/Section/Price.vue';
  import Price1 from '@/components/Section/Price1.vue';
  import Testimonials from '@/components/Section/Testimonials.vue';
  import OpenAccount from '@/components/Section/OpenAccount.vue';
  import Footer from '@/components/Footer/Footer.vue';
  const name = 'PageComponent';
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name,
  components: {
    Navbar,
    Banner,
    Counter,
    Portfolio,
    Price,
    Price1,
    Testimonials,
    OpenAccount,
    Footer,
  },
});
</script>
