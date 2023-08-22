<template>
    <div class="flex flex-col  max-w-[1280px] mx-auto p-4 text-center font-['Lexend Deca'] mb-10 dark:text-gray-900 dark:bg-gray-100">
        <div class="flex justify-center text-gray-300 dark:text-gray-200 text-sm font-bold mb-2 ">
            <span class="px-3 py-1 bg-slate-700 dark:bg-gray-700 rounded-full tracking-wider font-['Shrikhand'] shadow shadow-slate-500">skills</span>
        </div>
        <p class="text-sm text-gray-400 dark:text-gray-900 ">The skills, tools and technologies I am really good at:</p>
        <div class="grid grid-cols-3 md:grid-cols-6 mt-10 gap-5  ">
            <div v-for="img in skills" :key="img">
                <img :src="img" alt="" class="w-[70px] h-[70px]  shadow shadow-slate-500  bg-gray-400 rounded p-2">
            </div>
        </div>
    </div>
</template>

<script setup>


const skills = [
    "/JavaScript-logo-vector-01.svg",
    "/CSS-3-logo-vector-01.svg",
    "/HTML-5-logo-vector-01.svg",
    "/Python-logo-vector-01.svg",
    "/tailwindcss-icon.svg",
    "/Vue-JS-logo-vector-01.svg",
    "/getbootstrap-ar21.svg",
    "/git-scm-ar21.svg",
    "/mongodb-ar21.svg",
    "/nuxtjs-ar21.svg",
    "/nodejs-ar21.svg"
    
]
</script>