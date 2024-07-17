<template>
    <div class="modal z-50" id="modal">
        <div class="modal__content">
            <div class="modal__header">
                <h1 class="modal__title">Modal Title</h1>
                <span class="modal__close" @click="hide()">X</span>
            </div>
            <div class="modal__body">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: "ModalComp",
    methods:{
        show(){
            const modal = document.getElementById('modal');
            modal.classList.add('show')
        },
        hide(){
            const modal = document.getElementById("modal");
            modal.classList.remove('show')
        }
    }
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
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;
}
.modal.show{
    visibility: visible;
    opacity: 1;
}
.modal.show .modal__content{
    visibility: visible;
    opacity: 1;
    transform: scaleY(1)
}
.modal__content{
    min-width: 370px;
    background: #fff;
    width: 600px;
    margin: auto;
    visibility: hidden;
    opacity: 0;
    transform: scale(0.5);
    transition: opacity 0.4 ease-in-out, visibility 0.4s ease-in-out, transform 0.4s ease-in-out;
}
.modal__header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
}
.modal__title{
    font-weight: normal;
    font-size: 25px;
}
.modal__close{
    padding: 5px;
    cursor: pointer;
}
.modal__body{
    text-align: justify;
    padding: 10px;
}
</style>