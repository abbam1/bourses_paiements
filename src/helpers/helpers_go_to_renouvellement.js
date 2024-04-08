import { init_datatables } from "./helpers_datatable";

export function fonction_go_to_renouvellement() {
  this.store.clicked_attributions = false;
  this.store.clicked_renouvellements = true;
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
