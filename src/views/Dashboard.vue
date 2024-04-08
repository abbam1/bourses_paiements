<template>
  <div class="breadcrumbs">
    <div class="col-sm-8">
      <div class="page-header float-left">
        <div class="page-title">
          <h1 v-if="this.store.clicked_attributions" style="font-size: 20px">
            <h4>Filtre de recherche des attributions</h4>
            <form>
              <div class="d-flex" style="justify-content: space-around !important">
                <select class="form-control" style="width: 350px">
                  <option>Rechercher un poste comptable</option>
                  <option
                    v-for="(bourse, index) in this.store.bourses_attributions"
                    :key="index"
                  >
                    {{ bourse.libelle_poste_comptable }}
                  </option>
                </select>
                <button class="btn btn-primary">Chercher</button>
              </div>
            </form>
          </h1>
          <h1 v-else-if="this.store.clicked_renouvellements">
            <h4>Les renouvellements</h4>
            <form>
              <div class="d-flex" style="justify-content: space-around !important">
                <select class="form-control" style="width: 350px">
                  <option>Rechercher un poste comptable</option>
                  <option
                    v-for="(bourse, index) in this.store.bourses_renouvellements"
                    :key="index"
                  >
                    {{ bourse.libelle_poste_comptable }}
                  </option>
                </select>
                <button class="btn btn-primary">Chercher</button>
              </div>
            </form>
          </h1>
          <h1 v-else>TABLEAU DE BORD</h1>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="page-header float-right">
        <h1 v-if="this.store.clicked_attributions">Etat des attributions</h1>
        <h1 v-else-if="this.store.clicked_renouvellements">Etat des renouvellements</h1>
        <h1 v-else></h1>
      </div>
    </div>
  </div>
  <div
    class="content mt-3"
    v-if="this.store.clicked_attributions || this.store.clicked_renouvellements"
  >
    <h4 style="padding-left: 18px" v-if="this.store.clicked_attributions">
      Statistiques des attributions de 2022-2023
    </h4>
    <h4 style="padding-left: 18px" v-if="this.store.clicked_renouvellements">
      Statistiques des renouvellements de 2022-2023
    </h4>
    <hr />
    <div class="col-sm-6 col-lg-3">
      <div class="card1 text-white bg-flat-color-1">
        <div class="card1-body pb-0">
          <div class="chart-wrapper px-0" style="height: 70px; margin-left: 10px">
            <i class="fa fa-graduation-cap" style="font-size: 40px"></i>
          </div>
          <h4 class="mb-0">
            <span class="count">10468</span>
          </h4>
          <p class="text-light">Nombres d'élèves</p>
        </div>
      </div>
    </div>
    <!--/.col-->

    <div class="col-sm-6 col-lg-3">
      <div class="card1 text-white bg-flat-color-2">
        <div class="card1-body pb-0">
          <div class="chart-wrapper px-0" style="height: 70px; margin-left: 10px">
            <i class="fa fa-book" style="font-size: 40px"></i>
          </div>
          <h4 class="mb-0">
            <span class="count">142 344 000</span>
          </h4>
          <p class="text-light">BDC édités</p>
        </div>
      </div>
    </div>
    <!--/.col-->

    <div class="col-sm-6 col-lg-3">
      <div class="card1 text-white bg-flat-color-3">
        <div class="card1-body pb-0">
          <div class="chart-wrapper px-0" style="height: 70px; margin-left: 10px">
            <i class="fa fa-check-square" style="font-size: 40px"></i>
          </div>
          <h4 class="mb-0">
            <span class="count">54 956 520 CFA</span>
          </h4>
          <p class="text-light">Paiements effectués</p>
        </div>
      </div>
    </div>
    <!--/.col-->

    <div class="col-sm-6 col-lg-3">
      <div class="card1 text-white bg-flat-color-4">
        <div class="card1-body pb-0">
          <div class="chart-wrapper px-0" style="height: 70px; margin-left: 10px">
            <i class="fa fa-times" style="font-size: 40px"></i>
          </div>
          <h4 class="mb-0">
            <span class="count">87 387 480 CFA</span>
          </h4>
          <p class="text-light">Reste à payer</p>
        </div>
      </div>
    </div>
    <!--/.col-->
  </div>
  <div class="content mt-3">
    <div class="col-sm-12">
      <h5 v-if="this.store.clicked_attributions">Tableau des Attributions</h5>

      <div
        v-if="
          this.store.clicked_attributions == false &&
          this.store.clicked_renouvellements == false
        "
        class="alert alert-success alert-dismissible fade show"
        role="alert"
      >
        <span class="badge badge-pill badge-success">Success</span>
        Connexion réussie !! Veuillez sélectionner maintenant la nature de votre
        opération.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
    <div class="col-xl-12" v-if="this.store.clicked_attributions">
      <div class="card">
        <table
          id="table_bourse"
          class="table-striped table-responsive table-bordered align-middle mb-0"
        >
          <thead>
            <tr>
              <th>Poste comptable</th>
              <th>Bourses</th>
              <th>Payé</th>
              <th>Reste à payer</th>
              <th>Statut</th>
              <th>Date 1er paiement</th>
              <th>Date second paiement</th>
            </tr>
          </thead>
          <tfoot style="display: table-header-group">
            <tr>
              <th>Poste comptable</th>
              <th>Bourses</th>
              <th>Payé</th>
              <th>Reste à payer</th>
              <th>Statut</th>
              <th>Date 1er paiement</th>
              <th>Date second paiement</th>
            </tr>
          </tfoot>
          <tbody>
            <tr v-for="(bourse, index) in this.store.bourses_attributions" :key="index">
              <td>{{ bourse.libelle_poste_comptable }}</td>
              <td>{{ bourse.nom_groupe }}</td>
              <td>{{ bourse.total_paye }} CFA</td>
              <td>{{ bourse.total_non_paye }} CFA</td>
              <td>{{ bourse.status }}</td>
              <td>{{ formaterHoursAndDate(bourse.date_paiement) }}</td>
              <td>
                {{ formaterHoursAndDate(bourse.date_paiement_eff) }}
                <span v-if="bourse.status == 'partial'" style="color: red"
                  >(NON SOLDE)</span
                >
                <span v-else style="color: green">(SOLDE)</span>
              </td>
              <button
                type="button"
                class="btn btn-primary"
                @click="obtenir_detail_d_un_paiement(bourse.id_paiement)"
                style="margin-top: 15px"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
              >
                +Détails
              </button>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Total</th>
              <th>0000000</th>
              <th>0000000</th>
              <th>0000000</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <div class="col-xl-12" v-else-if="this.store.clicked_renouvellements">
      <h5>Tableau des renouvellements</h5>
      <div class="card">
        <table
          id="table_bourse"
          class="table-striped table-responsive table-bordered align-middle mb-0"
        >
          <thead>
            <tr>
              <th>Poste comptable</th>
              <th>Bourses</th>
              <th>Payé</th>
              <th>Reste à payer</th>
              <th>Statut</th>
              <th>Date 1er paiement</th>
              <th>Date second paiement</th>
            </tr>
          </thead>
          <tfoot style="display: table-header-group">
            <tr>
              <th>Poste comptable</th>
              <th>Bourses</th>
              <th>Payé</th>
              <th>Reste à payer</th>
              <th>Statut</th>
              <th>Date 1er paiement</th>
              <th>Date second paiement</th>
            </tr>
          </tfoot>
          <tbody>
            <tr
              v-for="(bourse, index) in this.store.bourses_renouvellements"
              :key="index"
            >
              <td>{{ bourse.libelle_poste_comptable }}</td>
              <td>{{ bourse.nom_groupe }}</td>
              <td>{{ bourse.total_paye }} CFA</td>
              <td>{{ bourse.total_non_paye }} CFA</td>
              <td>{{ bourse.status }}</td>
              <td>{{ formaterHoursAndDate(bourse.date_paiement) }}</td>
              <td>
                {{ formaterHoursAndDate(bourse.date_paiement_eff) }}
                <span v-if="bourse.status == 'partial'" style="color: red"
                  >(NON SOLDE)</span
                >
                <span v-else style="color: green">(SOLDE)</span>
              </td>
              <button
                type="button"
                class="btn btn-primary"
                @click="obtenir_detail_d_un_paiement(bourse.id_paiement)"
                style="margin-top: 15px"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
              >
                +Détails
              </button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-xl-12" v-else>
      <div class="p-5 mb-4 bg-body-tertiary rounded-3 jumbotron">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">Tableau des bourses</h1>
          <p class="col-md-8 fs-4">
            Bienvenue sur le tableau de bord de gestion des bourses MENA 2022-2023, ici
            vous pouvez consulter les attributions et renouvellements des bourses de la
            session 2022-2023 Veuillez cliquer sur commencer
          </p>
          <button
            class="btn btn-primary btn-lg"
            type="button"
            :class="{ anime: begin }"
            @click="commencer"
          >
            Commencer
          </button>
        </div>
      </div>
      <!--footer-->
      <div class="container">
        <footer class="d-flex flex-wrap py-3 my-4 border-top footer">
          <p class="col-md-4 mb-0 text-body-secondary">
            &copy; 2024
            <a href="https://www.tresor.gouv.ci/tres/">Trésor Public</a>, Tous droits
            reservés
          </p>

          <a
            href="/"
            class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <svg class="bi me-2" width="40" height="32">
              <use xlink:href="#bootstrap" />
            </svg>
          </a>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item">
              <a
                href="mailto:cnit@tresor.gouv.ci"
                class="nav-link px-2 text-body-secondary"
              >
                Email: cnit@tresor.gouv.ci</a
              >
            </li>
          </ul>
        </footer>
      </div>
      <!--footer-->
    </div>
  </div>
  <!-- pop_up -->
  <div
    class="modal fade bd-example-modal-lg"
    tabindex="-1"
    role="dialog"
    aria-labelledby="myLargeModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" style="max-width: 1000px">
      <div class="modal-content">
        <div class="card-body">
          <table id="popup" class="table align-middle mb-0 table-striped table-bordered">
            <thead>
              <tr>
                <th>Nom et prenoms</th>
                <th>Identifiant</th>
                <th>Téléphone</th>
                <th>Montant</th>
                <th>Statut</th>
                <th>Dates</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in paiementDetails" :key="index">
                <td>{{ item.prenom_beneficiaire }}</td>
                <td>{{ item.identifiant_unique_beneficiaire }}</td>
                <td>{{ item.telephone_beneficiaire }}</td>
                <td>{{ item.montant_transaction }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.date_creation }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- Tableau -->
