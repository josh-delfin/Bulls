<template>
  <div>
    <Banner />
    <ScrollUp />
    <Counter />
    <Feature />
    <Portfolio />
    <Price />
    <Testimonials />
    <OpenAccount />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Banner from "@/components/ViewSection/Banner.vue";
import ScrollUp from "@/components/ScrollUp/scrollup.vue";
import Counter from "@/components/ViewSection/Counter.vue";
import Feature from "@/components/ViewSection/Feature.vue";
import Portfolio from "@/components/ViewSection/Portfolio.vue";
import Price from "@/components/ViewSection/Price.vue";
import Testimonials from "@/components/ViewSection/Testimonials.vue";
import OpenAccount from "@/components/ViewSection/OpenAccount.vue";

const scrollToTop = ref(false);

const scrollToTopMethod = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.addEventListener("scroll", () => {
  scrollToTop.value = window.scrollY > 0;
});
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "YourComponentName",
  components: {
    Banner,
    ScrollUp,
    Counter,
    Feature,
    Portfolio,
    Price,
    Testimonials,
    OpenAccount,
  },
});
</script>
