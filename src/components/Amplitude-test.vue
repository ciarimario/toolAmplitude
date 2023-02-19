<template>
  <div class="hello">
    {{ annee }}
    <Jour jour="Lundi" />
    <Jour jour="Mardi" />
    <Jour jour="Mercredi" />
    <Jour jour="Jeudi" />
    <Jour jour="Vendredi" />
    <Jour jour="Samedi" />
    <Jour jour="Dimanche" />
  </div>
</template>

<script>
import Jour from "./Jour-Amplitude.vue";
export default {
  name: "Amplitude-test",
  props: {
    msg: String,
  },
  data() {
    return {
      date: Date(),
    };
  },
  computed: {
    annee: function () {
      return this.date;
    },
  },
  components: { Jour },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
