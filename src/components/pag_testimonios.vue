<template>
  <div>
    <h1>
      <strong>Compañías que han encontrado una notable mejora en sus procesos</strong>
    </h1>

    <div class="divContainer">
      <div class="div1">
        <div class="text-container">
          <p class="p1">
            Muchos fabricantes consideran que la automatización es demasiado
            sofisticada o costosa para sus negocios. Pero Theodoro's tecnhology
            descubrió de primera mano cómo nuestro ERP proporciona opciones de
            bajo costo y muy personalizables, que les ayudó a solucionar los retos
            en la planta de producción y a empujar los límites de la
            automatización de la manufactura.
          </p>
        </div>
        <img src="../../public/auto.jpg" alt="Automatización" />
      </div>
      <div class="div3">
        <div class="text-container">
          <p class="p1">
            Bladsoul, Inc. experimentó ahorros inmediatos y de largo plazo de más
            de $250,000 dólares Norteamericanos con la solución ERP para
            fabricantes de Herpmes. Los cambios mostrados en los dos siguientes
            meses después de implementar la solución dejó atónitos a Ramón y
            Rebaca, los propietarios de esta misma empresa.
          </p>
        </div>
        <img src="@/assets/ryr.jpg" alt="Bladsoul, Inc." />
      </div>
      <div class="div2">
        <div class="text-container">
          <p class="p1">
            Desde que implementaron HERPmes, cada problema que Network experts
            experimentaba en el pasado fue solucionado y debido a la mejor
            visibilidad de cada área de la empresa, los empleados fueron 50 por
            ciento más productivos y eficientes en sus responsabilidades
            cotidianas.
          </p>
        </div>
        <img src="@/assets/tiosonriendo.jpg" alt="Network Experts" />
      </div>
    </div>

    <div class="divContainer">
      <div class="div2">
        <div class="text-container">
          <p class="p1">
            Bob Bester, Director en AcroTech Group, destaca cómo la implementación
            de Herpmes ha impulsado eficiencias notables en su empresa. Gracias a
            esta solución, hemos logrado una gestión más integrada y eficaz de
            nuestras operaciones, desde la producción hasta la gestión de
            inventarios y recursos humanos. La plataforma ha mejorado la
            visibilidad en tiempo real de nuestros procesos, reduciendo errores y
            tiempos de respuesta.
          </p>
        </div>
        <img src="@/assets/a.jpg" alt="AcroTech Group" />
      </div>
      <div class="div1">
        <div class="text-container">
          <p class="p1">
            Tupperware Venezuela ha elevado la calidad de sus productos mediante
            una mejora significativa en la planificación de producción y el
            control de calidad. La implementación de estrategias más eficientes en
            la producción nos ha permitido optimizar los procesos, asegurando una
            mayor consistencia y excelencia en cada producto fabricado.
          </p>
        </div>
        <img src="../../public/taper.jpg" alt="Tupperware Venezuela" />
      </div>
      <div class="div3">
        <div class="text-container">
          <p class="p1">
            A la hora de realizar esta implantación en chumillas tec. los
            comerciales necesitaban conocer desde el exterior todo lo relacionado
            con las ventas, estado de pedidos, rentabilidad de los mismos, etc.
            pero como somos un grupo organizado decidido y con una gran
            comunicación pudimos optimizar los procesos necesarios.
          </p>
        </div>
        <img src="@/assets/a.webp" alt="Chumillas Tec." />
      </div>
    </div>

    <div class="divContainer">
      <div class="div3">
        <div class="text-container">
          <p class="p1">
            La empresa de investigación biotecnológica BioLab necesitaba de
            seguimiento eficiente de la cadena de suministro de materiales
            altamente especializados. La gestión manual resultaba en pérdida de
            tiempo y errores en la trazabilidad. Solución: Herpmes implementó una
            gran un tipo de personalización específica para ellos, gracias a eso
            pudimos un seguimiento detallado de lotes, fechas de caducidad y otros
            atributos específicos de los materiales utilizados en sus
            investigaciones.
          </p>
        </div>
        <img src="../../public/cientific.jpg" alt="BioLab" />
      </div>
      <div class="div2">
        <div class="text-container">
          <p class="p1">
            En FreshCuisine, la introducción de Hermpes ha elevado la calidad de
            nuestros productos alimenticios. Sensores y sistemas automatizados
            aseguran un seguimiento preciso de los procesos de producción,
            garantizando la consistencia y seguridad alimentaria. Esta mejora ha
            fortalecido la confianza del consumidor en nuestros productos y ha
            posicionado a FreshCuisine como un referente en innovación en la
            industria alimentaria.
          </p>
        </div>
        <img src="@/assets/fruta.jpg" alt="FreshCuisine" />
      </div>
      <div class="div1">
        <div class="text-container">
          <p class="p1">
            En XYZ Electronics, la implementación Hermpes ha revolucionado la
            gestión de la cadena de suministro. Ahora, podemos rastrear cada
            componente desde la adquisición hasta la producción, lo que ha
            reducido los tiempos de espera y garantizado un flujo eficiente de
            materiales. Esto no solo ha mejorado nuestra capacidad de respuesta
            ante la demanda del mercado, sino que también ha reducido costos y
            mejorado la calidad general de nuestros productos.
          </p>
        </div>
        <img src="@/assets/alma.jpg" alt="XYZ Electronics" />
      </div>
    </div>
  </div>
  <br>
  <br>
</template>

<style scoped>
h3 {
  margin: 40px 0 0;
}

.divContainer {
  display: flex;
  justify-content: space-between;
}

.div1,
.div2,
.div3 {
  flex: 0 1 30%;
  margin: 20px;
  color: white;
}

.div1 {
  background-color: #38b6ff;
}

.div2 {
  background-color: #ff3131;
}

.div3 {
  background-color: #0d020e;
}

.text-container {
  margin: 0 10px;
}

.p1 {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
