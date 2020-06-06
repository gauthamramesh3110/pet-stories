<template>
  <v-dialog width="400">
    <template v-slot:activator="{ on }">
      <v-btn color="#4D4D4D4D" large dark depressed v-on="on">LOGIN</v-btn>
    </template>
    <v-card>
      <v-toolbar color="primary dark">
        <v-btn-toggle background-color="#00000000" dark mandatory borderless>
          <v-btn color="#4D4D4D4D" depressed @click="window=0">LOGIN</v-btn>
          <v-btn color="#4D4D4D4D" depressed @click="window=1">SIGN UP</v-btn>
        </v-btn-toggle>
      </v-toolbar>
      <v-window v-model="window">
        <v-window-item>
          <div class="d-flex flex-column py-6 px-3">
            <v-text-field prepend-inner-icon="fas fa-user" label="Username" filled></v-text-field>
            <v-text-field prepend-inner-icon="fas fa-key" label="Password" filled type="password"></v-text-field>
            <v-btn color="secondary" large>LOGIN</v-btn>
            <v-divider light class="my-10"></v-divider>
            <v-btn large class="mb-5" color="google" dark>
              <v-icon left class="mr-4">fab fa-google</v-icon>Login with Google
            </v-btn>
            <v-btn large color="facebook" dark>
              <v-icon left class="mr-4">fab fa-facebook-f</v-icon>Login with Facebook
            </v-btn>
          </div>
        </v-window-item>
        <v-window-item>
            Register
        </v-window-item>
      </v-window>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "LoginDialog",
  data(){
      return {
          window: 0
      }
  }
};
</script>

<style scoped>
</style>