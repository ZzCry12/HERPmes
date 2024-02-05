<template>
  <br>
  <br>
  <v-container fluid class="mt-8">
    <!-- Sección de Bienvenida -->
    <v-row align="center">
      <v-col cols="12">
        <v-card class="pa-8">
          <v-row>
            <v-col cols="12" md="6">
              <v-img src="/BG-removed-Herpmes.png" alt="Logo de HERPmes" class="mb-4" style="max-height: 150px;"></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <v-card-text>
                <h2 class="headline mb-4">Sobre HERPmes</h2>
                <p>
                  Bienvenido a HERPmes, una empresa dedicada a proporcionar soluciones innovadoras en tecnología y servicios.
                </p>
                <p>
                  Nuestra misión es impulsar el éxito de nuestros clientes mediante la entrega de productos y servicios excepcionales.
                </p>
                <p>
                  En HERPmes, nos enorgullece nuestro compromiso con la calidad, la innovación y la satisfacción del cliente.
                </p>
                <p>
                  Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto con nosotros. ¡Gracias por elegirnos!
                </p>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <!-- Sección de Nuestros Departamentos -->
    <v-row align="center" class="mt-8">
      <v-col cols="12">
        <h1 class="display-1 text-center mb-8">Nuestros Departamentos</h1>
      </v-col>
      <v-col v-for="department in departments" :key="department.name" cols="12" md="6">
        <v-card class="mb-4" :style="{ height: department.showProjects ? 'auto' : '400px' }">
          <v-row align="center">
            <v-col cols="12" md="4">
              <v-img :src="department.logo" alt="Logo del departamento" class="department-logo"></v-img>
              <v-icon v-for="icon in department.icons" :key="icon" class="mr-2 department-icon">{{ icon }}</v-icon>
            </v-col>
            <v-col cols="12" md="8">
              <h2 class="headline mb-4 text-center">{{ `${department.name}` }}</h2>
              <v-card-text>{{ department.description }}</v-card-text>
              <v-divider></v-divider>
              <v-card-text>{{ department.overview }}</v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn icon @click="toggleProjects(department)">
                  <v-icon :class="{ 'rotate-icon': department.showProjects }">mdi-eye</v-icon>
                </v-btn>
                <v-btn text @click="toggleProjects(department)">Ver Proyectos</v-btn>
              </v-card-actions>
            </v-col>
          </v-row>

          <!-- Mostrar proyectos si la propiedad showProjects es verdadera -->
          <v-row v-if="department.showProjects">
            <v-col v-for="project in department.projects" :key="project.title" cols="12" md="4">
              <v-card class="mb-4 project-card">
                <v-img :src="project.image" alt="Imagen del proyecto" class="project-image"></v-img>
                <v-card-subtitle>{{ project.category }}</v-card-subtitle>
                <v-divider></v-divider>
                <v-card-text>{{ project.description }}</v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn text color="primary" @click="viewProject(project, department.name)">Ver Detalles</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
          <!-- Ventana emergente para mostrar detalles del proyecto -->
          <v-dialog v-model="projectDialog" max-width="800">
            <v-card>
              <v-card-title>{{ selectedProject.title }} - Detalles</v-card-title>
              <v-divider></v-divider>
              <v-container>
                <v-row>
                  <v-col cols="12" md="4">
                    <v-img :src="selectedProject.image" alt="Imagen del proyecto" class="project-image"></v-img>
                  </v-col>
                  <v-col cols="12" md="8">
                    <!-- Contenido del proyecto en la ventana emergente -->
                    <v-card-text>{{ selectedProject.description }}</v-card-text>
                    <v-divider></v-divider>
                    <v-card-text>{{ selectedProject.details }}</v-card-text>
                    <!-- Agregar el nuevo campo 'details' -->
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-btn color="primary" @click="projectDialog = false">Cerrar</v-btn>
                    </v-card-actions>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-dialog>
        </v-card>
      </v-col>
    </v-row>

    <!-- Ventana emergente para mostrar proyectos -->
    <v-dialog v-model="dialog" max-width="800">
      <v-card>
        <v-card-title>{{ selectedDepartment.name }} - Proyectos</v-card-title>
        <v-divider></v-divider>
        <v-container>
          <v-row>
            <v-col v-for="project in selectedDepartment.projects" :key="project.title" cols="12" md="4">
              <!-- Contenido del proyecto en la ventana emergente -->
              <v-card class="mb-4 project-card">
                <v-img :src="project.image" alt="Imagen del proyecto" class="project-image"></v-img>
                <v-card-subtitle>{{ project.category }}</v-card-subtitle>
                <v-divider></v-divider>
                <v-card-text>{{ project.description }}</v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn text color="primary" @click="viewProject(project, selectedDepartment.name)">Ver Detalles</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn color="primary" @click="dialog = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
  <br>
</template>

