<template>
  <v-app>
    <v-app-bar
      app
      color="#FFFFFF"
    >
      <a class="top-logo v-btn col-xs-1" href="#">Logo</a>

      <v-spacer></v-spacer>

      <v-btn text depressed color="normal" xs="1">Home</v-btn>
      <v-btn text depressed color="normal" xs="1">Just added</v-btn>
      <v-btn text class="top-books" color="white" xs="1">Top books</v-btn>
      <v-btn text depressed color="normal" xs="1">Upcoming</v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer
      color="grey darken-4"
      padless
    >
      <v-row
        justify="center"
        no-gutters
      >
        <v-btn
          v-for="link in footerLinks"
          :key="link"
          color="white"
          text
          depressed
          class="my-2"
          style="margin-left: 5px;"
        >
          {{ link }}
        </v-btn>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
// import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  name: 'App',

  components: {
    // HelloWorld,
  },

  data: () => ({
    //
    footerLinks: [
      'Blog',
      'About',
      'Privacy',
      'Terms',
    ],
  }),
});
</script>

<style lang="sass">
  @media (max-width: 800px)
    .top-logo
      width: 20px
  .v-btn
    text-transform: initial !important
  .top-logo
    color: #000000 !important
    margin: 20px
    background-color: #bbbbbd
    padding: 1px 70px
  .top-books
    background-color: #ffcc00 !important
    border-radius: 15px
  footer
    position: fixed !important
    bottom: 0px
    width: 100%
    background: #d4d4d4
</style>