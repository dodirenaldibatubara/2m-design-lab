<template>
  <div>
    <!-- <navbar></navbar> -->
    <!-- _T_C BAHASA.docx.pdf -->

    <div class="container">
      <h1
        class="md:text-start text-center xl:w-6/12 lg:w-7/12 md:w-8/12 xl:text-[42px] lg:text-[36px] md:text-[32px] text-[22px] xl:mt-[230px] lg:mt-[150px] md:mt-[120px] mt-[80px]"
      >
        Connect with the experts — Reach out to our Architecture studio
      </h1>
    </div>

    <div class="container xl:mt-[90px] lg:mt-[80px] md:mt-[60px] mt-[40px]">
      <div
        class="md:text-start text-center xl:w-3/12 lg:w-4/12 md:w-5/12 w-full"
      >
        <h4>Indonesia</h4>
        <p
          class="font-[CabinetGrotesk] md:my-[10px] my-[5px] lg:text-[16px] md:text-[14px] text-[12px] opacity-50"
        >
          N88 Sunset Bureau <br />
          Jl. Sunset Road No.88, Seminyak, Kuta, Kabupaten Badung, Bali 80237
        </p>
        <p
          class="font-[CabinetGrotesk] lg:text-[16px] md:text-[14px] text-[12px] opacity-50"
        >
          +62 21 12345678
        </p>
      </div>
    </div>

    <!-- Maps -->

    <div class="xl:mt-[85px] lg:mt-[85px] md:mt-[60px] mt-[40px]">
      <img
        class="w-full"
        :src="require('assets/image/maps.png')"
        alt="Bg-Maps"
      />
    </div>

    <!-- End Maps -->

    <!-- Footer -->
    <div class="container">
      <div
        class="md:flex justify-between xl:mt-[70px] lg:mt-[60px] md:mt-[50px] mt-[40px] xl:mb-[80px] lg:mb-[60px] md:mb-[50px] mb-[40px]"
      >
        <div
          class="flex md:justify-start justify-center items-center gap-[12px]"
        >
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
    <!-- End Footer -->
  </div>
</template>

<script>
export default {
  layout: "contact-us",
};
</script>