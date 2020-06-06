<template >
  <v-app id="home">
    <v-img class="overflow-y-auto" :src="backgroundImage" contain position="top">
      <AppBar />
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
    </v-img>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar";
import Info from "./components/Info";
import List from "./components/List";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "App",

  components: {
    Info,
    List,
    AppBar
  },

  data: () => ({
    backgroundImage:
      "https://firebasestorage.googleapis.com/v0/b/pet-stories-493e1.appspot.com/o/webpage-assets%2Fcat-background.png?alt=media&token=71fcaf39-260f-45d0-89bc-192becd29aca"
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
#home {
  background: black;
  background-size: contain;
}
</style>
