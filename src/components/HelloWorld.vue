<template>
  <div class="hello">
    <nav class="fixed shadow p-[20px] top-0 left-0 w-full gradient-bg">
      <div class="container mx-auto">
        <div class="flex justify-around items-center">
          <div class="navbar-logo flex items-center">
            <img src="@/assets/logo/0be45002ad090ad572.png" class="w-[81px] h-[81px]">
            <span class="ml-[20px] text-white">Online Taxi.tkm</span>
          </div>
          <navBar />
        </div>
      </div>
    </nav>
    <div class="hero-section gradient-bg flex justify-center items-center flex-col md:flex md:flex-col md:items-center lg:flex lg:flex-row h-[1000px]">
      <img src="@/assets/pic/20462a57a3a9bf8435.png" class="w-[171px] h-[128px] md:w-[533px] md:h-[400px]">
      <div class="flex items-start flex-col">
        <span class="hidden md:block lg:block text-white text-4xl pt-2 pb-10">Мобильное приложение <br> в Ашхабаде</span>
        <span class="hidden md:block lg:block text-white mb-[50px]">  Современный и быстрый способ заказа такси.  
          <br>
          Всего пару этапов по экрану и вы вызвали машину в нужную точку.
        </span>
        <button class="block md:hidden lg:block text-white border border-white rounded-full w-[250px] h-[40px] mt-[50px]">Установить приложение</button>
        <router-link to="/inputAdd">
          <a href="#" class="text-white underline hidden md:hidden lg:block mt-2">Заказ онлайн</a>
        </router-link>
      </div>
    </div>
    <MapAsg />
    <div class="mx-[50px] p-[15px] md:mx-[50px] lg:mx-[250px] w-auto h-auto  flex flex-col justify-center">
      <div class="flex flex-col items-center mb-[80px] mt-[60px]">
        <span class="contact text-[55px] mt-[20px] cursor-pointer">О нас</span>
        <div class="bg-yellow-500 w-[60px] h-[3px] my-2"></div>
      </div>
      <div class="flex flex-col items-center justify-center flex-wrap">
        <p class="mb-[10px]" style="color: #999999;">Диспетчерская служба "<b>Online Taxi</b>" рада сообщить, что теперь Вы можете заказать автомобиль, в любое время суток, удобным для вас способом: по телефону, онлайн на сайте или через мобильное приложение. Наши водители с комфортом доставят Вас по указанному адресу. Вы останетесь довольны низкими ценами и качественным обслуживанием!</p>
        <p class="mb-[10px]" style="color: #999999;">В нашем такси вас всегда ждет вежливый водитель, чистый салон и приятная музыка на ваш вкус.</p>
      </div>
      <div class="flex flex-row flex-wrap justify-evenly md:flex md:justify-evenly mt-5">
        <a href="#" class="w-[160px] flex justify-center">
          <img src="@/assets/icons/vk-social-network-logo.png" class="w-[80px] h-[80px] my-5 ">
        </a>
        <a href="#" class="w-[160px] flex justify-center">
          <img src="@/assets/icons/images2.png" class="w-[80px] h-[80px] my-5">
        </a>
        <a href="#" class="w-[160px] flex justify-center">
          <img src="@/assets/icons/images.png" class="w-[80px] h-[80px] my-5">
        </a>
      </div>
    </div>
    <div class="p-[15px] mx-[50px] mb-[90px] h-auto ">
      <div class="flex flex-col items-center mb-[80px] mt-[60px]">
        <span class="text-[55px] mt-[20px] cursor-pointer">Способы оплаты</span>
        <div class="bg-yellow-500 w-[60px] h-[3px] my-2"></div>
      </div>
      <div class="flex flex-col items-center justify-center flex-wrap">
        <p class="mb-[10px]" style="color: #999999;">В настоящее время доступна оплата поездки за наличный расчёт, а также по банковским картам Tkm Card, по бонусам.</p>
      </div>
      <div class="flex justify-center my-[30px]">
        <img src="@/assets/icons/card.png">
      </div>
      <div class="flex justify-center">
        <span class="underline cursor-pointer" style="color: #999999;">Подробное описание оплаты</span>
      </div>
    </div>
    <div class="h-auto gradient-bg py-[70px] flex flex-col items-center">
      <div class="my-[80px] flex flex-col items-center flex-wrap">
        <span class="text-5xl text-white"> Установить приложение </span>
        <div class="bg-white w-[60px] h-[3px] my-4"></div> 
      </div>
      <div class="flex flex-col items-center flex-wrap mb-[50px]">
        <span class="text-white mb-[10px]">Не ждите звонка диспетчера, заказывайте такси всего в 2 клика.</span>
        <span class="text-white mb-[10px]">Скачивайте приложение Online <b> Taxi.tkm </b> прямо сейчас.</span>
      </div>
      <button class="border border-white rounded-full hover:bg-yellow-500 flex items-center justify-center w-[200px] h-[60px]">
        <img src="@/assets/icons/free-icon-android-160138.png" class="mr-2 w-[43px] h-[43px]">
        <span class="text-white ml-2">Скачать для <br> Android</span>
      </button>
    </div>
    <div class="mb-[90px] h-auto">
      <div class="my-[90px] flex flex-col items-center justify-center">
        <span class="text-5xl" style="color: #999999;">Контакты</span>
        <div class="bg-yellow-500 w-[60px] h-[3px] my-4"></div>
      </div>
      <div class="flex flex-col px-[15px] w-[368px] lg:m-auto items-center">
        <span class="text-[24px]">Вызов такси</span>  
        <span style="color: #999999;">+99362571500</span>  
      </div>
    </div>
    <div class="gradient-bg flex flex-col items-center w-auto m-auto justify-center py-[80px]">
      <img src="@/assets/logo/0be45002ad090ad572.png" class="w-[76px] h-[76px]">
      <div class="flex lg:w-[1170px] flex-wrap lg:justify-between mt-[30px] px-[15px]">
        <div class="flex flex-col px-[15px] items-center">
          <span class="text-white mb-[10px] text-[14px]">Разработка и поддержка</span>
          <span class="text-white mb-[10px] text-[14px]">2024, Такси-мастер</span>
        </div>
        <div class="px-[15px] items-center">
          <span class="text-white underline mt-[30px] text-[14px]">Политика конфиденциальности</span>
        </div>
        <div class="flex flex-col px-[15px] items-center">  
          <span class="text-white mb-[10px] text-[14px]">По вопросам участия и партнерства обращайтесь </span> 
          <span class="text-white mb-[10px] text-[14px]"> +99362571500</span>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
import MapAsg from './mapAsg.vue';
import navBar from './navBar.vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    MapAsg,
    navBar
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gradient-bg {
  background: linear-gradient(to right, black, rgb(255, 187, 0));
}
</style>