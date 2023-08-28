<template>
  <div class="">
    <!-- <navbar></navbar> -->

    <h1 v-if="error.statusCode === 404">
      <div class="">
        <div class="h-screen flex flex-col justify-center items-center">
          <div class="relative flex flex-col items-center first-of-type">
            <h1 class="font-bold lg:text-[128px] md:text-[72px] text-[46px]">
              404
            </h1>
            <p class="font-medium lg:text-[16px] md:text-[14px] text-[12px]">
              Sorry, the page you are looking is not found
            </p>
            <div class="flex gap-3 items-center mt-5">
              <NuxtLink
                class="font-light lg:text-[16px] md:text-[14px] text-[12px] lg:px-3 lg:py-2 md:px-3 md:py-2 px-3 py-1 text-white bg-black"
                to="/"
              >
                Back to Homepage</NuxtLink
              >
            </div>

            <img
              class="absolute -top-[40px] right-0"
              :src="require('assets/image/bg-error.svg')"
              alt="bg-error"
            />
          </div>
        </div>
      </div>
    </h1>
    <h1 v-else class="text-4xl font-medium text-gray-800">An error occurred</h1>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "default", // you can set a custom layout for the error page
};
</script>