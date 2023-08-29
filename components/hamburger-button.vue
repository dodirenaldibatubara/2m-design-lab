<template>
  <div>
    <button @click="toggleHamburger" class="flex flex-col gap-[5px]">
      <div
        :class="{ bar1: this.$store.state.activeMenu }"
        class="lg:w-[35px] md:w-[25px] w-[25px] lg:h-[4px] md:h-[4x] h-[4px] rounded-md transition-all duration-[1s] bg-black"
      ></div>
      <div
        :class="{ bar2: this.$store.state.activeMenu }"
        class="lg:w-[35px] md:w-[25px] w-[25px] lg:h-[4px] md:h-[4x] h-[4px] rounded-md transition-all duration-[1s] bg-black"
      ></div>
      <div
        :class="{ bar3: this.$store.state.activeMenu }"
        class="lg:w-[35px] md:w-[25px] w-[25px] lg:h-[4px] md:h-[4x] h-[4px] rounded-md transition-all duration-[1s] bg-black"
      ></div>
    </button>
  </div>
</template>

<script>
export default {
  name: "Hamburger",

  data() {
    return {};
  },

  methods: {
    toggleHamburger() {
      this.$store.commit("setActiveMenu");
    },
  },
};
</script>

<style scoped>
.bar1 {
  transform: translate(0, 9px) rotate(-45deg);
}

.bar2 {
  opacity: 0;
}

.bar3 {
  transform: translate(0, -9px) rotate(45deg);
}
</style>