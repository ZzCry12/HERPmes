<template>
  <center>
  <v-container fluid fill-height class="mt-8">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <br>
          <br>
          <center>
            <v-card-title class="headline">Formulario de Contacto</v-card-title>
            <p class="subtitle-1">¡Nos encantaría saber de ti!</p>
          </center>
          <v-divider></v-divider>

          <!-- Información de contacto -->
          <v-row class="mt-4">
            <v-col>
              <v-icon color="primary">mdi-phone</v-icon>
              <span class="ml-2">Teléfono: +34 965 195 349</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-icon color="primary">mdi-email</v-icon>
              <span class="ml-2">Correo Electrónico: herpmesERP@hermes.es</span>
            </v-col>
          </v-row>
          <v-divider></v-divider>

          <!-- Ubicación de la empresa -->
          <v-row class="mt-4">
            <v-col>
              <v-icon color="primary">mdi-map-marker</v-icon>
              <span class="ml-2">Dirección: Carrer Arcadi García i Sanz, 1, 12600 La Vall d'Uixó, Castelló</span>
            </v-col>
          </v-row>

          <!-- Mapa interactivo -->
          <v-row>
            <v-col>
              <iframe
                  width="600"
                  height="350"
                  frameborder="0"
                  style="border:0"
                  src="https://www.google.com/maps/embed/v1/place?q=IES+BENIGASLÓ,+Carrer+Arcadi+García+i+Sanz,+Vall+de+Uxó,+España&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  allowfullscreen
              ></iframe>

            </v-col>
          </v-row>
          <v-divider></v-divider>

          <!-- Horario de atención -->
          <v-row class="mt-4">
            <v-col>
              <v-icon color="primary">mdi-clock</v-icon>
              <span class="ml-2">Horario de Atención: Lunes a Viernes, 9:00 AM - 6:00 PM</span>
            </v-col>
          </v-row>
          <v-divider></v-divider>

          <!-- Formulario de contacto -->
          <v-form @submit.prevent="submitForm">
            <v-text-field
                v-model="formData.name"
                label="Nombre"
                required
            ></v-text-field>

            <v-text-field
                v-model="formData.email"
                label="Correo Electrónico"
                type="email"
                required
            ></v-text-field>

            <v-textarea
                v-model="formData.message"
                label="Mensaje"
                required
            ></v-textarea>

            <v-row justify="center" class="mt-4">
              <v-btn type="submit" color="primary">Enviar</v-btn>
            </v-row>
          </v-form>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
  </center>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      //hay q implementar logica para enviar formulario
      console.log('Formulario enviado:', this.formData);
      // Reinicia el formulario después de enviarlo
      this.formData = {
        name: '',
        email: '',
        message: '',
      };
    },
  },
};
</script>

<style scoped>
.v-card {
  margin-bottom: 50px;
}
.v-btn {
  margin-bottom: 16px;
}
</style>
