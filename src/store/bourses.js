import axios from "axios";
import { defineStore } from "pinia";

export const useboursesStore = defineStore("bourses", {
  state: () => ({
    bourses: [],
    clicked_attributions: false,
    clicked_renouvellements: false,
  }),
  getters: {
    //filtre sur le state bourse pour obtenir les bourses types attributions
    bourses_attributions() {
      return this.bourses.filter(
        (element) => (element = element.nom_groupe.includes("ATTRIBUTION"))
      );
    },
    //filtre sur le state bourse pour obtenir les bourses types renouvellements
    bourses_renouvellements() {
      return this.bourses.filter(
        (element) => (element = element.nom_groupe.includes("RENOUVELLEMENT"))
      );
    },
    //map sur les bourses types attributions pour obtenir leur montant
    montant_attributions() {
      return this.bourses_attributions.map(
        (element) => (element = parseInt(element.total_paye))
      );
    },

    //map sur les bourses types renouvellement pour obtenir leur montant
    montant_renouvellements() {
      return this.bourses_renouvellements.map(
        (element) => (element = parseInt(element.total_paye))
      );
    },
  },
  actions: {
    //requete axios get pour assigner des données au state bourses
    async obtenir_les_bourses() {
      await axios
        .get("http://localhost:5000/paiment_bourses")
        .then((res) => {
          this.bourses = res.data;
        })
        .catch((err) => console.error(err));
    },
    //fonction pour revenir à l'accueil
    accueil() {
      this.clicked_attributions = false;
      this.clicked_renouvellements = false;
    },
  },
});
