<template lang="pug">
  div
    .columns.is-mobile
      .column
        .field
          .label Trabajo a realizar
        .control
          .select
            select(v-model="params.job")
              option(value="Ceiling") Cielo falso
              option(value="Simple") Muro Sencillo
              option(value="Double") Muro Doble
      .column
        .field
          .label Material a usar
        .control
          .select
            select(v-model="params.material")
              option(value="Panel") Panel
              option(value="Board") Super Board

    .columns.is-mobile
      .column
        .field
          .label Largo (en metros)
          .control
            input.input(@keyup.enter="saveHandler" v-model="params.long" type="number" placeholder="Largo")
      .column
        .field
          .label Ancho (en metros)
          .control
            input.input(@keyup.enter="saveHandler" v-model="params.width" type="number" placeholder="Ancho")

    .columns.is-mobile
      .column
        .field
          .label Área (en m^2)
          .control
            input.input.no-border(v-model="area" readonly=true type="number" placeholder="Largo")
      .column
        .field
          .label Perímetro (en metros)
          .control
            input.input.no-border(v-model="perimeter" readonly="true" type="number" placeholder="Ancho")

    .columns.is-mobile
      .column
        .field
          .control
            .button.is-link(@click="saveHandler") Calcular


</template>

<script>
export default {
  name: "Form",
  data: () => {
    return {
      params: {
        job: 'Ceiling',
        material: 'Panel',
        long: 0,
        width: 0,
      }
    }
  },
  computed: {
    area: function() {
      return this.params.long * this.params.width
    },
    perimeter: function() {
      return this.params.long * 2 + this.params.width * 2
    }
  },
  methods: {
    saveHandler: function() {
      this.$emit("search", this.params)
    }
  }
}
</script>

<style scoped>
.no-border {
  border: 0;
}
</style>