</template>
<style scoped>
.jumbotron {
  background-color: #efefef !important;
}
</style>
<script>
import axios from "axios";
import { formaterHoursAndDate } from "@/helpers/helpers_date.js";
import Sidebar from "@/components/Sidebar.vue";
import { useboursesStore } from "@/store/bourses";
import { fonction_go_to_attribution } from "@/helpers/helpers_go_to_attribution.js";
import { fonction_go_to_renouvellement } from "@/helpers/helpers_go_to_renouvellement.js";

export default {
  name: "dashboard",
  components: { Sidebar },
  data() {
    return {
      store: useboursesStore(),
      initial_value: 0,
      paiementDetails: [],
      cumul_attributions: "",
      cumul_renouvellemnents: "",
      montant_payer_total: 0,
      begin: false,
      formaterHoursAndDate: () => {},
      fonction_go_to_attribution: () => {},
      fonction_go_to_renouvellement: () => {},
    };
  },
  methods: {
    commencer() {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-success",
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: "Nature",
          text: "Quel nature souhaitez vous verifier?",
          icon: "success",
          showCancelButton: true,
          confirmButtonText: "Attribution",
          cancelButtonText: "Renouvellement",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.fonction_go_to_attribution();
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            this.fonction_go_to_renouvellement();
          }
        });
    },

    obtenir_detail_d_un_paiement(idPaiement) {
      axios
        .get("http://localhost:5000/detail_un_paiement/" + idPaiement)
        .then((res) => {
          this.paiementDetails = res.data;
          $(document).ready(function () {
            $("#popup").DataTable({
              language: {
                url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
              },
              bDestroy: true,
              pageLength: 5,
              lengthMenu: [
                [5, 10, 25, 50, -1],
                [5, 10, 25, 50, "Tous"],
              ],
            });
          });

          console.log(this.paiementDetails);
        })
        .catch((err) => {})
        .finally(() => {});
    },
  },
  mounted() {
    this.formaterHoursAndDate = formaterHoursAndDate;
    this.fonction_go_to_attribution = fonction_go_to_attribution;
    this.fonction_go_to_renouvellement = fonction_go_to_renouvellement;
    //script de chargement de page
    setTimeout(() => {
      this.begin = true;
    }, "2000");
  },
};
</script>

