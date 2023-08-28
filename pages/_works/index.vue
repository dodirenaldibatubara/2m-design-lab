<template>
  <div>
    <!-- Navbar -->
    <!-- <navbar></navbar> -->
    <!-- End Navbar -->

    <div
      class="flex xl:px-[40px] xl:mt-[200px] xl:mb-[150px] lg:px-[35px] lg:mt-[150px] lg:mb-[100px] md:px-[25px] md:mt-[120px] md:mb-[80px] px-[15px] mt-[75px] mb-[40px]"
    >
      <div
        class="flex md:justify-start justify-center items-center gap-[8px] vertical rotate-180"
      >
        <div class="w-[2px] lg:h-[136px] md:h-[100px] h-[70px] bg-black"></div>
        <h4 class="lg:text-[12px] md:text-[12px] text-[10px]">Scroll</h4>
      </div>

      <div class="md:flex">
        <h2
          class="xl:w-[500px] w-full xl:text-[42px] lg:text-[38px] md:text-[26px] text-[20px] lg:ml-[66px] md:ml-[50px] ml-[25px] lg:mr-[40px] md:mr-[30px] mr-[20px]"
        >
          Experience our recent works and projects
        </h2>

        <p
          class="md:ml-0 ml-[25px] md:mt-0 mt-3 xl:w-[552px] lg:leading-[30px] lg:text-[16px] md:text-[14px] text-[12px]"
        >
          Witness firsthand the fusion of artistic vision and meticulous
          craftsmanship that define our portfolio, and experience a showcase of
          architectural brilliance and innovation.
        </p>
      </div>
    </div>

    <div class="xl:mb-[110px] lg:mb-[110px] md:mb-[80px] mb-[40px]">
      <project v-for="(item, index) in 4" :key="index" :item="item"></project>
    </div>
  </div>
</template>


<script>
export default {
  props: ["item"],
};
</script>

<style scoped>
.vertical {
  writing-mode: vertical-rl;
}
</style>