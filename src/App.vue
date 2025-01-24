<script>
import { RouterLink, RouterView } from 'vue-router'
import SidebarComponent from '@/components/SidebarComponent.vue';

export default {
  components: { SidebarComponent },
}
</script>

<template>
  <SidebarComponent></SidebarComponent>
  <main class="home">
    <RouterView />
  </main>
</template>

<style scoped></style>