<style scoped>
.anime {
  animation: wiggle 2s linear infinite;
}

.right-panel .breadcrumbs {
  background-color: #efefef !important;
}
.right-panel .page-header {
  background-color: #efefef !important;
}

.right-panel .page-header .breadcrumb {
  background-color: #efefef !important;
}

.card1 {
  position: relative !important;
  display: flex !important;
  -ms-flex-direction: column !important;
  flex-direction: column !important;
  min-width: 0 !important;
  word-wrap: break-word !important;
  background-color: #fff !important;
  background-clip: border-box !important;
  border: 1px solid rgba(0, 0, 0, 0.125) !important;
  border-radius: 0.25rem !important;

  background-color: #034c14 !important;
}

.card1-body {
  padding-top: 0 !important;
  padding-left: 0 !important;
  padding-bottom: 0 !important;
  padding: 15px !important;
}

@media (min-width: 992px) {
  .modal-lg {
    max-width: 1000px !important;
    max-height: 1000px !important;
  }
}

/* Keyframes */
@keyframes wiggle {
  0%,
  7% {
    transform: rotateZ(0);
  }
  15% {
    transform: rotateZ(-15deg);
  }
  20% {
    transform: rotateZ(10deg);
  }
  25% {
    transform: rotateZ(-10deg);
  }
  30% {
    transform: rotateZ(6deg);
  }
  35% {
    transform: rotateZ(-4deg);
  }
  40%,
  100% {
    transform: rotateZ(0);
  }
}
</style>
