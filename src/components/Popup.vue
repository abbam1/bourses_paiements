<template>
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
        <div class="">
          <table
            id="popup"
            class="table align-middle mb-0 table-striped table-bordered"
          >
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
        <div class="">
          <table
            id="popup"
            class="table align-middle mb-0 table-striped table-bordered"
          >
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
</template>

<script setup>
const paiementDetails = [];

function obtenir_detail_d_un_paiement(idPaiement) {
  axios
    .get("http://localhost:5000/detail_un_paiement/" + idPaiement)
    .then((res) => {
      paiementDetails = res.data;
      $(document).ready(function () {
        new DataTable("#popup", {
          language: {
            url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
          },
          pageLength: 5,
          lengthMenu: [
            [5, 10, 25, 50, -1],
            [5, 10, 25, 50, "Tous"],
          ],
        });
      });

      console.log(paiementDetails);
    })
    .catch((err) => {})
    .finally(() => {});
}
</script>

<style lang="scss" scoped></style>
