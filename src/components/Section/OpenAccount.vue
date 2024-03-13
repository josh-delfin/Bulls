<template>
  <v-container fluid class="bg-section" >
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-xl-6 col-lg-8 text-center">
          <v-card class="account-box" style="margin-top: -3%;height: 400px;">
            <h6 class="thrty-six" style="font-weight: 500; font-size: 36px; font-style: normal; color: #142645; line-height: 46px; text-decoration: none; text-transform: none; font-family: 'Josefin Sans'; letter-spacing: 0;">Open an Account Now</h6>
            <p class="text" style="font-weight: 400; font-size: 16px; font-style: normal; color: #142645; line-height: 28px; text-decoration: none; text-transform: none; font-family: 'Open Sans'; letter-spacing: 0;">Unlock Your Trading Potential: for Beginners in Crypto <br/> and Stock Trading</p>
            <div class="button-box">
              <v-btn color="primary" class="button-1" style="font-weight: 600; font-size: 18px; font-style: normal; color: #ffffff; line-height: 55px; text-decoration: none; text-transform: capitalize; font-family: 'Open Sans'; letter-spacing: 0; background-color: #66cc33 !important;">GET STARTED NOW</v-btn>
            </div>
          </v-card>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'YourComponentName',
};
</script>

<style>
.bg-section {
  background-image: url('/img/open-account.png');
  background-size: 100% 300px;
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
}

.account-box {
  padding: 120px 40px 120px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0px 5px 49px 0px rgba(51, 42, 147, 0.54);
}

.account-box p {
  margin: 0 auto 15px;
  width: 80%;
}

.thrty-six {
  font-size: 36px;
  line-height: 46px;
  color: #142645;
}

.text {
  color: #142645;
}

.button-box .button-1 {
  width: 75%;
  border-radius: 10px;
  box-shadow: 1.414px 1.414px 38px 0px rgba(102, 204, 51, 0.6);
  border: 0;
  margin: 0 auto 0;
  height: 55px;
  line-height: 55px;
}
</style>