<script>
export default {
  data() {
    return {
      departments: [
        {
          name: 'Nuixó',
          description: 'Transformando ideas en soluciones digitales.',
          overview: 'El Departamento Nuixó está dedicado a convertir ideas innovadoras en soluciones digitales de vanguardia. Nuestro equipo altamente capacitado utiliza tecnologías modernas para enfrentar los desafíos del mundo digital.',
          logo: '/Nuixó.ico',
          icons: ['mdi-desktop-classic', 'mdi-code-tags', 'mdi-database'],
          projects: [
            {
              title: 'Proyecto Nuixó 1',
              category: 'Desarrollo Digital',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              details: 'Detalles adicionales sobre el Proyecto Nuixó 1.',
              image: '/cientific.jpg',
            },
            {
              title: 'Proyecto Nuixó 1',
              category: 'Desarrollo Digital',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              details: 'Detalles adicionales sobre el Proyecto Nuixó 1.',
              image: '/cientific.jpg',
            },
            {
              title: 'Proyecto Nuixó 1',
              category: 'Desarrollo Digital',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              details: 'Detalles adicionales sobre el Proyecto Nuixó 1.',
              image: '/cientific.jpg',
            },
          ],
          showProjects: false,
        },
        {
          name: 'Anchor',
          description: 'Construyendo bases sólidas para el éxito.',
          overview: 'El Departamento Anchor se centra en construir bases sólidas para el éxito de nuestros clientes. Desde la planificación estratégica hasta la implementación y el soporte continuo, estamos comprometidos con la excelencia en cada paso del camino.',
          logo: '/Anchor.png',
          icons: ['mdi-anchor', 'mdi-tools', 'mdi-account-group'],
          projects: [
            {
              title: 'Proyecto Anchor 1',
              category: 'Planificación Estratégica',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              details: 'Detalles adicionales sobre el Proyecto Nuixó 1.',
              image: '/auto.jpg',

            },
            {
              title: 'Proyecto Anchor 1',
              category: 'Planificación Estratégica',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              details: 'Detalles adicionales sobre el Proyecto Nuixó 1.',
              image: '/auto.jpg',},
            {
              title: 'Proyecto Anchor 1',
              category: 'Planificación Estratégica',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              details: 'Detalles adicionales sobre el Proyecto Nuixó 1.',
              image: '/auto.jpg',

            }
          ],

          showProjects: false,
        },
        {
          name: 'CodeCrafters',
          description: 'Artesanos del código creando experiencias extraordinarias.',
          overview: 'En CodeCrafters, somos artesanos del código comprometidos con la creación de experiencias digitales extraordinarias. Desde aplicaciones móviles hasta soluciones web, nuestro equipo fusiona la creatividad con la tecnología para superar las expectativas.',
          logo: '/codecrafters.png',
          icons: ['mdi-code-braces', 'mdi-laptop', 'mdi-cellphone-link'],
          projects: [
            {
              title: 'Proyecto CodeCrafters 1',
              category: 'Experiencias Digitales',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              details: 'Detalles adicionales sobre el Proyecto Nuixó 1.',
              image: '/taper.jpg',
            },
            {
              title: 'Proyecto CodeCrafters 1',
              category: 'Experiencias Digitales',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              details: 'Detalles adicionales sobre el Proyecto Nuixó 1.',
              image: '/taper.jpg',
            },            {
              title: 'Proyecto CodeCrafters 1',
              category: 'Experiencias Digitales',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              details: 'Detalles adicionales sobre el Proyecto Nuixó 1.',
              image: '/taper.jpg',
            },            {
              title: 'Proyecto CodeCrafters 1',
              category: 'Experiencias Digitales',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              details: 'Detalles adicionales sobre el Proyecto Nuixó 1.',
              image: '/taper.jpg',
            },

          ],
          showProjects: false,
        },
      ],
      selectedDepartment: null,
      dialog: false,
      projectDialog: false,
    };
  },
  methods: {
    viewProject(project, department) {
      // Implementa la lógica para ver detalles del proyecto
      console.log(`Ver detalles del proyecto ${project.title} del departamento ${department}`);
      this.selectedProject = project;
      // Mostrar la ventana emergente solo si selectedProject no es nulo o indefinido
      if (this.selectedProject) {
        this.projectDialog = true;}
    },
    toggleProjects(department) {
      this.selectedDepartment = department;
      this.dialog = true;
      this.projectDialog = false;
    },
  },
};
</script>

<style scoped>
.department-card,
.project-card {
  text-align: center;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
}

.department-card:hover,
.project-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.department-card {
  transition: height 0.5s;
}

.department-logo,
.project-image {
  max-height: 100px;
  margin: 0 auto;
}

.department-icon {
  color: #546e7a;
  font-size: 24px;
}

.rotate-icon {
  transform: rotate(180deg);
}
</style>
