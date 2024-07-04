<template>
  <div class="hello">
    <div class="navbar p-[20px] flex justify-between items-center bg-red-500">
      <div class="navbar-logo flex items-center">
        <img src="@/assets/logo/0be45002ad090ad572.png" class="w-[81px] h-[81px]">
        <span class="ml-[20px] text-white">Online Taxi.tkm</span>
      </div>
      <div class="navbar-right flex">
        <button>
          <img src="@/assets/icons/hamburger-circle-icon-512x512-4mthfq0v.png" class="w-[40px] h-[42px] block md:hidden lg:hidden">
        </button>
        <span class="hidden md:block lg:block mx-[20px] text-white">О нас</span>
        <button class="hidden md:block lg:block mx-[20px] border border-white  rounded-full" style="color: #e89e00">Установить приложение</button>
        <span class="hidden md:block lg:block mx-[20px] text-white">Контакты</span>
      </div>
    </div>
      <div class="hero-section bg-red-500 p-[20px] flex justify-center items-center flex-col h-[1000px]">
        <img src="@/assets/pic/20462a57a3a9bf8435.png" class="w-[171px] h-[128px] md:w-[533px] md:h-[400px]">
        <button class="block md:hidden lg:block">Установить приложение</button>
        <span class="hidden md:block lg:block">Мобильное приложение в Ашхабаде</span>
        <span class="hidden md:block lg:block">  Современный и быстрый способ заказа такси.  
          Всего пару этапов по экрану и вы вызвали машину в нужную точку.
        </span>
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
<style src="@/index.css"></style>

