<template lang="pug">
  div
    h1 Calculadora de materiales
    Form

</template>

<script>
import Form from "@/features/drywall_calculation/presentation/components/Form";
export default {
  name: "Main",
  components: {Form}
}
</script>

<style scoped>
h1 {
  color: royalblue;
  font-size: 2em;
  font-weight: bold;
}
</style>
