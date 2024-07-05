<template>
  <div class="hello">
    <nav class="fixed p-[20px] top-0 left-0 w-full gradient-bg">
      <div class="container mx-auto">
        <div class="flex justify-around items-center">
          <div class="navbar-logo flex items-center">
            <img src="@/assets/logo/0be45002ad090ad572.png" class="w-[81px] h-[81px]">
            <span class="ml-[20px] text-white">Online Taxi.tkm</span>
          </div>
          <div class="navbar-right flex items-center">
            <button>
              <img src="@/assets/icons/hamburger-circle-icon-512x512-4mthfq0v.png" class="w-[40px] h-[42px] block md:hidden lg:hidden">
            </button>
            <span class="hidden md:block lg:block mx-[20px] text-white">О нас</span>
            <button class="hidden md:block lg:block mx-[20px] border border-white rounded-full w-[250px] h-[40px]" style="color: #e89e00">Установить приложение</button>
            <span class="hidden md:block lg:block mx-[20px] text-white">Контакты</span>
          </div>
        </div>
      </div>
    </nav>
    <div class="hero-section gradient-bg flex justify-center items-center flex-col h-[1000px]">
      <img src="@/assets/pic/20462a57a3a9bf8435.png" class="w-[171px] h-[128px] md:w-[533px] md:h-[400px]">
      <div class="flex items-start flex-col">
        <span class="hidden md:block lg:block text-white text-2xl pt-2 pb-5">Мобильное приложение в Ашхабаде</span>
        <span class="hidden md:block lg:block text-white mb-10">  Современный и быстрый способ заказа такси.  
          <br>
          Всего пару этапов по экрану и вы вызвали машину в нужную точку.
        </span>
        <button class="block md:hidden lg:block text-white border border-white rounded-full w-[250px] h-[40px] mt-10">Установить приложение</button>
        <a href="#" class="text-white underline hidden md:hidden lg:block mt-2">Заказ онлайн</a>
      </div>
    </div>
    <div class="">
      <div class="flex flex-col items-center">
        <span class="text-3xl">О нас</span>
        <div class="bg-yellow-500 w-[30px] h-[3px] my-2"></div>
      </div>
      <p class="p-[50px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem eveniet dicta aliquam deleniti porro dolore quis. Optio, reiciendis minima ea aliquid velit natus amet molestias vitae provident dolores recusandae, obcaecati et quae officia, repudiandae debitis nisi nobis rerum eos? Dignissimos aliquid enim, facere provident sequi velit unde laboriosam ad iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae reprehenderit libero corrupti dolore dolorem adipisci. Ea eius consectetur praesentium ab numquam temporibus nostrum facere laborum debitis iusto, nulla soluta nisi voluptatum qui quo maiores. Eveniet repellat ut nobis voluptates sit officiis, sint, sed tempore assumenda blanditiis, sapiente temporibus nemo totam. ipsum dolor sit amet consectetur adipisicing elit. Dolorem asperiores minima eaque deserunt vitae dicta voluptate vel modi veniam distinctio, maxime voluptates error? Harum quaerat necessitatibus obcaecati! Maiores temporibus quam hic dicta. Maxime amet rem beatae mollitia alias eveniet ipsa, soluta nobis eum vitae dolorem doloremque deserunt reprehenderit numquam velit!</p>
      <div class="flex flex-col items-center md:flex md:flex-row md:justify-evenly">
        <img src="@/assets/icons/vk-social-network-logo.png" class="w-[80px] h-[80px] my-5 ">
        <img src="@/assets/icons/images2.png" class="w-[80px] h-[80px] my-5">
        <img src="@/assets/icons/images.png" class="w-[80px] h-[80px] my-5">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gradient-bg {
  background: linear-gradient(to right, black, yellow);
}
</style>

