import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

initializeApp({
  apiKey: "AIzaSyA1gsOnxCTNzCpEpF7OwUCLgTz4HhPRxX4",
  authDomain: "driver-trip-6a932.firebaseapp.com",
  projectId: "driver-trip-6a932",
  storageBucket: "driver-trip-6a932.appspot.com",
  messagingSenderId: "805269538388",
  appId: "1:805269538388:web:0d20331b644824d42ecfc1",
  measurementId: "G-9DFXE7VMXJ"
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
