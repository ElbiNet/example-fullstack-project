<template>
  <div class="relative flex justify-center items-center bg-bannerBackground h-[50px]">
    <div class="text-white font-poppins-light text-[16px] text-bannerTextGrey">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
    <div class="grid grid-cols-4 pl-5">
      <div class="px-1 grid justify-items-center">
        <div class="h-5 block text-white font-poppins-bold text-[16px] tracking-wider">00</div>
        <div class="h-5 block text-sm text-white font-poppins-light text-[12px] text-bannerTextGrey">days</div>
      </div>
      <div class="px-1 grid justify-items-center">
        <div class="h-5 block text-white font-poppins-bold text-[16px] tracking-wider">00</div>
        <div class="h-5 block text-sm text-white font-poppins-light text-[12px] text-bannerTextGrey">hours</div>
      </div>
      <div class="px-1 grid justify-items-center">
        <div class="h-5 block text-white font-poppins-bold text-[16px] tracking-wider">00</div>
        <div class="h-5 block text-sm text-white font-poppins-light text-[12px] text-bannerTextGrey">minutes</div>
      </div>
      <div class="px-1 grid justify-items-center">
        <div class="h-5 block text-white font-poppins-bold text-[16px] tracking-wider">00</div>
        <div class="h-5 block text-sm text-white font-poppins-light text-[12px] text-bannerTextGrey">seconds</div>
      </div>
    </div>
    <div class="absolute right-0 pr-5">
      <img :src="whiteClose" alt="">
    </div>
  </div>
  <div class="flex justify-between items-center h-[66px] pl-[73px] pr-[73px] border-b-[1px] border-b-headerBorderColor">
    <div class="font-poppins-semiBold text-[24px] tracking-wider">Lorem Ipsum</div>
    <div class="grid grid-cols-5 gap-6">
          <div class="font-poppins-bold text-[14px] tracking-[3px] grid justify-items-center">LOREM</div>
          <div class="font-poppins-bold text-[14px] tracking-[3px] grid justify-items-center">IPSUM</div>
          <div class="font-poppins-bold text-[14px] tracking-[3px] grid justify-items-center">EXCEPTEUR</div>
          <div class="font-poppins-bold text-[14px] tracking-[3px] grid justify-items-center">CONSECTETUR</div>
          <div class="font-poppins-bold text-[14px] tracking-[3px] grid justify-items-center">VENIAM</div>
    </div>
    <div class="relative">
      <div>
        <img :src="cartIcon">
      </div>
      <div class="absolute -top-2 -right-3 bg-cartItemCountBackground rounded-full">
        <span class="font-poppins-bold text-white text-[10px] p-3">2</span>
      </div>
      <div class="absolute w-[317px] h-[299px] bg-white rounded-b-[10px] shadow-lg right-0 top-[49px] z-20">
        <div class="flex border-b-[1px] border-b-headerBorderColor">
          <div class="flex-auto w-36 p-2">
            <img :src="product1" class="rounded-md w-[95px] h-[92px]">
          </div>
          <div class="grid-cols-1 items-center w-64">
            <div class="grid pt-2">
              <span class="font-poppins-semiBold text-[23px] w-full">Lorem ipsum 1</span>
            </div>
            <div class="grid">
              <div>
                <input type="checkbox" class="h-[26px] w-[26px] rounded-[5px] mr-2 border-0 !bg-checkBoxColor1 focus:ring-0" />
                <input type="checkbox" class="h-[26px] w-[26px] rounded-[5px] mr-2 border-0 !bg-checkBoxColor2 focus:ring-0" />
                <input type="checkbox" class="h-[26px] w-[26px] rounded-[5px] mr-2 border-0 !bg-checkBoxColor3 focus:ring-0" />
              </div>
            </div>
            <div class="grid pt-1">
              <span class="font-openSans-regular text-[13px] text-cartItemRemoveButtonColor underline">REMOVE</span>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="flex-auto w-36 p-2">
            <img :src="product1" class="rounded-md w-[95px] h-[92px]">
          </div>
          <div class="grid-cols-1 items-center w-64">
            <div class="grid pt-2">
              <span class="font-poppins-semiBold text-[23px] w-full">Lorem ipsum 1</span>
            </div>
            <div class="grid">
              <div>
                <input type="checkbox" class="h-[26px] w-[26px] rounded-[5px] mr-2 border-0 !bg-checkBoxColor1 focus:ring-0" />
                <input type="checkbox" class="h-[26px] w-[26px] rounded-[5px] mr-2 border-0 !bg-checkBoxColor2 focus:ring-0" />
                <input type="checkbox" class="h-[26px] w-[26px] rounded-[5px] mr-2 border-0 !bg-checkBoxColor3 focus:ring-0" />
              </div>
            </div>
            <div class="grid pt-1">
              <span class="font-openSans-regular text-[13px] text-cartItemRemoveButtonColor underline">REMOVE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-between items-center h-[704px] bg-repeat-round bg-left-bottom" style="background-image: url('/assets/images/backgroundImage2.png')">
    <div class="flex flex-row">
      <div class="basis-1/2">
        <div class="flex flex-col p-5">
          <div>
            <span class="text-[83px] text-white font-poppins-semiBold leading-[1]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </div>
          <div class="pt-10">
            <span class="text-[16px] text-white font-openSans-light tracking-[1px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
          </div>
          <div class="w-[255px] pt-10">
            <button class="h-[48px] w-full px-5 shadow-lg bg-black text-white text-[16px] font-poppins-semiBold rounded-full">Lorem</button>
          </div>
        </div>
      </div>
      <div class="basis-1/2">
        <div class="relative -bottom-20 z-10">
          <img :src="jackImage" class="rounded-[23px] shadow-lg">
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center items-center">
    <div class="grid grid-cols-4 gap-5 pt-20 px-5 pb-20">
      <div class="relative flex flex-col h-[567px] rounded-[12px] w-[302px] border-[0.5px] border-opacity-90 border-itemBorderColor shadow">
        <div class="h-[222px] rounded-t-[9px]">
          <img :src="product1" class="rounded-t-[9px]" alt="">
        </div>
        <div class="pt-6 pl-5">
          <div>
            <span class="text-[23px] font-poppins-semiBold">Lorem Ipsum 1</span>
          </div>
          <div class="pt-2">
            <span class="text-[16px] font-openSans-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          </div>
          <div class="pt-14">
            <input type="checkbox" class="h-[32px] w-[32px] rounded-[5px] mr-3 border-0 !bg-checkBoxColor1 focus:ring-0" />
            <input type="checkbox" class="h-[32px] w-[32px] rounded-[5px] mr-3 border-0 !bg-checkBoxColor2 focus:ring-0" />
            <input type="checkbox" class="h-[32px] w-[32px] rounded-[5px] mr-3 border-0 !bg-checkBoxColor3 focus:ring-0" />
          </div>
        </div>
        <div class="bg-black text-white flex justify-center items-center absolute bottom-0 w-full h-[69px] rounded-b-[12px]">
          <span class="text-[16px] font-poppins-semiBold">Remove from cart</span>
        </div>
      </div>
      <div class="relative flex flex-col h-[567px] rounded-[12px] w-[302px] border-[0.5px] border-opacity-90 border-itemBorderColor shadow">
        <div class="h-[222px] rounded-t-[9px]">
          <img :src="product2" class="rounded-t-[9px]" alt="">
        </div>
        <div class="pt-6 pl-5">
          <div>
            <span class="text-[23px] font-poppins-semiBold">Lorem Ipsum 1</span>
          </div>
          <div class="pt-2">
            <span class="text-[16px] font-openSans-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          </div>
          <div class="pt-14">
            <input type="checkbox" class="h-[32px] w-[32px] rounded-[5px] mr-3 border-0 !bg-checkBoxColor1 focus:ring-0" />
            <input type="checkbox" class="h-[32px] w-[32px] rounded-[5px] mr-3 border-0 !bg-checkBoxColor2 focus:ring-0" />
            <input type="checkbox" class="h-[32px] w-[32px] rounded-[5px] mr-3 border-0 !bg-checkBoxColor3 focus:ring-0" />
          </div>
        </div>
        <div class="bg-black text-white flex justify-center items-center absolute bottom-0 w-full h-[69px] rounded-b-[12px]">
          <span class="text-[16px] font-poppins-semiBold">Remove from cart</span>
        </div>
      </div>
      <div class="relative flex flex-col h-[567px] rounded-[12px] w-[302px] border-[0.5px] border-opacity-90 border-itemBorderColor shadow">
        <div class="h-[222px] rounded-t-[9px]">
          <img :src="product3" class="rounded-t-[9px]" alt="">
        </div>
        <div class="pt-6 pl-5">
          <div>
            <span class="text-[23px] font-poppins-semiBold">Lorem Ipsum 1</span>
          </div>
          <div class="pt-2">
            <span class="text-[16px] font-openSans-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          </div>
          <div class="pt-14">
            <input type="checkbox" class="h-[32px] w-[32px] rounded-[5px] mr-3 border-0 !bg-checkBoxColor1 focus:ring-0" />
            <input type="checkbox" class="h-[32px] w-[32px] rounded-[5px] mr-3 border-0 !bg-checkBoxColor2 focus:ring-0" />
            <input type="checkbox" class="h-[32px] w-[32px] rounded-[5px] mr-3 border-0 !bg-checkBoxColor3 focus:ring-0" />
          </div>
        </div>
        <div class="bg-black text-white flex justify-center items-center absolute bottom-0 w-full h-[69px] rounded-b-[12px]">
          <span class="text-[16px] font-poppins-semiBold">Add to cart</span>
        </div>
      </div>
      <div class="relative flex flex-col h-[567px] rounded-[12px] w-[302px] border-[0.5px] border-opacity-90 border-itemBorderColor shadow">
        <div class="h-[222px] rounded-t-[9px]">
          <img :src="product4" class="rounded-t-[9px]" alt="">
        </div>
        <div class="pt-6 pl-5">
          <div>
            <span class="text-[23px] font-poppins-semiBold">Lorem Ipsum 1</span>
          </div>
          <div class="pt-2">
            <span class="text-[16px] font-openSans-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          </div>
          <div class="pt-14">
            <input type="checkbox" class="h-[32px] w-[32px] rounded-[5px] mr-3 border-0 !bg-checkBoxColor1 focus:ring-0" />
            <input type="checkbox" class="h-[32px] w-[32px] rounded-[5px] mr-3 border-0 !bg-checkBoxColor2 focus:ring-0" />
            <input type="checkbox" class="h-[32px] w-[32px] rounded-[5px] mr-3 border-0 !bg-checkBoxColor3 focus:ring-0" />
          </div>
        </div>
        <div class="bg-black text-white flex justify-center items-center absolute bottom-0 w-full h-[69px] rounded-b-[12px]">
          <span class="text-[16px] font-poppins-semiBold">Add to cart</span>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center items-center bg-black h-[244px]">
    <div class="text-white font-poppins-light text-[16px] text-bannerTextGrey">
      <img :src="footerLogo" class="w-[146px] h-[146px]">
    </div>
    <div class="grid grid-cols-4 pl-36">
      <div class="grid pl-10 pr-10">
        <div class="text-footerItemCaption font-poppins-extraBold text-[16px] tracking-wider pb-5">Lorem Ipsum</div>
        <div class="text-white font-poppins-light text-[14px] pb-1">Lorem Ipsum</div>
        <div class="text-white font-poppins-light text-[14px] pb-1">Lorem Ipsum</div>
        <div class="text-white font-poppins-light text-[14px] pb-1">Lorem Ipsum</div>
      </div>
      <div class="grid pl-10 pr-10">
        <div class="text-footerItemCaption font-poppins-extraBold text-[16px] tracking-wider pb-5">Lorem Ipsum</div>
        <div class="text-white font-poppins-light text-[14px] pb-1">Lorem Ipsum</div>
        <div class="text-white font-poppins-light text-[14px] pb-1">Lorem Ipsum</div>
        <div class="text-white font-poppins-light text-[14px] pb-1">Lorem Ipsum</div>
      </div>
      <div class="grid pl-10 pr-10">
        <div class="text-footerItemCaption font-poppins-extraBold text-[16px] tracking-wider pb-5">Lorem Ipsum</div>
        <div class="text-white font-poppins-light text-[14px] pb-1">Lorem Ipsum</div>
        <div class="text-white font-poppins-light text-[14px] pb-1">Lorem Ipsum</div>
        <div class="text-white font-poppins-light text-[14px] pb-1">Lorem Ipsum</div>
      </div>
    </div>
  </div>
</template>

<script setup>

// Script Load...
import cartIcon from '/assets/icons/cartIcon.svg';
import whiteClose from '/assets/icons/whiteClose.svg';
import jackImage from '/assets/images/jackImage.jpeg';
import footerLogo from '/assets/images/footerLogo.png';
import product1 from '/productImages/product1.png';
import product2 from '/productImages/product2.png';
import product3 from '/productImages/product3.png';
import product4 from '/productImages/product4.png';

</script>
