<template>
  <v-card class="mx-auto rounded-0 dashboard-layout">

    <v-app-bar class="px-12" color="" dark prominent>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>

        <v-list class="mt-12">
          <v-list-item
            v-for="option in userOptions"
            :key="option"
            @click="() => {}"
          >
            <v-list-item-title>{{ option }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <div class="sidebar pt-12">
        <div class="circle mb-5"></div>
        <p class="title mb-5">Company Name</p>
        <hr class="mb-12" />
      </div>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>
              <a href="driver-trip" class="link">Driver Trip</a>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <a href="report" class="link">Report</a>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <router-view />
  </v-card>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    userOptions: ['Settings', 'Log Out'],
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="sass" scoped>
.dashboard-layout
  height: 100vh
  
::v-deep .v-card
  border-radius: 0px !important

::v-deep .v-app-bar,
::v-deep .v-toolbar__content
  height: auto !important

.sidebar
  .circle
    width: 150px
    height: 150px
    background: #2EF0D6
    border-radius: 50%
    margin: 0 auto

  .title
    color: black

.link
  text-decoration: none !important
  color: black 
  font-size: 18px
</style>
