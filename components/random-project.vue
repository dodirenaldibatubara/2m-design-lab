<template>
  <div>
    <nuxt-link to="2" class="relative">
      <img
        class="w-full"
        :src="require('assets/image/bg-random-project.png')"
        alt=""
      />
      <div
        class="w-full font-light text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <h6
          class="text-center xl:text-[16px] lg:text-[16px] md:text-[14px] text-[12px]"
        >
          NEXT
        </h6>
        <h1
          class="font-normal text-center xl:text-[62px] lg:text-[52px] md:text-[36px] text-[24px]"
        >
          Black Sand Brewery
        </h1>

        <h6
          class="font-[CabinetGrotesk] font-normal text-center xl:text-[32px] lg:text-[30px] md:text-[28px] text-[24px] opacity-80"
        >
          2019 — Canggu, Bali
        </h6>
      </div>
    </nuxt-link>
  </div>
</template>