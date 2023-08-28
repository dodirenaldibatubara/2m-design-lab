<template>
  <div>
    <!-- Navbar -->
    <!-- <navbar></navbar> -->

    <!-- End NAvbar -->

    <!-- Header -->
    <div v-if="videoPath" class="w-full relative">
      <video autoplay muted loop>
        <source :src="videoPath" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        class="absolute text-[#FFF] lg:bottom-[60px] md:bottom-[40px] bottom-[15px] text-center w-full"
      >
        <h6 class="lg:text-[12px] md:text-[10px] text-[10px]">
          Scroll For More
        </h6>
      </div>
    </div>

    <!-- End header -->

    <!-- Description -->
    <div
      class="container xl:w-10/12 lg:w-11/12 md:w-full md:flex xl:gap-[60px] lg:gap-[40px] md:gap-[30px] gap-[60px] lg:py-[80px] md:py-[50px] py-[40px]"
    >
      <div class="lg:w-7/12 md:w-8/12">
        <p
          class="md:text-start text-justify md:text-base text-[14px] lg:leading-[25px] opacity-70"
        >
          The villa consists of an ample and elegant double living room which
          divides its upper floor, accessible via double stairs to emphasize on
          the main architectural element which allows the living room to be
          visible from all corners of the house. The master bedroom and kids
          bedroom are separated by a see-through window to put in a sense of
          connection to one another
        </p>
      </div>

      <div class="lg:w-5/12 md:w-4/12 grid grid-cols-2 md:mt-0 mt-6">
        <div class="">
          <h5 class="lg:text-[16px] md:text-[14px] text-[12px]">
            Project Type
          </h5>
          <span
            class="font-[CabinetGrotesk] opacity-50 lg:text-[16px] md:text-[14px] text-[12px]"
            >Residential</span
          >
        </div>

        <div>
          <h5 class="lg:text-[16px] md:text-[14px] text-[12px]">Location</h5>
          <span
            class="font-[CabinetGrotesk] opacity-50 lg:text-[16px] md:text-[14px] text-[12px]"
            >Kuta, Lombok</span
          >
        </div>

        <div>
          <h5
            class="lg:text-[16px] md:text-[14px] text-[12px] xl:mt-[50px] lg:mt-[35px] md:mt-[25px] mt-[20px]"
          >
            Year
          </h5>
          <span
            class="font-[CabinetGrotesk] opacity-50 lg:text-[16px] md:text-[14px] text-[12px]"
            >2023</span
          >
        </div>

        <div>
          <h5
            class="lg:text-[16px] md:text-[14px] text-[12px] xl:mt-[50px] lg:mt-[35px] md:mt-[25px] mt-[20px]"
          >
            Area
          </h5>
          <h6
            class="font-[CabinetGrotesk] opacity-50 lg:text-[16px] md:text-[14px] text-[12px]"
          >
            Building Size, 850 m2
          </h6>
          <h6
            class="font-[CabinetGrotesk] opacity-50 lg:text-[16px] md:text-[14px] text-[12px]"
          >
            Land Size, 850 m2
          </h6>
        </div>
      </div>
    </div>
    <!-- End description -->

    <!-- Swiper -->
    <swiper-project-detail></swiper-project-detail>
    <!-- End Swiper -->

    <!-- The Challenge -->
    <div
      class="container xl:w-7/12 lg:w-10/12 md:w-11/12 w-full text-center lg:mt-[120px] lg:mb-[200px] md:mt-[70px] md:mb-[100px] mt-[40px] mb-[60px]"
    >
      <h2
        class="font-light xl:text-[42px] lg:text-[36px] md:text-[28px] text-[24px]"
      >
        The Challenge
      </h2>
      <p
        class="lg:leading-[30px] md:leading-[25px] xl:text-[16px] lg:text-[16px] md:text-[14px] text-[12px] lg:mt-[45px] md:mt-[30px] mt-[15px] opacity-60"
      >
        The Eco-Haven Residential Project faces the challenge of striking a
        balance between sustainability and affordability to ensure that the
        eco-friendly living environment remains accessible to a diverse range of
        residents. While prioritizing environmental consciousness is crucial,
        the project must also address the financial considerations and
        affordability concerns of potential homeowners.
      </p>
    </div>
    <!-- End the Challenge -->

    <!-- Random project -->
    <random-project
      class="lg:mb-[40px] md:mb-[30px] mb-[20px]"
    ></random-project>
    <!-- End random project -->
  </div>
</template>

<script>
export default {
  computed: {
    videoPath() {
      return "/villa%20tw.mp4";
    },
  },
};
</script>
