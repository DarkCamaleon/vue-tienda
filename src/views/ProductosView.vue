<script>
export default {
    components: {},
    data() {
        return {
            products: [
                {
                    id: "1",
                    name: "mantequilla",
                    price: "1000",
                    uni_medida: "gr",

                }
            ],
        }
    }
}
</script>

<template>
    <div class="header-view">
        <h2 class="title-view">Productos</h2>
        <span class="info-title">Tablas - Productos</span>
    </div>
    <div class="d-flex justify-content-center">
        <!-- <ToolbarComponent></ToolbarComponent> -->
    </div>
    <div class="container-view">
        <div class="row">
            <div class="col">
                <table class="table table-borderless">
                    <thead>
                        <th>#</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Unidad de medida</th>
                    </thead>
                    <tbody>
                        <tr v-for="(product, i) in products" :key="i">
                            <th>{{ product.id }}</th>
                            <th>{{ product.name }}</th>
                            <th>{{ product.price }}</th>
                            <th>{{ product.uni_medida }}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</template>

<style>
.header-view {
    color: #202a45;
}

.info-title {
    font-size: 14px;
    color: #20254444;
}

.container-view {
    display: grid;
    grid-template-columns: auto;
    column-gap: 50px;
    padding: 10px;

}
</style>