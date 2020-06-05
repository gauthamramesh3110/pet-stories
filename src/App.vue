<template >
  <v-app style="background: url('https://firebasestorage.googleapis.com/v0/b/pet-stories-493e1.appspot.com/o/webpage-assets%2Fbackground.jpg?alt=media&token=6d15684e-ecee-409c-88d1-eb5b269393db'); background-size:cover">
    <v-app-bar color="#00000000" class="mx-5 mt-5" app flat>
      <v-toolbar-title id="logo" class>PetStories</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="#4D4D4D4D" large dark depressed>LOGIN</v-btn>
    </v-app-bar>
    <v-content>
      <Info
        data-aos="fade"
        data-aos-delay="0"
        data-aos-duration="200"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      />
      <List />
    </v-content>
  </v-app>
</template>

<script>
import Info from "./components/Info";
import List from "./components/List";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "App",

  components: {
    Info,
    List
  },

  data: () => ({
    backgroundImage:
      "https://firebasestorage.googleapis.com/v0/b/pet-stories-493e1.appspot.com/o/webpage-assets%2Fbackground.jpg?alt=media&token=6d15684e-ecee-409c-88d1-eb5b269393db"
  }),

  methods: {
    onScroll(e) {
      let offset = e.target.scrollTop;
      console.log(offset);
    }
  },

  created() {
    AOS.init({
      mirror: true
    });
  }
};
</script>

<style scoped>
#logo {
  font-family: "Pacifico", cursive;
}

.home{
  background-image: url("https://firebasestorage.googleapis.com/v0/b/pet-stories-493e1.appspot.com/o/webpage-assets%2Fbackground.jpg?alt=media&token=6d15684e-ecee-409c-88d1-eb5b269393db")
}

</style>
