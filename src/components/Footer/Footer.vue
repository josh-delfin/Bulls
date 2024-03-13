<template>
  <v-footer class="footer">
    <v-container >
      <v-row justify="space-between" align="center">
        <v-col cols="12" md="2">
          <div class="footer-box">
            <div class="logo">
              <img style="width: fit-content;" src="/img/tran_logo.png" alt="" />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="2">
          <div class="footer-box">
            <h4 class="lasthead">Company</h4>
            <ul class="footer-link" style="margin-top: -15%;">
              <li><a href="about.html">About Us</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" md="2">
          <div class="footer-box">
            <h4 class="lasthead">Policy</h4>
            <ul class="footer-link" style="margin-top: -15%;"">
                <li><a href=" terms.html">Terms of use</a></li>
              <li><a href="privacy.html">Privacy Policy</a></li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" md="2">
          <div class="footer-box">
            <h4 class="lasthead">Contacts</h4>
            <ul class="footer-link">
              <li><a href="terms.html">support@bullssignals.com</a></li>
            </ul>
            <ul class="footer-link">
              <li><span class="companyEmail"></span></li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" md="2">
          <div class="footer-box">
            <div class="logo">
              <img style="height: 40px;" src="/img/Visa_Brandmark_White_RGB_2021.png" alt="" />
              <img style="height: 60px; margin-left: 15%;" src="/img/mc.png" alt="" />
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" style="margin-top: -15%;">
          <div class="footer-bottom">
            <div class="content">
              <p class="text"
                style="font-weight: 400; font-size: 14px; font-style: normal; color: #ffffff; line-height: 23px; text-decoration: none; transform: none; font-family: 'Open Sans'; letter-spacing: 0;">
                Copyright © <span style="color: #ff0073;">2023</span>. All Rights Reserved By <span
                  style="color: #ff0073;">BullsSignals</span>. BullsSignals is owned and operated by Bullss Oceanss LTD,
                registered at 27 Old Gloucester Street, London, UK, 3AX UK
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" style="margin-top: -12%;">
          <div class="footer-bottom margin-none">
            <div class="content">
              <p class="text">
                **Disclaimer**
                <br />
                Trading of Futures, Forex, Stocks, and other asset classes contains substantial risk and is not suited
                for every investor. An investor could potentially lose all or more than the initial investment. Risk
                capital is money that can be lost without jeopardising one's financial security or lifestyle. Only risk
                capital should be used for trading, and only those with sufficient risk capital should consider trading.
                Past performance is not necessarily indicative of future results.
              </p>
              <p>
                Hypothetical performance results have many inherent limitations, some of which are described below. No
                representation is being made that any account will or is likely to achieve profits or losses similar to
                those shown; in fact, there are frequently sharp differences between hypothetical performance results
                and the actual results subsequently achieved by any particular trading program. One of the limitations
                of hypothetical performance results is that they are generally prepared with the benefit of hindsight.
                In addition, hypothetical trading does not involve financial risk, and no hypothetical trading record
                can completely account for the impact of financial risk on actual trading. For example, the ability to
                withstand losses or to adhere to a particular trading program in spite of trading losses is a material
                point which can also adversely affect actual trading results. There are numerous other factors related
                to the markets in general or to theimplementation of any specific trading program that cannot be fully
                accounted for in the preparation of hypothetical performance results and all of which can adversely
                affect trading results.
              </p>
              <p>
                Testimonials appearing on this website may not be representative of other clients or customers and are
                not a guarantee of future performance or success.
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style>
.footer {
  background-color: #1d1f21;
  color: #fff;
  padding: 50px 0;
}

.footer .footer-box {
  margin-bottom: 30px;
}

.footer .footer-box .logo {
  max-width: 150px;
  margin-bottom: 20px;
}

.footer .footer-box h4 {
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 15px;
}

.footer .footer-box ul.footer-link {
  list-style: none;
  padding: 0;
}

.footer .footer-box ul.footer-link li {
  margin-bottom: 10px;
}

.footer .footer-box ul.footer-link li a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer .footer-box ul.footer-link li a:hover {
  color: #ccc;
}

.footer .footer-bottom {
  border-top: 1px solid #333;
  padding-top: 30px;
  margin-top: 30px;
}

.footer .footer-bottom .content {
  text-align: center;
}

.footer .footer-bottom .content p {
  font-size: 14px;
  color: #ccc;
  margin-bottom: 0;
}

.footer .footer-bottom .content a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer .footer-bottom .content a:hover {
  color: #ccc;
}
</style>