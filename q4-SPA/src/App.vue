<template>
  <v-app>
    <v-app-bar
      app
      color="#FFFFFF"
    >
      <v-spacer></v-spacer>

      <v-btn text depressed color="warning">Home</v-btn>
      <v-btn text router :to="{name: 'Home'}" color="warning" :class="currentRoute?'btn-deactive':''">Book List</v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
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
  }),

  computed: {
    currentRoute: function() {
      let route =  this.$route.name
      if (route == null)
        route = 'home'
      return route.search('Detail') == -1 ? true : false
    }
  }

});
</script>

<style lang="sass">
  .btn-deactive
    background-color: #ffcc00 !important
</style>
