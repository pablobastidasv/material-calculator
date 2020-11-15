<template lang="pug">
  div
    .title Calculadora de materiales
    Form(v-on:search="calculate")
    ValueTable(:materials="materials")

</template>

<script>
import Form from "@/features/drywall_calculation/presentation/components/Form";
import ValueTable from "@/features/drywall_calculation/presentation/components/ValueTable";
import DrywallCalculator from "@/features/drywall_calculation/domain/boundary/drywall-calculator";
export default {
  name: "Main",
  components: {ValueTable, Form},
  data: () => {
    return {
      materials: []
    }
  },
  methods: {
    calculate: async function($parameters) {
      const calculator = new DrywallCalculator();
      this.materials = await calculator.calculate($parameters);
    }
  }
}
</script>
