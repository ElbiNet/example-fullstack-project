<script setup>

</script>

<template>
  <div class="flex items-center justify-center h-screen bg-headerBorderColor">
    <div class="bg-black flex flex-col w-80 rounded-lg px-8 py-10" style="background-image: url('/assets/images/backgroundImage.png')">
      <div class="text-white mt-10">
        <h1 class="font-poppins-bold text-4xl">Welcome Ricoma!</h1>
        <p class="font-poppins-light pt-5">Let's login!</p>
      </div>
      <form class="flex flex-col space-y-8 mt-10">
        <input type="text" placeholder="Email" class="shadow-lg rounded-md focus:ring-0 border-0">
        <input type="password" placeholder="Password" class="shadow-lg rounded-md focus:ring-0 border-0">
        <button class="font-poppins-extraBold text-white bg-checkBoxColor1 border border-[1px] border-headerBorderColor p-3 rounded-md shadow-lg">Login</button>
      </form>
    </div>
  </div>
  <!--
  <div class="flex flex-col space-y-4 min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-gray-900">
  <div class="flex flex-col p-8 bg-bannerBackground shadow-md hover:shodow-lg rounded-2xl">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg"
             class="w-16 h-16 rounded-2xl p-3 border border-gray-800 text-bannerBackground bg-white" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div class="flex flex-col ml-3">
          <div class="font-medium leading-none text-white">Wrong Password</div>
          <p class="text-sm text-white leading-none mt-1">Please check your password.
          </p>
        </div>
      </div>
      <button  class="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">Okey</button>
    </div>
  </div>
  </div>
  -->
</template>