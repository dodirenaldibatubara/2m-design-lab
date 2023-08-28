<template>
  <div class="container lg:py-[40px]">
    <div
      class="flex items-center lg:gap-[100px] md:gap-[70px] gap-[20px] footer"
    >
      <div
        class="lg:w-8/12 xl:text-[128px] lg:text-[100px] md:text-[72px] text-[32px]"
      >
        Let’s get connected
      </div>

      <nuxt-link to="" class="lg:w-4/12">
        <img
          class="xl:w-[225px] lg:w-[170px] md:w-[120px] w-[55px]"
          :src="require('assets/image/button-lets-connected.png')"
          alt=""
        />
      </nuxt-link>
    </div>

    <div
      class="md:flex justify-between xl:mt-[165px] lg:mt-[140px] md:mt-[100px] mt-[50px]"
    >
      <div class="flex md:justify-start justify-center items-center gap-[12px]">
        <img
          class="lg:w-[40px] md:w-[35px] w-[25px]"
          :src="require('assets/image/ic-email.svg')"
          alt=""
        />
        <a class="lg:text-[34px] md:text-[28px] text-[18px]" href=""
          >info@2mdesignlab.com</a
        >
      </div>

      <div class="md:mt-0 mt-3 md:text-start text-center">
        <h5 class="lg:text-[16px] md:text-[16px] text-[14px]">
          © 2023 2M DESIGN LAB
        </h5>
        <a class="lg:text-[12px] md:text-[12px] text-[10px]" href=""
          >DESIGN & DEVELOPED BY S.P DIGITAL</a
        >
      </div>
    </div>
  </div>
</template>