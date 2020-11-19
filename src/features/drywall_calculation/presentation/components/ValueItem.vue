<template lang="pug">
  .columns.material-row.is-gapless(v-if="material")
    .column.is-3.material-item
      strong {{ $t(materialName) }}
    .column.is-2.material-item {{ material.value }} {{ material.unit }}
</template>

<script>
export default {
  name: "ValueItem",
  props: ['materialName', 'material']
}
</script>

<style scoped>
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
