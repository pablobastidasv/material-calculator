<template lang="pug">
  div
    .title Calculadora de materiales
    Form(v-on:search="calculate")
    ValueTable(:materials="materials" :job="job")

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
      materials: {},
      job: ''
    }
  },
  methods: {
    calculate: async function($parameters) {
      this.job = $parameters.job;
      this.materials = await new DrywallCalculator().calculate($parameters);
      console.log(this.materials);
    }
  }
}
</script>
