<template>
  <v-app>
    <div class="pt-12">
      <h2>Please Login</h2>
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

        <v-btn type="submit" class="mx-2" color="success"> submit </v-btn>
        <v-btn class="mx-2" color="warning" @click="forgetPass = !forgetPass"
          >Forget Password</v-btn
        >
      </form>
      <p class="mt-8">
        Don't have an account?
        <router-link to="/register">Register</router-link>
      </p>

      <div v-show="forgetPass">
        <form @submit.prevent="forgetPassSubmited" class="form">
          <v-text-field
            v-model="forgetEmail"
            label="E-mail"
            :rules="emailRules"
            prepend-icon="mdi-account-circle"
            required
          />

          <v-btn type="submit" class="mx-2" color="success"> submit </v-btn>
        </form>
      </div>
    </div>
  </v-app>
</template>

<script>
import * as firebase from "@firebase/auth";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

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
    forgetEmail: "",
    forgetPass: false,
  }),

  methods: {
    submited() {
      const auth = firebase.getAuth();
      firebase
        .signInWithEmailAndPassword(auth, this.email, this.password)
        .then((data) => {
          console.log(data);
          this.$router.replace({ name: "dashboard" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    forgetPassSubmited() {
      const auth = getAuth();
      const email = this.forgetEmail;
      sendPasswordResetEmail(auth, email)
        .then(() => {
          console.log("Password reset email sent!");
        })
        .catch((error) => {
          console.log(error);
          // ..
        });
    },
  },
};
</script>

<style lang="scss"></style>
