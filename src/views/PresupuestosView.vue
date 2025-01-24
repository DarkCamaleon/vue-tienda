<script>
import DatatableComponent from '@/components/DatatableComponent.vue';

</script>

<template>
    <div class="header-presupuesto">
        <h2 class="title-presupuesto">Presupuestos</h2>
        <span class="info-title">Tablas - Presupuestos</span>
    </div>
    <div class="container-presupuesto">
        <DatatableComponent></DatatableComponent>
    </div>

</template>

<style>
.header-presupuesto {
    color: #202a45;
}

.info-title {
    font-size: 14px;
    color: #20254444;
}

.container-presupuesto {
    display: grid;
    grid-template-columns: auto;
    column-gap: 50px;
    padding: 10px;

}

.toolbar-presupuesto {
    display: flex;
    gap: 10px;
}
</style>