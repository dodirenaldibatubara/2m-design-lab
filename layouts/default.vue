<template>
  <div class="overflow-hidden">
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
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.slideMenu {
  left: 0px;
}
</style>

