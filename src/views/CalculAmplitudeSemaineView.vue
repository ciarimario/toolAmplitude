<template>
  <h1>Calculer l'amplitude de votre semaine de travail</h1>
  <div class="SemaineAmplitudeView">
    <SemaineAmplitude />
  </div>
</template>
  
  <script>
// @ is an alias to /src
import SemaineAmplitude from "@/components/Semaine-Amplitude.vue";

export default {
  name: "CalculAmplitudeSemaineView",
  components: {
    SemaineAmplitude,
  },
};
</script>