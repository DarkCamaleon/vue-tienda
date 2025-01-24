import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '@/views/DashboardView.vue';
import PresupuestosView from '@/views/PresupuestosView.vue';
import ProductosView from '@/views/ProductosView.vue';


const routes = [
  { path: '/', component: DashboardView },
  { path: '/productos', component: ProductosView },
  { path: '/presupuestos', component: PresupuestosView },


];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;