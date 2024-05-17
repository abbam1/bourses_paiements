export function init_datatables() {
  $(document).ready(function () {
    $("#table_bourse").DataTable({
      destroy: true,
      responsive: true,
      // language: {
      //   url: "https://cdn.datatables.net/plug-ins/1.10.19/i18n/French.json",
      // },
      fixedHeader: true,
      initComplete: function () {
        this.api()
          .columns()
          .every(function () {
            let column = this;
            let title = column.footer().textContent;

            // Create input element
            let input = document.createElement("input");
            input.placeholder = title;
            column.footer().replaceChildren(input);

            // Event listener for user input
            input.addEventListener("keyup", () => {
              if (column.search() !== this.value) {
                column.search(input.value).draw();
              }
            });
          });
      },
    });
  });
}
