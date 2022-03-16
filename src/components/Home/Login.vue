<template>
  <v-app>
    <div class="pt-12 login-container">
      <h2>Please Login</h2>
      <form @submit.prevent="submited" class="form">
        <v-text-field
          v-model="username"
          label="Username"
          prepend-icon="mdi-account-circle"
          required
        />

        <v-text-field
          v-model="password"
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />
        <span class="error--text" v-if="showError">Envalid username or password!</span>

        <div>
          <v-btn type="submit" class="mt-4" color="success"> submit </v-btn>
        </div>
      </form>

    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    password: "",
    username: "",
    error: "",
    showPassword: false,
    showError: false,
  }),

  methods: {
    submited() {
      if (this.username === 'admin' && this.password === 'admin') this.$router.replace({ name: "dashboard" });
      else this.showError = true;
      console.log(this.showError);
    },
  },
};
</script>

<style lang="sass">
.login-container
  width: 30%
  margin: 0 auto

// .error
//   color: #ed4337
//   background: white
</style>
