<template>
  <div class="price">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <div class="section-head">
            <h3 class="subtitle">Choose the plan that fits for you</h3>
            <h2 class="title">Unlock a wealth of opportunities with our versatile signals service</h2>
            <p class="text">Empower your trading journey with actionable insights and continuous signal access, empowering you to make well-informed decisions in various markets.</p>
            <p class="text">Join now to elevate your trading experience and seize potential opportunities with confidence.</p>
          </div>
          <div class="currency-links">
            <a id="eur" class="cur_pick normal" @click="changeCurrency('eur')">EUR</a>/ 
            <a id="usd" class="cur_pick normal" @click="changeCurrency('usd')">USD</a>/
            <a id="gbp" class="cur_pick normal" @click="changeCurrency('gbp')">GBP</a>/
            <a id="aud" class="cur_pick normal" @click="changeCurrency('aud')">AUD</a>/
            <a id="cad" class="cur_pick normal" @click="changeCurrency('cad')">CAD</a>
          </div>
        </v-col>
      </v-row> 
            
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      plans: [
        // Your plans data here
      ]
    };
  },
  methods: {
    changeCurrency(currency) {
      // Add logic to change currency
    }
  }
};
</script>

<style scoped>
.price {
  padding: 60px 0px 90px;
}
.price .section-head {
  margin-bottom: 30px;
}
.price .currency-links {
  margin-top: 20px;
}
.price .currency-links a {
  margin-right: 5px;
}
.currency-links {
  font-size: 1.6em;
  text-align: center;
  padding: 20px;
}

.currency-links a {
  text-decoration: none;
  /* color: #333; Dark grey */
  margin: 0 10px;
}

/* 
.currency-links a:hover {
  color: #007BFF; Light blue 
}
*/

.cur_pick{
  font-size: 40px;
}

.currency-links a.normal {
  color: #333; /* Dark grey */
}

.currency-links a.active,
.currency-links a.normal:hover {
  color: #007BFF; /* Light blue */
}
</style>
