<template >
  <v-app>
    <v-img :src="backgroundImage" class="background">
      <v-app-bar color="#00000000" class="mx-5 mt-5" app flat>
        <v-toolbar-title id="logo" class>PetStories</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="#4D4D4D4D" large dark depressed>LOGIN</v-btn>
      </v-app-bar>
      <v-content>
        <Info />
      </v-content>
    </v-img>
  </v-app>
</template>

<script>
import Info from "./components/Info";

export default {
  name: "App",

  components: {
    Info
  },

  data: () => ({
    backgroundImage:
      "https://firebasestorage.googleapis.com/v0/b/pet-stories-493e1.appspot.com/o/webpage-assets%2Fbackground.jpg?alt=media&token=6d15684e-ecee-409c-88d1-eb5b269393db"
  })
};
</script>

<style scoped>
#logo {
  font-family: "Pacifico", cursive;
}

.background {
  height: 100%;
  max-height: 100vh;
}
</style>
