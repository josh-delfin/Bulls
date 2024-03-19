<template>
  <v-container fluid class="banner-container" style="margin-top: -50%">
    <v-row>
      <!-- Column containing the banner content -->
      <v-col cols="12" md="6" xl="7">
        <div class="banner-content">
          <h1
            class="head"
            style="
              color: white;
              font-weight: 700;
              font-size: 70px;
              font-style: normal;
              line-height: 80px;
              text-decoration: none;
              transform: none;
              font-family: 'Josefin Sans', sans-serif;
              letter-spacing: 0;
            "
          >
            Welcome to
            <span
              style="
                font-weight: 700;
                font-size: 70px;
                font-style: normal;
                line-height: 80px;
                text-decoration: none;
                transform: none;
                font-family: 'Open Sans', sans-serif;
                letter-spacing: 0;
              "
              >BullSignals!</span
            >
          </h1>
          <p class="text" style="color: white">
            A place where we empower beginners in the world of trading to
            <br />unlock their full potential. <br />Our mission is to provide
            the best signals and recommendations to help you profit from trading
            while ensuring transparency and discipline. <br />Please note that
            our signals are recommendations; we encourage you to conduct your
            research and make informed decisions.
          </p>
          <div class="label-button" style="margin-top: 5%">
            <label
              style="
                background-color: white;
                color: black;
                padding: 10px;
                border-radius: 35px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 550px;
              "
              for="inputField"
              class="label-input"
            >
              <input
                type="text"
                id="inputField"
                style="width: 50%; padding: 0 5%; color: black"
                placeholder="Unlock your Trading Potential!"
              />
              <button
                id="submitButton"
                style="
                  height: 50px;
                  background-color: #66cc33;
                  border-radius: 35px;
                  width: 150px;
                  padding: 5px;
                  color: white;
                "
              >
                Get Started
              </button>
            </label>
          </div>
        </div>
      </v-col>

      <!-- Column containing the image -->
      <v-col cols="12" md="6" xl="5">
        <div class="bg-shap" style="margin-right: -15px">
          <img
            src="/img/city-man.png"
            alt=""
            class="city-man wow fadeInRight"
            style="height: 100%"
          />
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
  background-image: url("/public/img/banner.png");
  /* Background image applied here */
  background-size: cover;
  background-position: center;
  height: 1250px;
  margin-top: 5%;
}

