<template>
  <!-- sidebar -->
  <aside id="left-panel" class="left-panel">
    <nav class="navbar navbar-expand-sm navbar-default">
      <div class="navbar-header">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#main-menu"
          aria-controls="main-menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa fa-bars"></i>
        </button>
        <a class="navbar-brand" href="./"
          ><img src="../images/logo.png" alt="Logo"
        /></a>
        <a class="navbar-brand hidden" href="./"
          ><img src="../images/logo2.png" alt="Logo"
        /></a>
      </div>

      <div id="main-menu" class="main-menu collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <button
            class="btn-side"
            style="cursor: pointer"
            @click="accueil"
            :disabled="!clicked_attributions && !clicked_renouvellements"
          >
            <li class="active">
              <a> <i class="menu-icon fa fa-dashboard"></i>Accueil</a>
            </li>
          </button>
          <h3 class="menu-title">Nature</h3>
          <!-- /.menu-title -->
          <button
            class="btn-side"
            :class="{ nature: clicked_attributions }"
            @click="fonction_attribution"
            :disabled="clicked_attributions"
          >
            <li class="menu-item">
              <a style="cursor: pointer">
                <i class="menu-icon fa fa-laptop" style="color: white"></i
                >Attribution
              </a>
            </li>
          </button>
          <button
            class="btn-side"
            :class="{ nature: clicked_renouvellements }"
            @click="fonction_renouvellement"
            :disabled="clicked_renouvellements"
          >
            <li class="menu-item">
              <a style="cursor: pointer">
                <i class="menu-icon fa fa-tasks"></i>Renouvellement
              </a>
            </li>
          </button>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </nav>
  </aside>
  <!-- /#sidebar -->

  <!-- Tableau -->
  <div id="right-panel" class="right-panel">
    <!-- Header-->
    <header id="header" class="header">
      <div class="header-menu">
        <div class="col-sm-7">
          <div class="header-left">
            <h4 class="">BOURSES MENA 2022-2023 PHASE 1</h4>
            <div class="form-inline">
              <form class="search-form">
                <input
                  class="form-control mr-sm-2"
                  type="text"
                  placeholder="Search ..."
                  aria-label="Search"
                />
                <button class="search-close" type="submit">
                  <i class="fa fa-close"></i>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div class="col-sm-5">
          <div class="user-area dropdown float-right">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                class="user-avatar rounded-circle"
                src="../images/admin.png"
                alt="User Avatar"
              />
            </a>

            <div class="user-menu dropdown-menu">
              <a class="nav-link" href="#"
                ><i class="fa fa-user"></i> My Profile</a
              >

              <a class="nav-link" href="#"
                ><i class="fa fa-cog"></i> Settings</a
              >

              <a class="nav-link" href="#"
                ><i class="fa fa-power-off"></i> Logout</a
              >
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- /header -->
    <!-- Header-->

    <div class="breadcrumbs">
      <div class="col-sm-4">
        <div class="page-header float-left">
          <div class="page-title">
            <h1 v-if="clicked_attributions">Tableau des Attributions</h1>
            <h1 v-else-if="clicked_renouvellements">
              Tableau des Renouvellements
            </h1>
            <h1 v-else>TABLEAU DE BORD</h1>
          </div>
        </div>
      </div>
      <div class="col-sm-8">
        <div class="page-header float-right">
          <div class="page-title">
            <ol class="breadcrumb text-right">
              <li class="active">Dashboard</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <div class="content mt-3">
      <div class="col-sm-12">
        <div
          v-if="clicked_attributions || clicked_renouvellements"
          class="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <span class="badge badge-pill badge-warning">Important</span>
          Veuillez cliquer sur le nom du poste comptable pour avoir plus de
          détails sur ce dernier.
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div
          v-else
          class="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <span class="badge badge-pill badge-success">Success</span>
          Connexion réussie !! Veuillez sélectionner maintenant la nature de
          votre opération.
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
      <div class="col-xl-12" v-if="clicked_attributions">
        <div class="card">
          <div class="card-body">
            <table
              id="nature"
              class="table-responsive table-hover align-middle mb-0"
            >
              <thead>
                <tr>
                  <th id="aa">Poste comptable</th>
                  <th>Bourses</th>
                  <th>Payé</th>
                  <th>Reste à payer</th>
                  <th>Statut</th>
                  <th>Date 1er paiement</th>
                  <th>Date second paiement</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(bourse, index) in bourses_attributions"
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
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click="obtenir_detail_d_un_paiement(bourse.id_paiement)"
                    >
                      +Détails
                    </button>
                  </td>
                </tr>
              </tbody>
              <tfooter>
                <td></td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
              </tfooter>
            </table>
          </div>
        </div>
      </div>
      <div class="col-xl-12" v-else-if="clicked_renouvellements">
        <div class="card">
          <div class="card-body">
            <table
              id="nature"
              class="table-responsive table-hover align-middle mb-0"
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
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(bourse, index) in bourses_renouvellements"
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
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click="obtenir_detail_d_un_paiement(bourse.id_paiement)"
                    >
                      +Détails
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-xl-12" v-else>
        <div class="p-5 mb-4 bg-body-tertiary rounded-3 jumbotron">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Tableau des bourses</h1>
            <p class="col-md-8 fs-4">
              Bienvenue sur le tableau de bord de gestion des bourses MENA
              2022-2023, ici vous pouvez consulter les attributions et
              renouvellements des bourses de la session 2022-2023 Veuillez
              cliquer sur commencer
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
              <a href="https://www.tresor.gouv.ci/tres/">Trésor Public</a>, Tous
              droits reservés
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
    <!-- .content -->
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
import { init_datatables } from "@/helpers/helpers_datatable.js";
import Sidebar from "@/components/Sidebar.vue";
export default {
  name: "dashboard",
  components: { Sidebar },
  data() {
    return {
      initial_value: 0,
      cumul_attributions: "",
      cumul_renouvellemnents: "",
      montant_attributions: "",
      montant_renouvellements: "",
      montant_payer_total: 0,
      bourses_attributions: "",
      bourses_renouvellements: "",
      clicked_attributions: false,
      clicked_renouvellements: false,
      begin: false,
      formaterHoursAndDate: () => {},
      init_datatables: () => {},
      cursorPosition: "",
    };
  },
  methods: {
    obtenir_les_paiements() {
      axios
        .get("http://localhost:5000/paiment_bourses")
        .then((res) => {
          // filtre recuperer les attributions d'un coté et de l'autre renouvellements
          this.bourses_attributions = res.data.filter(
            (element) => (element = element.nom_groupe.includes("ATTRIBUTION"))
          );

          this.bourses_renouvellements = res.data.filter(
            (element) =>
              (element = element.nom_groupe.includes("RENOUVELLEMENT"))
          );

          // map pour recuperer la colonne de l'argent des attributions d'un coté et de l'autre renouvellements
          this.montant_attributions = this.bourses_attributions.map(
            (element) => (element = parseInt(element.total_paye))
          );
          this.montant_renouvellements = this.bourses_renouvellements.map(
            (element) => (element = parseInt(element.total_paye))
          );

          // reduce pour calculer le cumul total de l'argent des attributions d'un coté et de l'autre renouvellements
          this.cumul_attributions = this.montant_attributions.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            this.initial_value
          );

          this.cumul_renouvellemnents = this.montant_renouvellements.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            this.initial_value
          );

          console.log(this.montant_attributions);
          console.log(this.cumul_attributions);
          console.log(this.montant_renouvellements);
          console.log(this.cumul_renouvellemnents);
          // console.log(this.bourses_attributions);
          // console.log(this.bourses_renouvellements);
        })
        .catch((err) => console.error(err));
    },

    accueil() {
      this.clicked_attributions = false;
      this.clicked_renouvellements = false;
    },

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
            this.fonction_attribution();
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            this.fonction_renouvellement();
          }
        });
    },

    fonction_attribution() {
      this.clicked_attributions = true;
      this.clicked_renouvellements = false;
      Swal.fire({
        title: "Chargement!",
        html: "Veuillez patientez svp...",
        backdrop: `#00000061 left top`,
        timer: 500,
        timerProgressBar: true,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      this.init_datatables();
    },
    fonction_renouvellement() {
      this.clicked_attributions = false;
      this.clicked_renouvellements = true;
      Swal.fire({
        title: "Chargement!",
        html: "Veuillez patientez svp...",
        backdrop: `#00000061 left top`,
        timer: 500,
        timerProgressBar: true,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      this.init_datatables();
    },
    obtenir_detail_d_un_paiement(element) {
      return console.log(element);
    },
  },

  mounted() {
    this.formaterHoursAndDate = formaterHoursAndDate;
    this.init_datatables = init_datatables;
    this.obtenir_les_paiements();
    //script de chargement de page

    setTimeout(() => {
      this.begin = true;
    }, "2000");
  },
};
</script>

<style scoped>
.btn-side {
  border: none;
  background-color: #034c14;
}

.anime {
  animation: wiggle 2s linear infinite;
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
