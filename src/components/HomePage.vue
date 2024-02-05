<template>
  <v-main>
    <!-- Banner más abajo -->
    <v-row justify="center" class="mt-4">
      <v-col cols="12" sm="10" md="6" lg="250">
        <v-card>
          <img src="/banner1.jpg" alt="logo" style="width: 100%">

          <v-card-text>
            <center><h2 class="text-h6"><b>HERPmes</b></h2></center>
            <center><p>
              ¡Descubre la revolución en gestión empresarial con nuestro avanzado sistema ERP!
              Nuestra solución integral se adapta perfectamente a las necesidades de tu empresa,
              ofreciendo un rendimiento excepcional en cada uno de sus tres potentes departamentos:<br> <b>Nuixo, Anchor y CodeCrafters</b>
            </p></center>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <br>
    <!-- Carrusel de imágenes
    <v-carousel cycle height="400" hide-delimiter-background show-arrows="hover">
      <v-carousel-item
          src="/carrusel1.jpg"
          cover
      ></v-carousel-item>

      <v-carousel-item
          src="/carrusel2.jpg"
          cover
      ></v-carousel-item>

      <v-carousel-item
          src="/carrusel3.jpg"
          cover
      ></v-carousel-item>
    </v-carousel>-->

    <!-- Logos y nombres de departamentos -->
    <v-row justify="center" class="mt-4">
      <v-col cols="12">
        <v-row justify="center">
          <v-col cols="6" md="3" v-for="(department, index) in departments" :key="index">
            <v-card class="department-card" @click="redirectToDepartment(department.name)">
              <img :src="department.logo" :alt="department.name + '-logo'" style="width: 100%; height: 150px">
              <v-card-text class="text-h6 text-center">{{ department.name }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

  </v-main>
</template>

<script>
export default {
  data() {
    return {
      departments: [
        { name: 'Nuixó', logo: '/Nuixó.ico' },
        { name: 'Anchor', logo: '/Anchor.png' },
        { name: 'CodeCrafters', logo: '/codecrafters.png' },
      ],
      carouselItems: [
        { src: '/prueba.jpg', alt: 'Carousel Image 1' },
        { src: '/carousel2.jpg', alt: 'Carousel Image 2' },
        { src: '/carousel3.jpg', alt: 'Carousel Image 3' },
      ],
    };
  },
  methods: {
    redirectToDepartment(departmentName) {
      this.$router.push({ name: 'department', params: { name: departmentName } });
    },
  },
};
</script>

<style scoped>
.mx-2 {
  margin-right: 0.5rem !important;
  margin-left: 0.5rem !important;
}

.mt-4 {
  margin-top: 1rem !important;
}
.department-card {
  margin: 0.5rem;
  padding: 1rem;
  text-align: center;
}
</style>
