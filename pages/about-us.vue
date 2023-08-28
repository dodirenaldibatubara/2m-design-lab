<template>
  <div>
    <!-- Navbar -->
    <!-- <navbar></navbar> -->
    <!-- Navbar -->

    <!-- Header -->
    <div
      class="flex xl:gap-[240px] lg:gap-[100px] md:gap-[60px] gap-[20px] xl:px-[40px] xl:mt-[200px] xl:mb-[80px] lg:px-[35px] lg:mt-[150px] lg:mb-[70px] md:px-[25px] md:mt-[120px] md:mb-[60px] px-[15px] mt-[80px] mb-[40px]"
    >
      <div
        class="flex justify-center items-center gap-[8px] vertical rotate-180"
      >
        <div class="w-[2px] lg:h-[136px] md:h-[100px] h-[70px] bg-black"></div>
        <h4 class="lg:text-[12px] md:text-[12px] text-[10px]">Scroll</h4>
      </div>

      <div class="">
        <h2
          class="xl:w-[408px] lg:w-[400px] md:w-[300px] w-full xl:text-[42px] lg:text-[38px] md:text-[26px] text-[20px]"
        >
          International — Architecture Design Studio
        </h2>

        <p
          class="xl:w-[760px] lg:w-[650px] md:w-[500px] lg:mt-[40px] md:mt-25px] mt-[10px] lg:leading-[30px] lg:text-[16px] md:text-[14px] text-[12px] opacity-70"
        >
          Experience award-winning architectural design that transforms spaces
          with creativity, innovation, and excellence. Inspiring environments
          that captivate. We works with international clients and fully
          committed to provide state-of-the-art architecture, interior design
          and masterplanning for our client’s future property.
        </p>
      </div>
    </div>
    <!-- End Header -->

    <!-- All Team -->
    <div
      class="grid lg:grid-cols-7 md:grid-cols-4 grid-cols-3 items-end lg:[&>:first-child]:col-span-2 [&>:nth-child(5)]:bg-red-900 lg:[&>:nth-child(5)]:col-start-7 lg:[&>:nth-child(6)]:bg-blue-900 lg:[&>:nth-child(6)]:col-start-2 lg:[&>:nth-child(7)]:col-start-4 lg:[&>:nth-child(8)]:col-start-6 lg:[&>:nth-child(16)]:col-start-3 lg:[&>:nth-child(17)]:col-start-5 lg:[&>:nth-child(22)]:col-start-4 lg:px-[42px] gap-2 xl:mb-[51px] lg:mb-[45px] md:mb-[50px] mb-[40px] bg-green-300"
    >
      <div
        v-for="(item, index) in 24"
        :key="index"
        class="w-full rounded-md bg-red-500"
      >
        <img
          class=""
          :src="require('assets/image/manuele.png')"
          alt="team-image"
        />
      </div>
    </div>
    <!-- End All Team -->
  </div>
</template>

<style scoped>
.vertical {
  writing-mode: vertical-rl;
}
</style>