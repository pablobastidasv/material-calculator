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
          .label Largo
          .control
            input.input(v-model="params.long" type="number" placeholder="Largo")
      .column
        .field
          .label Ancho
          .control
            input.input(v-model="params.width" type="number" placeholder="Ancho")

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
  methods: {
    saveHandler: function() {
      this.$emit("search", this.params)
    }
  }
}
</script>

<style scoped>

</style>
