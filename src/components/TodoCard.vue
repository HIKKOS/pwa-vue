<template>
    <div class="relative flex flex-col  justify-between text-gray-700 bg-white shadow-md bg-clip-border rounded-xl  ">

        <div class="p-6">
            <div class="flex items-center justify-between mb-2">
                <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    {{ title }}
                </p>
                <!-- <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    $95.00
                </p> -->
            </div>
            <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                {{ description }}
            </p>
        </div>
        <div class="p-6 pt-0 flex flex-row gap-2">
            <button
                class="w-1/2    bg-red-500  align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs   rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block  bg-blue-gray-900/10  shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                type="button">
                <svg class="m-auto" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="25px"
                    viewBox="0 0 30 30">
                    <path fill="#ffffff"
                        d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z">
                    </path>
                </svg>
            </button>
            <button
                class="w-1/2    bg-yellow-500  align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block  bg-blue-gray-900/10  shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                type="button">
                <svg class="m-auto" width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17.0671 2.27157C17.5 2.09228 17.9639 2 18.4324 2C18.9009 2 19.3648 2.09228 19.7977 2.27157C20.2305 2.45086 20.6238 2.71365 20.9551 3.04493C21.2864 3.37621 21.5492 3.7695 21.7285 4.20235C21.9077 4.63519 22 5.09911 22 5.56761C22 6.03611 21.9077 6.50003 21.7285 6.93288C21.5492 7.36572 21.2864 7.75901 20.9551 8.09029L20.4369 8.60845L15.3916 3.56308L15.9097 3.04493C16.241 2.71365 16.6343 2.45086 17.0671 2.27157Z"
                        fill="#ffffff" />
                    <path
                        d="M13.9774 4.9773L3.6546 15.3001C3.53154 15.4231 3.44273 15.5762 3.39694 15.7441L2.03526 20.7369C1.94084 21.0831 2.03917 21.4534 2.29292 21.7071C2.54667 21.9609 2.91693 22.0592 3.26314 21.9648L8.25597 20.6031C8.42387 20.5573 8.57691 20.4685 8.69996 20.3454L19.0227 10.0227L13.9774 4.9773Z"
                        fill="#ffffff" />
                </svg>
            </button>
        </div>
    </div>


</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
defineProps<{
    id: number;
    title: string;
    description: string | undefined;
    completed: boolean;
}>();


</script>

<style scoped></style>