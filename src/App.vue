<template>
  <v-app>
    <v-main>
      <div class="preloader" v-if="isLoading">
        <div class="preloader-inner">
          <div class="preloader-icon">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <router-view v-if="!isLoading"></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'App',
  setup() {
    const isLoading = ref(true);

    setTimeout(() => {
      isLoading.value = false;
    }, 2000);

    return { isLoading };
  },
};
</script>

<style>
/* Your global styles */
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999999999;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #903eff 0%, #3e19ff 100%);
  overflow: hidden;
}

.preloader-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.preloader-icon {
  width: 72px;
  height: 72px;
  display: inline-block;
  padding: 0px;
}

.preloader-icon span {
  position: absolute;
  display: inline-block;
  width: 72px;
  height: 72px;
  border-radius: 100%;
  background: #fff;
  animation: preloader-fx 1.6s linear infinite;
}

.preloader-icon span:last-child {
  animation-delay: -0.8s;
}

@keyframes preloader-fx {
  0% {
    transform: scale(0, 0);
    opacity: 0.5;
  }
  100% {
    transform: scale(1, 1);
    opacity: 0;
  }
}
</style>
