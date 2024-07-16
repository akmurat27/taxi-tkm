<template>
    <div class="modal">
        <div class="modal__content">
            <div class="modal__header">
                <h1>Modal Title</h1>
                <span>X</span>
            </div>
        </div>
        <div class="modal__body">
            <slot />
        </div>
    </div>
</template>

<script>
export default{
    name: "ModalComp",
}
</script>

<style scoped>
.modal{
    position: fixed;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.4);
}
.modal__content{
    min-width: 370px;
    background: #fff;
    width: 600px;
    margin: auto
}
.modal__header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
}
.modal__body{
    padding: 10px;
    text-align: justify;
}
</style>