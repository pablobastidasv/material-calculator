<template lang="pug">
  .columns.is-centered.is-mobile
    .column.is-half.pl-4
      value-item(material-name="sheets" :material="materials.sheets")
      value-item(v-if="job === 'Ceiling'" material-name="angles" :material="materials.angles")
      value-item(v-if="job === 'Ceiling'" material-name="principals" :material="materials.principals")
      value-item(v-if="job !== 'Ceiling'" material-name="canals" :material="materials.canals")
      value-item(:material-name="omegas_parals" :material="materials.omegas_parals")
      value-item(material-name="paint_keg" :material="materials.paint_keg")
      value-item(material-name="putty" :material="materials.putty")
      value-item(material-name="dust_putty" :material="materials.dust_putty")
      value-item(material-name="screws" :material="materials.screws")
</template>

<script>
import ValueItem from "@/features/drywall_calculation/presentation/components/ValueItem";
export default {
  name: "ValueTable",
  components: {ValueItem},
  props: [
      'materials', 'job'
  ],
  computed: {
    omegas_parals: function() {
      console.log(this.job);
      return this.job === 'Ceiling' ? 'omegas' : 'parals';
    }
  }
}
</script>

<style lang="scss" scoped>
.column {
  padding: .2em !important;
}
</style>
