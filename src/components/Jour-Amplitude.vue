<template>
  <div class="wrapper">
    <h1>{{ jour }}</h1>
    <div class="donnees">
      <section class="debut">
        <div>
          <h2>Début de journée</h2>
        </div>
        <div>
          <input
            v-model="heureDebut"
            id="heure"
            maxlength="2"
            type="number"
            max="23"
            ref="input1"
          />
          <label for="heure">H</label>
          <input
            v-model="minutesDebut"
            id="minutes"
            type="number"
            max="59"
            maxlength="2"
            name=""
            ref="input2"
          />
        </div>
      </section>

      <section class="fin">
        <h2>Fin de journée</h2>

        <div>
          <input v-model="heureFin" id="heure" type="number" ref="input3" />
          <label for="heure">H</label>
          <input
            v-model="minutesFin"
            id="minutes"
            type="number"
            name=""
            ref="input4"
          />
        </div>
      </section>

      <section class="pauseRepas">
        <section>
          <h3>Début de la pause repas</h3>
          <div>
            <input
              v-model="debutPauseRepasHeure"
              id="heure"
              type="number"
              max="23"
            />
            <label for="heure">H</label>
            <input
              v-model="debutPauseRepasMinutes"
              id="minutes"
              type="number"
              max="60"
              name="minutes"
            />
          </div>
        </section>

        <section v-if="dureePauseRepas > 0">
          <h3>Durée de la pause repas</h3>
          <div>
            <input
              v-model="dureePauseRepas"
              id="minutes"
              type="number"
              max="60"
              min="0"
            />
            minutes
          </div>
        </section>

        <section>
          <h3>Fin de la pause repas</h3>
          <div>
            <input
              v-model="finPauseRepasHeure"
              id="heure"
              type="number"
              max="23"
            />
            <label for="heure">H</label>
            <input
              v-model="finPauseRepasMinutes"
              id="minutes"
              type="number"
              max="59"
              name=""
            />
          </div>
        </section>
      </section>

      <section class="pause">
        <h2>Pause</h2>

        <section>
          <div></div>
          <div>
            <input v-model="pause" id="minutes" type="number" name="" />
          </div>
          <span>en minutes</span>
        </section>
      </section>

      <section class="resume">
        <div class="resultat">
          <h4>
            <p>Voici votre Amplitude</p>
            <span
              class="resume-resultat-amplitude"
              v-if="finCalcHeuresEnMinutes > 0"
              ><span class="span-reflet"></span
              >{{ amplitudeCalc.toFixed(2) }} HEURES
            </span>
          </h4>
        </div>
        <div class="panierRepas">
          <button class="btn-main" @click="panierRepasCalc">
            Ai-je droit à un panier repas
          </button>
          <h4>
            Panier repas : <span>{{ affichePanierRepasAccorde }} €</span>
          </h4>
        </div>
        <div>
          <button @click="enregistrerDataJour" class="btn-save">
            Valider et enregistrer
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Jour-Amplitude",
  props: {
    jour: String,
    semaine: Number,
  },
  watch: {
    heureDebut(newHeureDebut, oldHeureDebut) {
      console.log(oldHeureDebut);
      if (newHeureDebut.toString().length == 2) {
        this.$refs.input2.focus();
      }
    },
    minutesDebut(newHinutesDebut, oldMinutesDebut) {
      console.log(oldMinutesDebut);
      if (newHinutesDebut.toString().length == 2) {
        this.$refs.input3.focus();
      }
    },
    heureFin(newHeureFin, oldHeureFin) {
      console.log(oldHeureFin);
      if (newHeureFin.toString().length == 2) {
        this.$refs.input4.focus();
      }
    },
  },

  data() {
    return {
      date: "",
      heureDebut: "",
      minutesDebut: "",
      heureFin: "",
      minutesFin: "",
      pauseRepas: "",
      pause: "",
      amplitude: "",
      debutPauseRepasHeure: "",
      debutPauseRepasMinutes: "",
      finPauseRepasHeure: "",
      finPauseRepasMinutes: "",
      paniersRepasMontants: [0, 3.3, 8.5, 13.67],
      panierRepasAccorde: 0,
      dataDay: {
        date: {
          jour: 1,
          mois: "mars",
          annee: 2023,
          semaine: 33,
        },
      },
    };
  },
  computed: {
    debutCalcHeuresEnMinutes: function () {
      return this.heureDebut * 60 + this.minutesDebut;
    },
    finCalcHeuresEnMinutes: function () {
      return this.heureFin * 60 + this.minutesFin;
    },
    debutPauseRepasCalc: function () {
      return this.debutPauseRepasHeure * 60 + this.debutPauseRepasMinutes;
    },
    finPauseRepasCalc: function () {
      return this.finPauseRepasHeure * 60 + this.finPauseRepasMinutes;
    },
    dureePauseRepas: function () {
      return this.finPauseRepasCalc - this.debutPauseRepasCalc;
    },
    amplitudeBrut: function () {
      return this.finCalcHeuresEnMinutes - this.debutCalcHeuresEnMinutes;
    },
    amplitudeCalc: function () {
      return (this.amplitudeBrut - this.dureePauseRepas - this.pause) / 60;
    },
    affichePanierRepasAccorde: function () {
      return this.panierRepasAccorde;
    },
  },
  methods: {
    panierRepasCalc: function () {
      if (this.dureePauseRepas < 20) {
        this.panierRepasAccorde = this.paniersRepasMontants[3];
        return;
      }

      if (this.dureePauseRepas < 30) {
        this.panierRepasAccorde = this.paniersRepasMontants[2];
        return;
      }
      if (this.dureePauseRepas < 60) {
        this.panierRepasAccorde = this.paniersRepasMontants[1];
        return;
      }
      if (this.dureePauseRepas > 59) {
        this.panierRepasAccorde = this.paniersRepasMontants[0];
        return;
      }
    },
    enregistrerDataJour() {
      if (this.amplitudeCalc) {
        this.amplitude = this.amplitudeCalc.toFixed(2);
      }
      console.log(this.amplitude);
    },
  },
};
</script>

