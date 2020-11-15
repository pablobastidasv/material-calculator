<template lang="pug">
  div
    .title Calculadora de materiales
    Form(v-on:search="calculate")
    ValueTable(:materials="materials")

</template>

<script>
import Form from "@/features/drywall_calculation/presentation/components/Form";
import ValueTable from "@/features/drywall_calculation/presentation/components/ValueTable";
export default {
  name: "Main",
  components: {ValueTable, Form},
  data: () => {
    return {
      materials: []
    }
  },
  methods: {
    calculate: function($parameters) {
      console.log("Calculating", $parameters);
      this.materials= [
        {
          name: "Area",
          value: "6",
          unit: "m^2"
        },{
          name: "Perímetro",
          value: "6",
          unit: "m"
        }
      ]
    }
  }
}
</script>
