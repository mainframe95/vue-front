import Vue from "vue";
import Router from "vue-router";
import Login from "./components/Login.vue";
import Menu from "./components/Menu";
import ListOperator from "./components/operators/ListOperator";
import AddOperator from "./components/operators/AddOperator";
import Register from "./components/Register";
import moment from "moment";
import jwt_decode from "jwt-decode";

Vue.use(Router);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/list-operator",
    name: "list-operator",
    component: ListOperator,
  },
  {
    path: "/add-operator/:id",
    name: "add-operator",
    component: AddOperator,
  },
  {
    path: "/",
    name: "menu",
    component: Menu,
  },
];

const router = new Router({
  // history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/register", "/home"];
  const loggedIn = localStorage.getItem("user");
  // verifie si l'user s'est deja connecter avant qu'il accede au route
  // si non il est rediriger vers le login
  // peut être adapté pour faire une meilleur gestion des droits
  if (publicPages.includes(to.path)) {
    next();
  } else if (loggedIn) {
    const user = JSON.parse(localStorage.getItem("user"));
    const decoded = user ? jwt_decode(user.access_token) : null;
    console.log('moment(decoded.exp * 1000)', moment(decoded.exp * 1000))
    if (decoded && moment(decoded.exp * 1000).isAfter(new Date())) {
      next();
    } else {
      next("/login");
    }
  } else {
    next("/login");
  }
});

export default router;
