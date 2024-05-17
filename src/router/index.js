import { useboursesStore } from "@/store/bourses";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("../auth/Login.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Dashboard.vue"),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach(async (to, from) => {

const localStorage_token = localStorage.getItem('loginInfo').token


  if (
    // if the user is not authenticated
    !localStorage_token &&
    // if the route name is not login 
    to.name !== "login"
  ) {
    //  then redirect the user to the login page
    return { name: "login" };
  }
});

export default router;
