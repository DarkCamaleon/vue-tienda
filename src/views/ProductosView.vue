<script>
import axios from "axios";

export default {
    data() {
        return {
            products: [],
        };
    },
    methods: {
        async fetchProducts() {
            try {
                const response = await axios.get('http://www.deliciasmariella.com/productos/show_products.php');
                this.products = response.data.datos_tabla;
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            }
        },
    },
    mounted() {
        this.fetchProducts();
    },
}
</script>

<template>
    <div class="header-view">
        <h2 class="title-view">Productos</h2>
        <span class="info-title">Tablas - Productos</span>
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
                            <th>{{ product.ID_PRODUCTO || "-" }}</th>
                            <th>{{ product.NOMBRE || "-" }}</th>
                            <th>{{ product.PRECIO || "-" }}</th>
                            <th>{{ product.UNI_MEDIDA || "-" }}</th>
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