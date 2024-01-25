<template>
  <v-app style="background-color: #e3e2e2;">
    <v-app-bar app fixed color="blue darken-4" dark>
      <!-- Logo a la izquierda -->
      <img src="/BG-removed-Herpmes.png" alt="logo" style="height: 50px; margin-left: 10px" @click="redirectToHome">

      <!-- Botones a la derecha -->
      <v-spacer></v-spacer>
      <v-btn text @click="redirectToHome">Inicio</v-btn>
      <v-btn text @click="redirectToContact">Contacto</v-btn>
      <v-btn text @click="redirectToAboutUs">About Us</v-btn>
      <v-btn text @click="redirectToTestimonials">Testimonios</v-btn>
    </v-app-bar>

    <router-view></router-view>

    <!-- Footer -->
    <v-footer app class="mt-0" height="50" absolute color="grey lighten-3" style="opacity: 1">
      <v-row justify="center" align="center">
        <v-col class="text-left">
          <b><span>&copy; 2024 HERPmes. Todos los derechos reservados.</span></b>
        </v-col>

        <v-col class="text-center">
          <v-btn icon small @click="redirectToHome"><v-icon>mdi-home</v-icon></v-btn>
          <v-btn icon small @click="redirectToContact"><v-icon>mdi-shield-account</v-icon></v-btn>
          <v-btn icon small @click="redirectToAboutUs"><v-icon>mdi-cookie</v-icon></v-btn>
          <v-btn icon small @click="redirectToTestimonials"><v-icon>mdi-file-document</v-icon></v-btn>
        </v-col>

        <v-col class="text-right">
          <v-btn icon small @click="redirectToFacebook"><v-icon>mdi-facebook</v-icon></v-btn>
          <v-btn icon small @click="redirectToYoutube"><v-icon>mdi-youtube</v-icon></v-btn>
          <v-btn icon small @click="redirectToTwitter"><v-icon>mdi-twitter</v-icon></v-btn>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  methods: {
    redirectToHome() {
      this.$router.push({ name: 'HomePage' });
    },
    redirectToContact() {
      this.$router.push({ name: 'pag_contacto' });
    },
    redirectToAboutUs() {
      this.$router.push({ name: 'pag_aboutus' });
    },
    redirectToTestimonials() {
      this.$router.push({ name: 'pag_testimonios' });
    },
    redirectToFacebook() {
      // Implementa la redirección al perfil de Facebook
    },
    redirectToYoutube() {
      // Implementa la redirección al canal de YouTube
    },
    redirectToTwitter() {
      // Implementa la redirección al perfil de Twitter
    },
  },
};
</script>

<style scoped>
/* Agrega estilos personalizados según sea necesario */
.logo-enter-active, .logo-leave-active {
  transition: opacity 1s;
}
.logo-enter, .logo-leave-to {
  opacity: 0;
}
</style>
