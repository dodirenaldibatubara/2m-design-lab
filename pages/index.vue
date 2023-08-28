<template>
  <div>
    <div class="w-full">
      <video
        class="bg-cover w-full"
        src="HOMEPAGE VIDEO.mp4"
        autoplay
        muted
        loop
      ></video>
    </div>

    <!-- About us -->

    <div
      class="container lg:w-8/12 md:w-9/12 w-full text-center xl:py-[120px] lg:py-80[px] md:py-[80px] py-[40px]"
    >
      <h2
        class="font-[Roboto] font-normal xl:text-[42px] lg:text-[40px] md:text-[36px] text-[28px]"
      >
        ABOUT US
      </h2>
      <p
        class="font-[Roboto] font-light lg:leading-[30px] md:leading-[30px] leading-[25px] lg:mt-[36px] md:mt-[30px] mt-[20px] xl:text-[16px] lg:text-[16px] md:text-[14px] text-[12px]"
      >
        2M Design Lab is an international architecture studio working on a wide
        variety of property designs, led by Director Manuele Mossoni. We have
        been researching and innovating on the concept of ‘tropical design’
        using the aid of the latest advanced technology such as VR (Virtual
        Reality) to anticipate both climate change and construction issues.
      </p>
    </div>

    <!-- End About us -->

    <div class="lg:mb-[70px] md:mb-[50px] mb-[40px]">
      <works-category v-for="(item, index) in 4" :key="index"></works-category>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>


