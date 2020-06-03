<template>
  <v-container class="mt-10">
    <v-row>
      <v-col xs="12" md="6">
        <v-carousel height="300" cycle show-arrows-on-hover>
          <v-carousel-item v-for="slidePath in carouselImages" :key="slidePath" :src="slidePath"></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col xs="12" md="6">
        <p class="text-center">We help you find your favorite pet groomers</p>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col xs="12" md="6">
        <v-row justify="center" no-gutters>
          <v-icon v-for="(icon, index) in socialIcons" :key="index" class="mx-3">{{icon[0]}}</v-icon>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Info",
  data: () => ({
    carouselImages: [
      "https://firebasestorage.googleapis.com/v0/b/pet-stories-493e1.appspot.com/o/webpage-assets%2Fcarousel-image-1.jpg?alt=media&token=ab627c5d-1bfd-45da-8769-2b8e8539f4d2",
      "https://firebasestorage.googleapis.com/v0/b/pet-stories-493e1.appspot.com/o/webpage-assets%2Fcarousel-image-2.jpg?alt=media&token=5ec5d36d-959e-4452-ae61-498c87e58d9d",
      "https://firebasestorage.googleapis.com/v0/b/pet-stories-493e1.appspot.com/o/webpage-assets%2Fcarousel-image-3.jpg?alt=media&token=510a30fc-d02c-4744-8ee6-2fbd8d62968a"
    ],
    socialIcons: [["fab fa-facebook"], ["fab fa-twitter"], ["fab fa-instagram"]]
  })
};
</script>

<style scoped>
</style>