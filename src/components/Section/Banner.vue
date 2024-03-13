<template>
  <v-container fluid class="banner-container" style="margin-top: -50%;">
    <v-row>
      <!-- Column containing the banner content -->
      <v-col cols="12" md="6" xl="7">
        <div class="banner-content">
          <h1 class="head" style="
              color: white;
              font-weight: 700;
              font-size: 70px;
              font-style: normal;
              line-height: 80px;
              text-decoration: none;
              transform: none;
              font-family: 'Josefin Sans', sans-serif;
              letter-spacing: 0;
            ">
            Welcome to
            <span style="
                font-weight: 700;
                font-size: 70px;
                font-style: normal;
                line-height: 80px;
                text-decoration: none;
                transform: none;
                font-family: 'Open Sans', sans-serif;
                letter-spacing: 0;
              ">BullsSignals!</span>
          </h1>
          <p class="text" style="color: white">
            A place where we empower beginners in the world of trading to
            <br />unlock their full potential. <br />Our mission is to provide
            the best signals and recommendations to help you profit from trading
            while ensuring transparency and discipline. <br />Please note that
            our signals are recommendations; we encourage you to conduct your
            research and make informed decisions.
          </p>
          <form @submit.prevent="submitForm">
            <v-text-field label="Unlock your Trading Potential !" readonly style="
                border: none;
                color: black;
                background-color: white;
                height: 70px;
                border-radius: 35px;
                font-size: 50px;
                border: none;
                width: 550px;
              ">
              <template v-slot:append>
                <v-btn class="button-1 start_btn" @click="submitForm"
                  style="margin-right: 15px; height: 50px; margin-top: 10px">Get Started</v-btn>
              </template>
            </v-text-field>
          </form>
          <div>
            <v-text-field v-model="labelValue" :label="'Unlock your Trading Potential'" outlined dense
              class="custom-label" width="400" height="50" :style="{
            'border-radius': '25px',
            width: '300px',
            'background-color': 'white',
            color: 'black',
            'text-decoration': 'none',
            '& label:hover': { color: 'black', 'text-decoration': 'none' } // Removes hover effect
          }"></v-text-field>







          </div>
        </div>
      </v-col>

      <!-- Column containing the image -->
      <v-col cols="12" md="6" xl="5">
        <div class="bg-shap" style="margin-right: -15px;">
          <img src="/img/city-man.png" alt="" class="city-man" style="height: 100%" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      websiteName: "Your Website Name", // Set your website name here
      labelValue: "", // Define labelValue here
    };
  },
  methods: {
    submitForm() {
      // Handle form submission here
    },
  },
};
</script>


<style scoped>
.banner-container {
  background-image: url("/img/banner.png");
  /* Background image applied here */
  background-size: cover;
  background-position: center;
  height: 1100px;
  margin-top: 5%;
}

.banner-content {
  background-color: transparent;
  /* Background color with opacity for content */
  padding: 20px;
  border-radius: 10px;
  margin-top: 25%;
  color: white;
  margin-left: 10%;
}

.head,
.text {
  color: #000;
  /* Adjust text color for better readability */
}

.banner {
  background-color: #fff;
  background-image: url("../img/banner.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  padding: 250px 0px 250px;
  position: relative;
}

.banner .bg-shap .city-man {
  position: absolute;
  right: 0px;
  top: 0px;
}

.banner .hero-area {
  position: relative;
  z-index: 3;
}

.banner .hero-area .banner-content h1.head {
  color: #ffffff;
}

.banner .hero-area .banner-content p.text {
  color: #ffffff;
  font-size: 18px;
  line-height: 28px;
}

.banner .hero-area .banner-content .form-group {
  margin: 37px 0px 20px;
  position: relative;
  width: 90%;
}

.banner .hero-area .banner-content .form-group input {
  width: 100%;
  border-radius: 50px;
  padding: 0px 180px 0px 30px;
  background-color: white;
  -webkit-box-shadow: 0px 5px 70px 0px rgba(38, 82, 202, 0.1);
  box-shadow: 0px 5px 70px 0px rgba(38, 82, 202, 0.1);
  height: 70px;
  font-size: 18px;
  line-height: 28px;
  color: #9aa3b7;
}

.banner .hero-area .banner-content .form-group input::-webkit-input-placeholder {
  font-size: 18px;
  color: #9aa3b7;
  line-height: 28px;
}

.banner .hero-area .banner-content .form-group input::-moz-placeholder {
  font-size: 18px;
  color: #9aa3b7;
  line-height: 28px;
}

.banner .hero-area .banner-content .form-group input:-ms-input-placeholder {
  font-size: 18px;
  color: #9aa3b7;
  line-height: 28px;
}

.banner .hero-area .banner-content .form-group input::-ms-input-placeholder {
  font-size: 18px;
  color: #9aa3b7;
  line-height: 28px;
}

.banner .hero-area .banner-content .form-group input::placeholder {
  font-size: 18px;
  color: #9aa3b7;
  line-height: 28px;
}

.banner .hero-area .banner-content .form-group button.button-1 {
  position: absolute;
  top: 10px;
  right: 10px;
  border: 0;
  font-size: 20px;
  text-transform: capitalize;
  border-radius: 50px;
  -webkit-box-shadow: 1.414px 1.414px 38px 0px rgba(102, 204, 51, 0.6);
  box-shadow: 1.414px 1.414px 38px 0px rgba(102, 204, 51, 0.6);
}

.banner .hero-area .banner-content .button-box a.link {
  margin-top: 20px;
}

.banner .hero-area .banner-content .button-box a.link.one {
  margin-right: 30px;
}

.custom-label .v-label {
  opacity: 1;
  transition: none;
  border-radius: 25px;
}

.custom-label .v-label__text {
  pointer-events: none;
  /* Disable pointer events on label text */
}
</style>