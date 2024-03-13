<template>
  <!-- Left Panel -->

  <!-- /#left-panel -->

  <!-- Left Panel -->

  <!-- Right Panel -->

  <div id="right-panel" class="right-panel">
    <!-- Header-->
    <header id="header" class="header">
      <div class="header-menu">
        <div class="col-sm-7">
          <div class="header-left">
            <h4 class="">TABLEAU DE BORD BOURSES MENA 2022-2023 PHASE 1</h4>
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
            <h1>Tableau des Attributions</h1>
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
          class="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <span class="badge badge-pill badge-success">Success</span>
          Connexion réussie !!! Veuillez sélectionner maintenant la nature
          ensuite le poste payeur.
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
      <div class="col-xl-12">
        <div class="card">
          <div class="card-body">
            <table
              id="nature"
              class="table table-hover align-middle mb-0"
              style="width: 100%"
            >
              <thead>
                <tr>
                  <th>Poste comptable</th>
                  <th>Groupe</th>
                  <th>Montant à payer</th>
                  <th>Montant payé</th>
                  <th>Montant non payé</th>
                  <th>Statut</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in 5" :key="index">
                  <td>Trésorerie principale DE OUANINOU</td>
                  <td>10</td>
                  <td>200 000 CFA</td>
                  <td>150 000 CFA</td>
                  <td>50 000 CFA</td>
                  <td>50 000 CFA</td>
                  <td>
                    <button type="button" class="btn btn-primary">
                      Détails
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- .content -->
  </div>
  <!-- /#right-panel -->

  <!-- Right Panel -->
</template>
<script>
import axios from "axios";
export default {
  name: "dashboard",
  components: {},
  data() {
    return {};
  },
  methods: {
    initialiser_datatable() {
      //appel de la datatable
      $(document).ready(function () {
        // Setup - add a text input to each footer cell
        $("#nature thead tr")
          .clone(true)
          .addClass("filters")
          .appendTo("#nature thead");

        $("#nature").DataTable({
          destroy: true,
          columnDefs: [{ width: 200, targets: 0 }],
          responsive: true,
          language: {
            url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
          },
          language: {
            emptyTable: `Veuillez Cliquer sur les boutons de gauche <button class="btn" style="background-color:#008000;color:white;">Attribution</button> ou <button class="btn" style="background-color:#008000;color:white;">Renouvellement</button> pour charger le tableau`,
          },
          orderCellsTop: true,
          fixedHeader: true,
          initComplete: function () {
            var api = this.api();

            // For each column
            api
              .columns()
              .eq(0)
              .each(function (colIdx) {
                // Set the header cell to contain the input element
                var cell = $(".filters th").eq(
                  $(api.column(colIdx).header()).index()
                );
                var title = $(cell).text();
                $(cell).html(
                  '<input type="text" placeholder="' + title + '" />'
                );

                // On every keypress in this input
                $(
                  "input",
                  $(".filters th").eq($(api.column(colIdx).header()).index())
                )
                  .off("keyup change")
                  .on("change", function (e) {
                    // Get the search value
                    $(this).attr("title", $(this).val());
                    var regexr = "({search})"; //$(this).parents('th').find('select').val();

                    this.cursorPosition = this.selectionStart;
                    // Search the column for that value
                    api
                      .column(colIdx)
                      .search(
                        this.value != ""
                          ? regexr.replace(
                              "{search}",
                              "(((" + this.value + ")))"
                            )
                          : "",
                        this.value != "",
                        this.value == ""
                      )
                      .draw();
                  })
                  .on("keyup", function (e) {
                    e.stopPropagation();

                    $(this).trigger("change");
                    $(this)
                      .focus()[0]
                      .setSelectionRange(
                        this.cursorPosition,
                        this.cursorPosition
                      );
                  });
              });
          },
        });
      });
      //appel de la datatable
    },

    obtenir_les_paiements() {
      axios
        .get(
          "https://pay3.tresor.gouv.ci/depense/bourses-api/UI/data-init-paiement-bourse.php?pc=370"
        )
        .then((res) => console.log(res.data))
        .catch((err) => console.error(err));
    },
  },

  created() {
    this.obtenir_les_paiements();
    this.initialiser_datatable();
  },
};
</script>
