<script setup>
import { RouterLink, RouterView } from "vue-router";
import Sidebar from "./components/Sidebar.vue";
import Dashboard from "./views/Dashboard.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <aside id="left-panel" class="left-panel">
    <Sidebar />
  </aside>
  <div id="right-panel" class="right-panel">
    <Navbar />
    <Dashboard />
  </div>
</template>

<style scoped></style>
