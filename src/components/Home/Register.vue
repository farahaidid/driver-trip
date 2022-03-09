<template>
  <v-app>
    <div class="pt-12">
      <h2>Please Register</h2>
      <form @submit.prevent="submited" class="form">
        <v-text-field
          v-model="email"
          label="E-mail"
          :rules="emailRules"
          prepend-icon="mdi-account-circle"
          required
        />

        <v-text-field
          v-model="password"
          label="Password"
          :rules="passwordRules"
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />

        <v-btn type="submit" class="mr-4" color="success"> submit </v-btn>
      </form>
      <div class="mt-8">
        <h3 class="mb-6">OR</h3>
        <p>Register With</p>
        <img
          class="google-icon"
          src="../../assets/Google__G__Logo.svg"
          @click="googleAuth"
          alt=""
        />
      </div>
      <p class="mt-8">
        Already have an account? <router-link to="/">Log In</router-link>
      </p>
    </div>
  </v-app>
</template>

<script>
// import * as firebase from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "@firebase/auth";
require("firebase/auth");

export default {
  data: () => ({
    valid: true,
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 6) || "Password Must At Least 6 Characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    error: "",
    showPassword: false,
  }),

  methods: {
    submited() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.$router.replace({ name: "dashboard" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    googleAuth() {
      const googleProvider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, googleProvider)
        .then(() => {
          this.$router.replace({ name: "dashboard" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
.form {
  width: 40%;
  margin: 0 auto;
}
</style>
