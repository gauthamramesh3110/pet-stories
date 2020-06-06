<template>
  <v-card class="mx-2 mt-11 mb-1">
    <v-toolbar color="primary dark">
      <v-container fluid>
        <v-row no-gutters align="center">
          <v-col cols="6" v-if="$vuetify.breakpoint.smAndUp">
            <v-btn-toggle background-color="#00000000" dark mandatory borderless v-model="tab">
              <v-btn
                color="#4D4D4D4D"
                depressed
                v-for="(serviceType,index) in serviceTypes"
                :key="index"
              >{{serviceType}}</v-btn>
            </v-btn-toggle>
          </v-col>
          <v-col cols="6" v-if="$vuetify.breakpoint.xsOnly">
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-btn color="#4D4D4D4D" dark v-on="on" depressed >
                  <v-icon small class="mr-3">fas fa-caret-down</v-icon>
                  {{serviceTypes[tab]}}
                </v-btn>
              </template>
              <v-list>
                <v-list-item  v-for="(serviceType,index) in serviceTypes" :key="index" @click="tab=index">
                  <v-list-item-title>{{serviceType}}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
          <v-col cols="6" class="d-flex justify-end">
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-btn color="#00000000" dark v-on="on" depressed v-model="currentCity">
                  <v-icon left small>fas fa-map-marker-alt</v-icon>
                  {{currentCity}}
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(city, index) in cities" :key="index" @click="currentCity=city">
                  <v-list-item-title>{{city}}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>
      </v-container>
    </v-toolbar>
    <v-window v-model="tab">
      <v-window-item>
        <Groomers />
      </v-window-item>
      <v-window-item>Vetenarians</v-window-item>
      <v-window-item>Pet Sitters</v-window-item>
    </v-window>
  </v-card>
</template>

<script>
import Groomers from "./Groomers";

export default {
  name: "List",
  components: {
    Groomers
  },
  methods: {

  },
  data: () => ({
    tab: 0,
    currentCity: "Select a City",
    serviceTypes: ["Groomers", "Vetenarians", "Pet Sitters"],
    cities: ["Chennai", "Mumbai", "Kolkata"]
  })
};
</script>

<style scoped>
</style>