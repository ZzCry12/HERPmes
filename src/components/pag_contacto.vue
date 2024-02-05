<template>
  <center>
    <br>
<br>

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
            <v-text-field v-model="formData.name" label="Nombre" required></v-text-field>
            <v-text-field v-model="formData.email" label="Correo Electrónico" type="email" required></v-text-field>
            <v-textarea v-model="formData.message" label="Mensaje" required></v-textarea>

            <v-row justify="center" class="mt-4">
              <v-btn type="submit" color="primary">Enviar</v-btn>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
    <v-snackbar v-model="snackbar" :timeout="5000" color="success" top right botttom="30px">
      <v-icon left>mdi-check-circle</v-icon>
      Mensaje enviado con éxito
    </v-snackbar>
    <v-snackbar v-model="errorSnackbar" :timeout="5000" color="error" top right botttom="30px">
      <v-icon left>mdi-alert-circle</v-icon>
      Por favor, completa todos los campos
    </v-snackbar>
  </center>
</template>

<script>
import * as emailjs from "@emailjs/browser";

export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      snackbar: false,
      errorSnackbar: false,
    };
  },
  methods: {
    submitForm() {
      // Verifica que todos los campos estén completos
      if (this.formData.name && this.formData.email && this.formData.message) {
        // Envia el formulario usando Email.js
        emailjs
            .send("service_jfc6g4o", "template_96fyo8p", {
              from_name: this.formData.name,
              from_email: this.formData.email,
              message: this.formData.message,
            })
            .then((response) => {
              console.log("Formulario enviado:", response);
              // Reinicia el formulario después de enviarlo
              this.formData = {
                name: "",
                email: "",
                message: "",
              };
              // Muestra la confirmación con icono
              this.snackbar = true;
              // Cierra el mensaje después de 5 segundos
              setTimeout(() => {
                this.snackbar = false;
              }, 5000);
            })
            .catch((error) => {
              console.error("Error al enviar el formulario:", error);
            });
      } else {
        // Muestra mensaje de error si los campos no están completos
        this.errorSnackbar = true;
        // Cierra el mensaje de error después de 5 segundos
        setTimeout(() => {
          this.errorSnackbar = false;
        }, 5000);
      }
    },
  },
  mounted() {
    const emailjsScript = document.createElement("script");
    emailjsScript.src =
        "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    document.head.appendChild(emailjsScript);

    emailjsScript.onload = () => {
      (function () {
        emailjs.init({
          publicKey: "vWJTVU9sfIt1USWeG", // Reemplaza con tu clave pública
        });
      })();
    };
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