<style>
/* Variables */
:root {
  --radius-amount: 0px;
  --main-text-color: #fff;
  --main-bgcolor: #242323;
  --day-bgcolor: #1b1a1a;
  --debut-journee-bgcolor: #f3ca20;
  --pause-repas-bgcolor: #000;
  --pause-repas-textColor: #fff;
}
/* Mobile First */
h1 {
  background-color: var(--day-bgcolor);
  color: var(--main-text-color);
  margin: 0;
  padding: 1em;
  font-size: 14px;
}
.panierRepas button.btn-main {
  cursor: pointer;
  padding: 1em;
  background-color: #f3ca20;
  border-radius: 10px;
  border: 0;
}

.panierRepas h4 {
  color: #fff;
}

button.btn-save {
  cursor: pointer;
  padding: 2em;
  padding-left: 3em;
  padding-right: 3em;
  width: 100%;
  background-color: #060606;
  border-radius: 10px;
  border: 0;
  color: #fff;
  text-transform: uppercase;
}

.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
}

.donnees {
  height: 100%;
  background-color: var(--main-bgcolor);
}

section h2 {
  font-size: 12px;
}

section.debut {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70px;

  padding-bottom: 1em;
  border-radius: var(--radius-amount);
  background-color: var(--debut-journee-bgcolor);
}

label {
  color: var(--main-text-color);
  margin-right: 5px;
  margin-left: 5px;
}
input[type="number"] {
  width: 50px;
  border: 1px rgba(0, 0, 0, 0.2) solid;
  text-align: center;
  font-size: 1em;
  border-radius: 10px;
}

.fin {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70px;
  padding-bottom: 1em;
  border-radius: var(--radius-amount);
  background-color: var(--debut-journee-bgcolor);
}

/* section.amplitude h1 {
  border: 1px solid red;
  background-color: #fff;
  color: red;
} */

section.amplitude span {
  color: #000;
}

section.pauseRepas {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--pause-repas-textColor);
  padding: 1em;
  margin: 0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  text-align: left;
  border-radius: 0;
  background-color: var(--pause-repas-bgcolor);
}

section.pauseRepas h3 {
  display: inline-block;
  width: 100%;
  font-weight: 300;
  font-size: 12px;
}

section.pause {
  order: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  margin: 0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  text-align: left;
  border-radius: 0;
  background-color: rgb(30, 27, 28);
}

section.pause section {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
}

section.pause div {
  display: inline-block;
}
section.pause h2 {
  color: #fff;
}

section.pause h3 {
  display: inline-block;
  width: 200px;
  font-weight: 300;
  font-size: 12px;
  color: #fff;
}

section.pause span {
  margin-top: 10px;
  font-size: 12px;
}

section.resume {
  order: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.resultat {
  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.resultat h4 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: -20px;
  border-radius: var(--radius-amount);
}

.resultat p {
  text-transform: uppercase;
  color: #f4f0f0;
  font-size: 20px;
  font-weight: bold;
}

.resume-resultat-amplitude {
  position: relative;
  color: #f3ca20;
  background: #000;
  font-size: 2em;
  display: block;
  padding: 1em;
  border-radius: 10px;
}
.resume-resultat-amplitude .span-reflet {
  position: absolute;
  top: 5px;
  left: 5px;
  height: 98%;
  width: 97%;
  border-radius: 10px;
  overflow: hidden;

  background: linear-gradient(
    177deg,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(255, 255, 255, 0.3) 35%,
    rgba(255, 255, 255, 0) 70%
  );
}
</style>
