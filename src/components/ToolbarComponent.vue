<script>

export default {
    name: "ToolbarComponent",
};
</script>
<template>
    <div
        class="d-flex align-item-center justify-content-center p-3 mt-3 border border-secondary-subtle rounded-3 border-dark shadow-sm">
        <div class="row">
            <div class="col">
                <button class="button-01" title="Agregar">
                    <i class="bi bi-plus-lg"></i>
                </button>
            </div>
            <div class="col px-0">
                <button class="button-01" title="Editar"><i class="bi bi-pencil-square"></i></button>
            </div>
            <div class="col">
                <button class="button-01" title="Editar"><i class="bi bi-trash-fill"></i></button>
            </div>
            <div class="col">
            </div>
        </div>
    </div>
</template>

<style>
.button-01 {
    appearance: none;
    background-color: transparent;
    border: 1px solid #1A1A1A;
    border-radius: 5px;
    box-sizing: border-box;
    color: #3B3B3B;
    cursor: pointer;
    display: inline-block;
    line-height: normal;
    margin: 0;
    min-width: 0;
    outline: none;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 100%;
    will-change: transform;
}

.button-01:disabled {
    pointer-events: none;
}

.button-01:hover {
    color: #fff;
    background-color: #1A1A1A;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
}

.button-01:active {
    box-shadow: none;
    transform: translateY(0);
}
</style>