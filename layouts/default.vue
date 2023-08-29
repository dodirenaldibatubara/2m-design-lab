<template>
  <div class="overflow-hidden">
    <!-- <hamburger-button
      class="fixed z-30 lg:top-[40px] md:top-[20px] top-[20px] lg:right-[55px] md:right-[30px] right-[20px]"
    ></hamburger-button> -->

    <!-- Navbar -->
    <navbar class="z-50"></navbar>

    <!-- End Navbar. -->

    <my-menu
      :class="{ slideMenu: this.$store.state.activeMenu }"
      class="fixed z-30 left-[3000px] transition-all duration-[1300ms] ease-in-out"
    ></my-menu>

    <Nuxt />

    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // hamburgerActive: false,
    };
  },
  methods: {
    // handleToggleHamburger() {
    //   this.hamburgerActive = !this.hamburgerActive;
    // },
    // hiddenMenu() {
    //   this.hamburgerActive = false;
    // },
  },
};
</script>

<style scoped>
.slideMenu {
  left: 0px;
}
</style>

