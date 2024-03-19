<template>
  <v-container>
    <v-row justify="between"  align="center">
      <v-col cols="12" xxl="5" lg="6">
        <div class="section-head fade-up">
          <h3 class="subtitle" style="color: #66cc33;">The {{ websiteName }} Story</h3>
          <h2 class="title">The future is digital.</h2>
          <p class="text">
            {{ websiteName }} is the best way to receive trading signals from world-wide financial markets. Businesses small and large, as well as private traders rely on our data to power their decision-making.
          </p>
          <v-list class="flex-list" style="display: flex; flex-wrap: wrap; margin-left: -5%;">
  <v-list-item v-for="(item, index) in features" :key="index" class="list-item fade-up" :style="{ 'animation-delay': index * 0.4 + 's' }" style="flex: 0 0 calc(50% - 20px); margin: 5px;">
    <v-list-item-icon>
      <img src="/img/check.png" alt="Check Icon" style="background-color: #66cc33; padding: 8px; border-radius: 50%; width: 30px; height: 30px;">
    </v-list-item-icon>
    <v-list-item-content>
      <img src="/img/check.png" alt="Example Image" style="max-width: 100%; height: auto; margin-top: -18%;">
      <p class="texts" style="margin-top: -12%;margin-left: 20%;">{{ item }}</p>
    </v-list-item-content>
  </v-list-item>
</v-list>
        </div>
      </v-col>
      <v-col cols="12" lg="6" class="col-lg-6 d-lg-block d-none">
        <div class="pic wow fadeInRight" data-wow-duration="0.4s" data-wow-delay="0.4s">
                        <img src="/public/img/feature.png" alt="">
                    </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'YourComponentName',
  data() {
    return {
      websiteName: 'Bull Signal',
      features: ['Real-Time API', 'Historical Data', 'Market Analysis', 'Case Studies']
    };
  }
}
</script>

<style scoped>
.section-head {
  margin-bottom: 26px;
  
  
}
.section-head h3.subtitle {
  color: #66cc33;
}
.section-head h2.title {
  color: #142645;
  padding: 21px 0 16px;
}
.section-head p.text {
  color: #5d5779;
}

/* Feature Start */
.feature {
  padding: 60px 0px 120px;
}
.feature .section-head {
  margin-bottom: 6px;
}
.feature .section-head h2.title {
  color: #142645;
  padding: 21px 0 16px;
}
.feature .list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.feature .list .list-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 20px;
  width: 50%;
}
.feature .list .list-item .thumb {
  margin-right: 20px;
  min-width: 40px;
}
.feature .list .list-item .thumb .icon {
  border-radius: 50%;
  background-color: #66cc33;
  -webkit-box-shadow: 0px 4px 13px 0px rgba(139, 123, 217, 0.14);
  box-shadow: 0px 4px 13px 0px rgba(139, 123, 217, 0.14);
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
}
.feature .list .list-item p.text {
  color: #33276a;
}
.feature .pic img {
  max-width: unset;
}

/* Fade up animation */
.fade-up {
  animation: fadeInUp 0.4s ease forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media only screen and (max-width: 768px) {
  .flex-list {
    flex-direction: column;
  }
  .list-item {
    flex-basis: calc(100% - 20px);
    margin: 5px;
  }
  .texts {
    margin-left: 0;
    margin-top: 0;
  }
}

</style>
