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
  <Jour
    jour="Lundi"
    @sendDataJour="(data) => console.log(data)"
    :dateJour="getDateOfEachDay(0)"
    :dateMonth="getMonthOfEachDay(0)"
    :dateYear="new Date(date[0]).getFullYear()"
  />
  <Jour
    jour="Mardi"
    :dateJour="getDateOfEachDay(1)"
    :dateMonth="getMonthOfEachDay(1)"
    :dateYear="new Date(date[0]).getFullYear()"
  />
  <Jour
    jour="Mercredi"
    :dateJour="getDateOfEachDay(2)"
    :dateMonth="getMonthOfEachDay(2)"
    :dateYear="new Date(date[0]).getFullYear()"
  />
  <Jour
    jour="Jeudi"
    :dateJour="getDateOfEachDay(3)"
    :dateMonth="getMonthOfEachDay(3)"
    :dateYear="new Date(date[0]).getFullYear()"
  />
  <Jour
    jour="Vendredi"
    :dateJour="getDateOfEachDay(4)"
    :dateMonth="getMonthOfEachDay(4)"
    :dateYear="new Date(date[0]).getFullYear()"
  />
  <Jour
    jour="Samedi"
    :dateJour="getDateOfEachDay(5)"
    :dateMonth="getMonthOfEachDay(5)"
    :dateYear="new Date(date[0]).getFullYear()"
  />
  <Jour
    jour="Dimanche"
    :dateJour="getDateOfEachDay(6)"
    :dateMonth="getMonthOfEachDay(6)"
    :dateYear="new Date(date[0]).getFullYear()"
  />
</template>

<script>
import Jour from "./Jour-Amplitude.vue";
import { store } from "./store.js";

export default {
  name: "Semaine-Amplitude",
  components: {
    Jour,
  },
  data() {
    return {
      store: store,
      date: "",
      debutSemaine: "",
      debutSemaineObject: "",
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
    getDateOfEachDay(numberOfDay) {
      const date = new Date(this.debutSemaineObject);
      date.setDate(date.getDate() + numberOfDay);
      return date.getDate();
    },
    getMonthOfEachDay(numberOfDay) {
      const date = new Date(this.debutSemaineObject);
      date.setDate(date.getDate() + numberOfDay);
      return date.getMonth() + 1;
    },
    handleDate: function (modelData) {
      this.debutSemaineObject = modelData[0];
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