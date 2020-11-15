<template lang="pug">
  .columns.is-centered.is-mobile
    .column.is-half.pl-4
      .columns.material-row.is-gapless(v-for="material in materials")
        .column.is-3.material-item
          strong {{ material.name }}
        .column.is-2.material-item {{ material.value }} {{ material.unit }}
</template>

<script>
export default {
  name: "ValueTable",
  props: [
      'materials'
  ]
}
</script>

<style lang="scss" scoped>
.column {
  padding: .2em !important;
}

@media screen and (max-width: 767px) {
  .material-row {
    border-bottom: solid 1px lightgray;
    margin-bottom: .5em !important;
  }
}
@media screen and (min-width: 768px) {
  .material-item {
    border-bottom: solid 1px lightgray;
  }
}

</style>
