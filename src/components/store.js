import { reactive } from 'vue'

export const store = reactive({
    weekdata: {
        lundi: { day: 'lundi', date: "12/12/2023", year: 2023, month: "december", amplitude: 12 },
        mardi: { day: 'mardi', date: "13/12/2023", year: 2023, month: "december" },
        mercredi: {},
        jeudi: {},
        vendredi: {},
        samedi: {},
        dimanche: {}
    },

    saveLundi(data) {
        this.weekdata.lundi = data
        console.log('les données du store de weekData lundi : ' + this.weekdata.lundi.amplitude)
    }


})