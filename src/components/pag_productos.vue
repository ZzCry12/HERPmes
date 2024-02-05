<template>
  <div>
    <v-container>
      <br>
      <br>
      <br>
      <h1 class="headline mb-4">Nuestros Productos</h1>
      <p class="subheading mb-6">
        Descubre nuestros productos
      </p>

      <v-row>
        <v-col v-for="producto in productos" :key="producto.id" cols="12" md="4">
          <v-card class="mb-4">
            <v-img :src="require(`@/assets/${producto.image}`)"
                   alt="Producto Imagen" height="200"></v-img>

            <v-card-title>{{ producto.nombre }}</v-card-title>

            <v-card-actions>
              <v-btn color="primary" @click="verDetalles(producto)">Ver Detalles</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- Ventana emergente (modal) para detalles del producto -->
      <v-dialog v-if="detallesModal" v-model="detallesModal" max-width="600">
        <v-card>
          <v-card-title>{{ productoSeleccionado.nombre }}</v-card-title>
          <v-card-text>
            {{ productoSeleccionado.descripcion }}
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="cerrarDetalles">Cerrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productos: [
        {
          id: 1,
          nombre: 'Producto 1',
          descripcion: 'Descripción del producto 1.',
          image: 'fruta.jpg', // Ruta de la imagen
        },
        {
          id: 2,
          nombre: 'Producto 2',
          descripcion: 'Descripción del producto 2.',
          image: 'fruta.jpg', // Ruta de la imagen
        },
        {
          id: 3,
          nombre: 'Producto 3',
          descripcion: 'Descripción del producto 1.',
          image: 'fruta.jpg', // Ruta de la imagen
        },
        {
          id: 4,
          nombre: 'Producto 4',
          descripcion: 'Descripción del producto 2.',
          image: 'fruta.jpg', // Ruta de la imagen
        },
        {
          id: 5,
          nombre: 'Producto 5',
          descripcion: 'Descripción del producto 1.',
          image: 'fruta.jpg', // Ruta de la imagen
        },
        {
          id: 6,
          nombre: 'Producto 6',
          descripcion: 'Descripción del producto 2.',
          image: 'fruta.jpg', // Ruta de la imagen
        },
        // Agrega más productos según sea necesario
      ],
      detallesModal: false,
      productoSeleccionado: null,
    };
  },
  methods: {
    verDetalles(producto) {
      this.productoSeleccionado = producto;
      this.detallesModal = true;
    },
    cerrarDetalles() {
      this.productoSeleccionado = null;
      this.detallesModal = false;
    },
  },
};
</script>

<style scoped>
.headline {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
}

.subheading {
  font-size: 1.25rem;
  color: #555;
}

/* Estilos específicos para esta página si es necesario */
</style>
