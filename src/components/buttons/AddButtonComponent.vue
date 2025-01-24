<script>
export default {
    name: "AddButtonComponent"
};
</script>
<template>
    <button class="button-01 add-open-modal" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="bi bi-plus-lg"></i></button>
</template>
<style>
.button-01 {
    appearance: none;
    background-color: transparent;
    border: 1px solid #1A1A1A;
    border-radius: 10px;
    box-sizing: border-box;
    color: #3B3B3B;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    min-height: 30px;
    min-width: 0;
    outline: none;
    padding: 10px 15px;
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