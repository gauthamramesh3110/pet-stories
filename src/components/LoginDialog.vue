<template>
  <v-dialog :width="window==0?'450':'900'">
    <template v-slot:activator="{ on }">
      <v-btn color="#4D4D4D4D" large dark depressed v-on="on">LOGIN</v-btn>
    </template>
    <v-card>
      <v-toolbar color="primary dark">
        <v-btn-toggle background-color="#00000000" dark mandatory borderless v-model="window">
          <v-btn color="#4D4D4D4D" depressed>LOGIN</v-btn>
          <v-btn color="#4D4D4D4D" depressed>SIGN UP</v-btn>
        </v-btn-toggle>
      </v-toolbar>
      <v-container class="overflow-y-auto" style="max-height: 70vh" fluid>
        <v-window v-model="window">
          <v-window-item>
            <div class="d-flex flex-column py-3 px-3">
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
            <div class="d-flex flex-column py-1 px-1">
              <v-form>
                <v-container>
                  <v-row>
                    <v-col md="6" cols="12">
                      <div class="d-flex">
                        <v-text-field label="First Name" filled class="mr-3"></v-text-field>
                        <v-text-field label="Last Name" filled></v-text-field>
                      </div>
                      <v-text-field label="Email" filled type="email"></v-text-field>
                      <v-text-field label="Username" hint="Choose a unique username" filled></v-text-field>
                      <div class="d-flex">
                        <v-text-field label="Password" filled class="mr-3" type="password"></v-text-field>
                        <v-text-field label="Retype Password" filled type="password"></v-text-field>
                      </div>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field label="Address Field 1" filled></v-text-field>
                      <v-text-field label="Address Field 2" filled></v-text-field>
                      <div class="d-flex">
                        <v-select class="mr-3" label="State" :items="cities" filled></v-select>
                        <v-select label="City" :items="cities" filled></v-select>
                      </div>
                      <div class="d-flex">
                        <v-text-field label="Pin Code" filled class="mr-3"></v-text-field>
                        <v-text-field label="Phone Number" filled></v-text-field>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-btn color="secondary" dark>Register</v-btn>
                  </v-row>
                </v-container>
              </v-form>
            </div>
          </v-window-item>
        </v-window>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "LoginDialog",
  data() {
    return {
      window: 0,
      cities: ["Tamil Nadu", "Maharashtra", "West Bengal"]
    };
  }
};
</script>

<style scoped>
</style>