.banner-content {
  background-color: transparent;
  /* Background color with opacity for content */
  padding: 20px;
  border-radius: 10px;
  margin-top: 30%;
  color: white;
  margin-left: 12%;
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

.banner
  .hero-area
  .banner-content
  .form-group
  input::-webkit-input-placeholder {
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
@media screen and (min-width: 900px) and (max-width: 980px) {
  .banner-container {
    position: relative; /* Revert to default positioning */
    height: auto; /* Allow content to expand naturally */
    overflow: hidden;
    height: auto;
    margin-top: -80% !important;
    height: 800px; 
    text-align: center;
  }
  .bg-shap{
    display: none;
  }
  .banner-content {
    width: 700px;
    position: absolute;
    top: 10%;
    left: 40%;
    transform: translate(-50%, -50%);
  }

  .banner-content h1.head {
    font-size: 70px !important;
    text-align: left;
  }
  .banner-content span{
    font-size: 70px !important;
    text-align: left;
  }
  .banner-content p{
    font-size: 18px !important;
    text-align: left;
  }
  .label-button {
    margin-top: 5%;
    display: flex;
    justify-content: left; /* horizontally center */
    align-items: center; /* vertically center */
  }

}


@media screen and (max-width: 899px) {
  .banner-container {
    height: auto;
    margin-top: -88% !important;
    height: 800px; 
    text-align: center;
  }

  .bg-shap{
    display: none;
  }
  .banner-content {
    width: 700px;
    margin:15% 10%;
  }

  .banner-content h1.head {
    font-size: 50px !important;
    text-align: left;
  }
  .banner-content span{
    font-size: 50px !important;
    text-align: left;
  }
  .banner-content p{
    font-size: 18px !important;
    text-align: left;
  }
  .label-button {
    margin-top: 5%;
    display: flex;
    justify-content: left; /* horizontally center */
    align-items: center; /* vertically center */
  }
}

@media screen and (max-width: 800px) {
  .banner-container {
    margin-top: 8%;
  }

  .bg-shap{
    display: none;
  }
  .banner-content {
    width: 700px;
    margin:25% 5%;
  }

  .banner-content h1.head {
    font-size: 50px !important;
    text-align: left;
  }
  .banner-content span{
    font-size: 50px !important;
    text-align: left;
  }
  .banner-content p{
    font-size: 18px !important;
    text-align: left;
  }
  .label-button {
    margin-top: 5%;
    display: flex;
    justify-content: left; /* horizontally center */
    align-items: center; /* vertically center */
  }
}
@media screen and (max-width: 750px) {
  .banner-container {
    height: auto;
    margin-top: -89% !important;
    text-align: center;
  }

  .bg-shap{
    display: none;
  }
  .banner-content {
    width: 600px;
    margin:20% 5%;
  }

  .banner-content h1.head {
    font-size: 40px !important;
    text-align: left;
  }
  .banner-content span{
    font-size: 40px !important;
    text-align: left;
  }
  .banner-content p{
    font-size: 16px !important;
    text-align: left;
  }
  .label-button {
    margin-top: 5%;
    display: flex;
    justify-content: left; /* horizontally center */
    align-items: center; /* vertically center */
  }
}
@media screen and (max-width: 700px) {
  .banner-container {
    height: auto;
    margin-top: -89% !important;
    height: 650px; 
    text-align: center;
  }
  .bg-shap{
    display: none;
  }
  .banner-content {
    width: 600px;
    margin:20% 5%;
  }

  .banner-content h1.head {
    font-size: 30px !important;
    text-align: left;
  }
  .banner-content span{
    font-size: 30px !important;
    text-align: left;
  }
  .banner-content p{
    font-size: 16px !important;
    text-align: left;
  }
  .label-button {
    margin-top: 5%;
    display: flex;
    justify-content: left; /* horizontally center */
    align-items: center; /* vertically center */
  }
}

@media screen and (min-width: 600px) and (max-width: 699px) {
  .banner-container {
    height: auto;
    margin-top: -104% !important;
    height: 800px;
    text-align: center;
  }

  .bg-shap{
    display: none;
  }
  .banner-content {
    width: 500px;
    margin:25% 5%;
  }

  .banner-content h1.head {
    font-size: 30px !important;
    text-align: left;
  }
  .banner-content span{
    font-size: 30px !important;
    text-align: left;
  }
  .banner-content p{
    font-size: 16px !important;
    text-align: left;
  }
  .label-button {
    margin-top: 5%;
    display: flex;
    justify-content: left; /* horizontally center */
    align-items: center; /* vertically center */
  }
}


@media screen and (min-width: 500px) and (max-width: 599px) {
  .banner-container {
    height: auto;
    margin-top: -125% !important;
    height: 700px;
    text-align: center;
  }

  .bg-shap{
    display: none;
  }
  .banner-content {
    width: 400px;
    margin:25% 5%;
  }

  .banner-content h1.head {
    font-size: 25px !important;
    text-align: left;
  }
  .banner-content span{
    font-size: 25px !important;
    text-align: left;
  }
  .banner-content p{
    font-size: 16px !important;
    text-align: left;
  }
  .label-button {
    margin-top: 5%;
    display: flex;
    justify-content: left; /* horizontally center */
    align-items: center; /* vertically center */
  }
}

@media screen and (min-width: 400px) and (max-width: 499px) {
  .banner-container {
    height: auto;
    margin-top: -157% !important;
    max-width: 100%;
    height: 650px;
    text-align: center;
  }

  .bg-shap{
    display: none;
  }
  .banner-content {
    width: 300px;
    margin:28% 10%;
  }

  .banner-content h1.head {
    font-size: 20px !important;
    text-align: left;
  }
  .banner-content span{
    font-size: 20px !important;
    text-align: left;
  }
  .banner-content p{
    font-size: 14px !important;
    text-align: left;
    margin-top: -5%;
  }
  .label-button {
    margin-top: 5%;
    display: flex;
    justify-content: left; /* horizontally center */
    align-items: center; /* vertically center */
  }
}

@media screen and (min-width: 320px) and (max-width: 399px) {
  .banner-container {
    height: auto;
    margin-top: -195% !important;
    height: 800px;
    text-align: center;
  }

  
  .bg-shap{
    display: none;
  }
  .banner-content {
    width: 300px;
    margin:33% 1%;
  }

  .banner-content h1.head {
    font-size: 20px !important;
    text-align: left;
  }
  .banner-content span{
    font-size: 20px !important;
    text-align: left;
  }
  .banner-content p{
    font-size: 14px !important;
    text-align: left;
    margin-top: -5%;
  }
  .label-button {
    margin-top: 5%;
    display: flex;
    justify-content: left; /* horizontally center */
    align-items: center; /* vertically center */
  }
}


</style>
