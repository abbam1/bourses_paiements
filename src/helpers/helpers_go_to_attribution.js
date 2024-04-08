import { init_datatables } from "./helpers_datatable";

export function fonction_go_to_attribution() {
  this.store.clicked_attributions = true;
  this.store.clicked_renouvellements = false;
  Swal.fire({
    title: "Chargement!",
    html: "Veuillez patientez svp...",
    backdrop: `#00000061 left top`,
    timer: 800,
    timerProgressBar: true,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  init_datatables();
}
