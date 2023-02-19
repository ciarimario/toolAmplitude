<template>
  <section>
    <VueDatePicker
      v-model="date"
      locale="fr"
      month-name-format="long"
      position="center"
      week-picker
      week-number="iso"
      @update:model-value="handleDate"
    />
    <p v-if="debutSemaine">Semaine du {{ debutSemaine }} au {{ finSemaine }}</p>
  </section>
  <Jour jour="Lundi" />
  <Jour jour="Mardi" />
  <Jour jour="Mercredi" />
  <Jour jour="Jeudi" />
  <Jour jour="Vendredi" />
  <Jour jour="Samedi" />
  <Jour jour="Dimanche" />
</template>

<script>
import Jour from "./Jour-Amplitude.vue";

export default {
  name: "Semaine-Amplitude",
  components: {
    Jour,
  },
  data() {
    return {
      date: "",
      debutSemaine: "",
      finSemaine: "",
      annee: "",
      semaine: "",
      jour: "",
    };
  },
  methods: {
    getDateOfDaysFromWeek: function (week) {
      console.log(week);
      const date = new Date();
      date.getFullYear();
    },
    handleDate: function (modelData) {
      this.debutSemaine = modelData[0].toLocaleDateString();
      this.finSemaine = modelData[1].toLocaleDateString();
    },
  },
  computed: {},
};
</script>

<style scoped>
section.semaine {
  color: #fff;
  background-color: #000;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
}

section.semaine input[type="number"] {
  margin-left: 1em;
}
</style>