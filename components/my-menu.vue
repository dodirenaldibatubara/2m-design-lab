<template>
  <div>
    <div class="z-20 w-full h-screen fixed">
      <div class="h-[123px] bg-white"></div>
      <div class="h-full bg-[#FFFFFf] opacity-90">
        <div
          class="container flex xl:items-start items-center xl:gap-[80px] lg:gap-[60px] md:gap-[40px] gap-[10px] xl:pt-[60px] lg:pt-[40px] md:pt-[50px] pt-[60px]"
        >
          <div
            class="lg:w-4/12 md:w-4/12 w-5/12 xl:text-[36px] lg:text-[30px] md:text-[26px] text-[14px]"
          >
            <div @click="hiddenMenu" @mouseover="handleMenuHover('home')">
              <nuxt-link
                to="/"
                class="group flex items-center justify-between border-b border-b-black"
              >
                <h2 class="font-light opacity-80">Home</h2>
                <img
                  class="opacity-0 group-hover:opacity-100 transition-all duration-700"
                  :src="require('assets/image/ic-arrow-menu.svg')"
                  alt="ic-arrow-menu"
                />
              </nuxt-link>
            </div>

            <div
              class="mt-[10px]"
              @click="hiddenMenu"
              @mouseover="handleMenuHover('meetOurTeam')"
            >
              <nuxt-link
                to="/about-us"
                class="group flex justify-between border-b border-b-black"
              >
                <h2 class="font-light xl:mt-[17px] opacity-80">
                  Meet Our Team
                </h2>
                <img
                  class="opacity-0 group-hover:opacity-100 transition-all duration-700"
                  :src="require('assets/image/ic-arrow-menu.svg')"
                  alt="ic-arrow-menu"
                />
              </nuxt-link>
            </div>

            <div class="mt-[10px]" @mouseover="handleMenuHover('works')">
              <div class="group flex justify-between border-b border-b-black">
                <h2 class="font-light xl:mt-[17px] opacity-80">Works</h2>
                <img
                  class="opacity-0 group-hover:opacity-100 transition-all duration-700"
                  :src="require('assets/image/ic-arrow-menu.svg')"
                  alt="ic-arrow-menu"
                />
              </div>
            </div>

            <div
              class="mt-[10px]"
              @click="hiddenMenu"
              @mouseover="handleMenuHover('contact')"
            >
              <nuxt-link
                to="/contact"
                class="group flex justify-between border-b border-b-black"
              >
                <h2 class="font-light xl:mt-[17px] opacity-80">Contact</h2>
                <img
                  class="opacity-0 group-hover:opacity-100 transition-all duration-700"
                  :src="require('assets/image/ic-arrow-menu.svg')"
                  alt="ic-arrow-menu"
                />
              </nuxt-link>
            </div>
          </div>

          <!-- Description Menu 1 -->

          <div v-if="home" class="lg:w-8/12 md:w-8/12 w-7/12">
            <div>
              <h2 class="lg:text-[24px] md:text-[20px] text-[12px]">
                International — <br />
                Architecture Design Studio
              </h2>
              <img
                class="lg:mt-[20px] md:mt-[15px] mt-[10px]"
                :src="require('assets/image/bg-menu-home.png')"
                alt="bg-menu-home"
              />
            </div>
          </div>
          <!-- End Description Menu 1 -->

          <!-- Description Menu 2 -->

          <div v-if="meetOurTeam" class="lg:w-8/12 md:w-8/12 w-7/12">
            <div>
              <h2 class="lg:text-[24px] md:text-[20px] text-[12px]">
                We’ve been transforming <br />
                spaces worldwide.
              </h2>
              <div
                class="grid grid-cols-4 lg:gap-[30px] md:gap-[20px] gap-[10px]"
              >
                <img
                  v-for="(item, index) in 4"
                  :key="index"
                  class="opacity-100 bg-blue-100"
                  :src="require('assets/image/manuele.png')"
                  alt="manuele"
                />
              </div>

              <p
                class="md:text-start text-justify lg:leading-[30px] md:leading-[20px] xl:text-[16px] lg:text-[14px] md:text-[12px] text-[10px] lg:mt-[30px] md:mt-[20px] mt-[10px] opacity-50"
              >
                Composed by aspiring talents from all across Indonesia, our team
                consists of professional architects to provide holistic
                architectural service before and during the construction
                process.
              </p>
            </div>
          </div>
          <!-- End Description Menu 2-->

          <!-- Description Menu 3 -->

          <div v-if="works" class="lg:w-8/12 md:w-8/12 w-7/12">
            <div>
              <h2 class="lg:text-[24px] md:text-[20px] text-[12px]">
                Experience our recent <br />
                works and projects
              </h2>

              <div
                v-for="(item, index) in post"
                :key="index"
                :item="item"
                @click="hiddenMenu"
              >
                <nuxt-link
                  :to="`/${item.title}`"
                  class="lg:w-5/12 md:w-6/12 w-8/12 lg:my-[30px] flex justify-between border-b border-b-black lg:text-[24px] md:text-[24px] text-[18px] group"
                >
                  <h4
                    class="font-light tracking-normal group-hover:tracking-[0.2em] opacity-60 hover:opacity-100 transition-all duration-400"
                  >
                    {{ item.title }}
                  </h4>
                  <img
                    class="opacity-0 rotate-45 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-500"
                    :src="require('assets/image/ic-arrow-menu.svg')"
                    alt="ic-arrow-menu"
                  />
                </nuxt-link>
              </div>
            </div>
          </div>
          <!-- End Description Menu 3-->

          <!-- Description Menu 4 -->

          <div v-if="contact" class="lg:w-8/12 md:w-8/12 w-7/12">
            <div>
              <h2 class="lg:text-[24px] md:text-[20px] text-[12px]">
                Let’s get connected <br />
                and find some solution together
              </h2>

              <div class="lg:mt-[30px] md:mt-[20px] mt-[10px]">
                <h5>Indonesia</h5>
                <h6 class="lg:my-[10px] md:my-[5px] my-[5px]">
                  Jl. Sudirman No. 123, Jakarta 10110,
                </h6>
                <h6>+62 21 12345678</h6>
              </div>

              <a
                class="flex items-center lg:gap-[12px] md:gap-[10px] gap-[5px] lg:mt-[30px] md:mt-[20px] mt-010px"
                href="mailto:"
              >
                <img
                  :src="require('assets/image/ic-email.svg')"
                  alt="ic-email"
                />
                <h6>info@2mdesignlab.com</h6>
              </a>
            </div>
          </div>
          <!-- End Description Menu 4-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      home: true,
      meetOurTeam: false,
      works: false,
      contact: false,

      post: [
        {
          id: 1,
          title: "Master plan",
        },
        {
          id: 2,
          title: "Residential",
        },
        {
          id: 3,
          title: "Commercial",
        },
        {
          id: 4,
          title: "Hospitality",
        },
      ],
    };
  },

  methods: {
    handleMenuHover(menu) {
      // Reset menu value
      this.home = false;
      this.meetOurTeam = false;
      this.works = false;
      this.contact = false;

      // Set menu parameter to true => (this.menu = true)
      this[menu] = true;
    },

    hiddenMenu() {
      this.$store.commit("setHiddenMenu");
      // console.log("test hidden");
      // this.$emit("hiddenMenu");
    },
  },
};
</script>

<style scoped>
</style>