<script>
import { useboursesStore } from "@/store/bourses";
import { fonction_go_to_attribution } from "@/helpers/helpers_go_to_attribution";
import { fonction_go_to_renouvellement } from "@/helpers/helpers_go_to_renouvellement";

export default {
  name: "sidebar",
  data() {
    return {
      store: useboursesStore(),
      fonction_go_to_attribution: () => {},
      fonction_go_to_renouvellement: () => {},
    };
  },
  async mounted() {
    await this.store.obtenir_les_bourses();
    this.fonction_go_to_attribution = fonction_go_to_attribution;
    this.fonction_go_to_renouvellement = fonction_go_to_renouvellement;
  },
};
</script>

<template>
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
          @click="this.store.accueil"
          :disabled="
            !this.store.clicked_attributions &&
            !this.store.clicked_renouvellements
          "
        >
          <li class="active">
            <a> <i class="menu-icon fa fa-dashboard"></i>Accueil</a>
          </li>
        </button>
        <h3 class="menu-title">Nature</h3>
        <!-- /.menu-title -->
        <button
          class="btn-side"
          :class="{ nature: this.store.clicked_attributions }"
          @click="fonction_go_to_attribution"
          :disabled="this.store.clicked_attributions"
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
          :class="{ nature: this.store.clicked_renouvellements }"
          @click="fonction_go_to_renouvellement"
          :disabled="this.store.clicked_renouvellements"
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
</template>

<style>
.btn-side {
  border: none;
  background-color: #034c14;
}
</style>
