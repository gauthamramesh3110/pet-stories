<template>
  <v-card class="mx-2 mt-11 mb-1">
    <v-toolbar color="primary dark">
      <v-tabs dark>
          <v-tab v-for="(service,index) in services" :key="index">{{service}}</v-tab>
      </v-tabs>
    </v-toolbar>
    <v-container class="overflow-y-auto" style="max-height: 75vh" fluid>
      <v-row>
        <v-col cols="12" md="3" v-for="(groomer, index) in groomers" :key="index">
          <v-card>
            <v-img :src="groomer.image" :aspect-ratio="16/9"></v-img>
            <v-card-title>{{groomer.title}}</v-card-title>
            <v-card-text>
              <v-rating
                :value="groomer.rating"
                color="orange"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
            </v-card-text>
            <v-card-subtitle>{{groomer.address}}</v-card-subtitle>
            <v-card-text>
              <ul v-for="(service, index) in groomer.services" :key="index" dense>
                <li>{{service}}</li>
              </ul>
            </v-card-text>
            <v-card-actions>
              <v-btn color="secondary dark">Book Appointment</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "List",
  data: () => ({
    services: ["Groomers", "Vetenarians", "Pet Sitters"],
    cities: ["Chennai", "Mumbai", "Kolkata"],
    groomers: [
      {
        id: 1,
        image: "https://firebasestorage.googleapis.com/v0/b/pet-stories-493e1.appspot.com/o/groomer-assets%2Fgroomer-1.jpg?alt=media&token=651215ed-5b84-401e-844b-77908f8b4270",
        title: "Ultimate Vignesh Groomers",
        address: "Kolathur, Kolathur Nagar, Kolathur District, Kolathur-69",
        services: [
          "Hair Trimming",
          "Nail Clipping",
          "Dry Cleaning",
          "Shampoo Wash"
        ],
        rating: 4.0
      },
      {
        id: 2,
        image: "https://firebasestorage.googleapis.com/v0/b/pet-stories-493e1.appspot.com/o/groomer-assets%2Fgroomer-2.jpg?alt=media&token=2264cb7e-3f47-4a26-930d-36b7879ecaa8",
        title: "LGBT Gau Groomers",
        address: "Saligramam, Saligramam Nagar, Gramam District, Gramoor-69",
        services: [
          "Hair Trimming",
          "Nail Clipping",
          "Dry Cleaning",
          "Shampoo Wash",
          "Dog Tikka"
        ],
        rating: 4.0
      },
      {
        id: 3,
        image: "https://firebasestorage.googleapis.com/v0/b/pet-stories-493e1.appspot.com/o/groomer-assets%2Fgroomer-3.jpg?alt=media&token=161c6a48-7d9d-4301-8a36-57ce592ed544",
        title: "Marvelous Shailu Groomers",
        address: "Nanganallur, Joilu Nagar, Joilupakkam District, Joilu-69",
        services: [
          "Hair Trimming",
          "Nail Clipping",
          "Dry Cleaning",
          "Shampoo Wash"
        ],
        rating: 4.0
      },
      {
        id: 4,
        image: "https://firebasestorage.googleapis.com/v0/b/pet-stories-493e1.appspot.com/o/groomer-assets%2Fgroomer-4.jpg?alt=media&token=fd009919-e828-41ce-842f-f8139996a589",
        title: "Sneg Groomers",
        address: "Golathur, Golathur Nagar, Golathur District, Golathur-69",
        services: [
          "Hair Trimming",
          "Nail Clipping",
          "Dry Cleaning",
          "Shampoo Wash"
        ],
        rating: 4.0
      }
    ]
  })
};
</script>

<style>
</style>