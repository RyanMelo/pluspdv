import { createWebHistory, createRouter } from "vue-router";
import UnitSelectVue from './pages/UnitSelect.vue'
import TabBarVue from './components/TabBar.vue'

const routes = [
  {
    path: "/",
    name: "UnitSelect",
    component: UnitSelectVue,
  },
  {
    path: "/home",
    name: "TabBar",
    component: TabBarVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;