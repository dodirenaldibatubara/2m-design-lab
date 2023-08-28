<template>
  <div
    class="fixed w-full top-0 z-20 xl:px-[40px] xl:py-[40px] lg:px-[35px] lg:py-35px] md:px-[25px] md:py-[25px] px-[15px] py-[15px] flex justify-between items-center"
  >
    <img
      class="lg:w-[35px] md:w-[30px] w-[20px]"
      :src="require('assets/image/logo-black.svg')"
      alt=""
    />

    <hamburger-button></hamburger-button>
  </div>
</template>

<script>
export default {
  // props: ["hamburgerActiveUpdate"],
  data() {
    return {
      // hamburgerActive: false,
    };
  },

  methods: {
    // handleToggleHamburger() {
    //   this.hamburgerActive = !this.hamburgerActive;
    //   this.$emit("handleToggleHamburger");
    // },
  },
};
</script>