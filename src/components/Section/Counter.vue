<template>
    <div class="counter">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="6" md="3" class="text-center">
            <div class="page-counter">
              <div class="thmb">
                <img src="/img/counter-1.png" alt="">
              </div>
              <div class="counter-item">
                <h2 class="fifty"><span class="count-num">50</span>M+</h2>
                <p class="text">Trading Volume (USD)</p>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="3" class="text-center">
            <div class="page-counter">
              <div class="thmb">
                <img src="/img/counter-2.png" alt="">
              </div>
              <div class="counter-item">
                <h2 class="fifty"><span class="count-num">400</span>K+</h2>
                <p class="text">Transactions</p>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="3" class="text-center">
            <div class="page-counter">
              <div class="thmb">
                <img src="/img/counter-3.png" alt="">
              </div>
              <div class="counter-item">
                <h2 class="fifty"><span class="count-num">10</span>K+</h2>
                <p class="text">Happy Users</p>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="3" class="text-center">
            <div class="page-counter">
              <div class="thmb">
                <img src="/img/counter-4.png" alt="">
              </div>
              <div class="counter-item">
                <h2 class="fifty"><span class="count-num">20</span>K+</h2>
                <p class="text">Custom Portfolios Created</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CounterComponent'
  }
  </script>
  
  <style scoped>
 .counter {
  padding: 90px 0px 60px;
}
.counter .page-counter {
  margin-top: 30px;
}
.counter .page-counter .thmb {
  margin: 0 auto 0px;
  border-radius: 50%;
  background-color: white;
  -webkit-box-shadow: 0.942px 17.975px 24px 0px rgba(110, 100, 199, 0.22);
          box-shadow: 0.942px 17.975px 24px 0px rgba(110, 100, 199, 0.22);
  width: 100px;
  height: 100px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.counter .page-counter .counter-item {
  margin-top: 34px;
}
.counter .page-counter .counter-item h2.fifty {
  font-size: 40px;
  line-height: 60px;
  color: #142645;
}
.counter .page-counter .counter-item h2.fifty span {
  font-family: "Josefin Sans", sans-serif;
  font-size: 40px;
  line-height: 60px;
  color: #142645;
}
.counter .page-counter .counter-item p.text {
  color: #142645;
  font-style: normal;
}

  </style>
  