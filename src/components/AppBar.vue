<template>
  <v-app-bar color="#00000000" class="mx-5 mt-5" app flat>
    <v-toolbar-title id="logo" class>PetStories</v-toolbar-title>
    <v-spacer></v-spacer>
    <LoginDialog />
  </v-app-bar>
</template>

<script>
import LoginDialog from "./LoginDialog";

export default {
  name: "AppBar",
  components: {
    LoginDialog
  }
};
</script>

<style scoped>
#logo {
  font-family: "Pacifico", cursive;
}
</style>