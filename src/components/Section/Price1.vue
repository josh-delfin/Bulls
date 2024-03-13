<template>
    <v-container>
      <v-row>
        <v-col v-for="(pkg, index) in packages" :key="index" cols="12" sm="6" md="4">
          
          <v-card >
            <img :src="pkg.imagePath" alt="Package Image" style="max-height: 200px;">
            <v-card-title style="font-weight: 600; font-size: 24px; font-style: normal; color: #504c89; line-height: 34px; text-decoration: none; transform: none; font-family: 'Josefin Sans'; letter-spacing: 0;">{{ pkg.name }}</v-card-title>
            <v-card-text>
              <ul>
                <li v-for="(feature, idx) in pkg.features" :key="idx" style="font-weight: 400; font-size: 16px; font-style: normal; color: #3b368c; line-height: 23.2px; text-decoration: none; transform: none; font-family: 'Open Sans'; letter-spacing: 0;">{{ feature }}</li>
              </ul>
              <p style="font-weight: 400; font-size: 28px; font-style: normal; color: #ff8a00; line-height: 38px; text-decoration: none; transform: none; font-family: 'Open Sans'; letter-spacing: 0;">Price: {{ pkg.price }} {{ pkg.currency }}</p>
            </v-card-text>
            <v-card-actions class="button-container">
                <v-btn block color="primary" :data-amount="pkg.price" style="color:white; background-color: #66cc33;width: 50px ;height:50px;border-radius: 25px;" >Start Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
<script>
export default {
  data() {
    return {
      packages: [
        {
          name: 'Basic Access',
          features: [
            'Cryptocurrency Signals',
            '24/5 Support',
            'Hourly Updates'
          ],
          price: 97.8,
          imagePath: '/img/price-1.png',
        },
        {
          name: 'Starter Access',
          features: [
            'Cryptocurrency and Stock Signals',
            '24/5 Support',
            'Hourly Updates'
          ],
          price: 178.4,
          imagePath: '/img/price-3.png'
        },
        {
          name: 'Silver Access',
          features: [
            'Cryptocurrency, Stock, and Commodity Signals',
            '24/5 Support',
            'Hourly Updates'
          ],
          price: 201.3,
          imagePath: '/img/price-3.png'
        },
        {
          name: 'Pro Access',
          features: [
            'Comprehensive Signals (Cryptocurrency, Stocks, Commodities)',
            '24/5 Support',
            'Hourly Updates',
            'Technical Analysis Insights'
          ],
          price: 219.9,
          imagePath: '/img/price-1.png'
        },
        {
          name: 'Advanced Access',
          features: [
            'Exclusive Signals for Cryptocurrency, Stocks, and Commodities',
            'Technical and Fundamental Analysis',
            '24/5 Support',
            'Hourly Updates'
          ],
          price: 243.6,
          imagePath: '/img/price-3.png'
        },
        {
          name: 'Gold Access',
          features: [
            'Extensive Signals for Cryptocurrency, Stocks, and Commodities',
            'Advanced Charting Tools',
            'Technical and Fundamental Analysis',
            '24/5 Support',
            'Hourly Updates'
          ],
          price: 312.5,
          imagePath: '/img/price-3.png'
        },
        {
          name: 'Platinum Access',
          features: [
            'Premium Signals for Cryptocurrency, Stocks, and Commodities',
            'Advanced Charting Tools',
            'Technical and Fundamental Analysis',
            'Personalized Support',
            '24/5 Support',
            'Hourly Updates'
          ],
          price: 492.7,
          imagePath: '/img/price-1.png'
        },
        {
          name: 'Elite Access',
          features: [
            'Elite Signals for Cryptocurrency, Stocks, and Commodities',
            'Advanced Charting Tools',
            'Technical and Fundamental Analysis',
            'Personalized Support',
            'Dedicated Account Manager',
            '24/5 Support',
            'Hourly Updates'
          ],
          price: 789.4,
          imagePath: '/img/price-1.png'
        },
        {
          name: 'Diamond Access',
          features: [
            'Diamond Signals for Cryptocurrency, Stocks, and Commodities',
            'Advanced Charting Tools',
            'Technical and Fundamental Analysis',
            'Personalized Support',
            'Dedicated Account Manager',
            'Exclusive Market Insights',
            '24/5 Support',
            'Hourly Updates'
          ],
          price: 1013.3,
          imagePath: '/img/price-3.png'
        },
        {
          name: 'Premier Access',
          features: [
            'Premier Signals for Cryptocurrency, Stocks, and Commodities',
            'Advanced Charting Tools',
            'Technical and Fundamental Analysis',
            'Personalized Support',
            'Dedicated Account Manager',
            'Exclusive Market Insights',
            'Priority Access to New Features',
            '24/5 Support',
            'Hourly Updates'
          ],
          price: 1507.2,
          imagePath: '/img/price-1.png'
        },
        {
          name: 'VIP Access',
          features: [
            'VIP Signals for Cryptocurrency, Stocks, and Commodities',
            'Advanced Charting Tools',
            'Technical and Fundamental Analysis',
            'Personalized Support',
            'Dedicated Account Manager',
            'Exclusive Market Insights',
            'Priority Access to New Features',
            '24/5 Support',
            'Hourly Updates'
          ],
          price: 2484.5,
          imagePath: '/img/price-3.png'
        },
        {
          name: 'Ultimate Access',
          features: [
            'Comprehensive Signals for Cryptocurrency, Stocks, and Commodities',
            'Advanced Charting Tools',
            'Technical and Fundamental Analysis',
            'Personalized Support',
            'Dedicated Account Manager',
            'Exclusive Market Insights',
            'Priority Access to New Features',
            'Customized Trading Strategies',
            '24/5 Support',
            'Hourly Updates'
          ],
          price: 3001.3,
          imagePath: '/img/price-3.png'
        }
      ]
    }
  }
}
</script>

<style scoped>
.v-card {
  text-align: center;
  padding: 20px;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
}

.v-card:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.v-card-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.v-card-text {
  list-style: none;
  padding: 0;
  margin: 0;
}

.v-card-text li {
  margin-bottom: 5px;
}

.v-card-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.package-btn {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
}

.package-btn:hover {
  background-color: #007bff;
  color: #fff;
}

</style>