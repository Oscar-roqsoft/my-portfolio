<template>
    <div id="services"
     class=" max-w-[1280px] mx-auto p-4">
        <div class="border-l dark:border-black border-dotted pl-4 ">
            <span class="text-xs text-gray-400 dark:text-gray-900">SERVICES THAT I PROVIDE</span>
            <h1 class="text-4xl mb-9 dark:text-gray-900">My Services</h1>
        </div>
       
        <div ref="target" class="grid md:grid-cols-3 md:gap-10  dark:bg-gray-200">
            <div v-animate-on-scroll
             v-for="item in services" :key="item"
            class=" p-4 mb-4 gap-5 rounded-lg  bg-slate-800 shadow">
                <div class="flex justify-end text-5xl ">
                    <div>0<span>{{ item.id }}</span></div>
                </div>
                <Icon :name="item.icon" size="90" />
                <h2 class="capitalize">{{ item.title }}</h2>
                <p class="text-sm text-gray-400 dark:text-gray-300 font-['Shrikhand'] mt-3">{{ item.article }}</p>
            </div>
        </div>
      

    </div>
</template>

<script setup>
import 'animate.css';

const services = [ 
    {
        id: 1,
        icon: "material-symbols:laptop-chromebook-outline",
        title: "web designer",
        article: "We analyse your website’s structure, internal architecture & other key elements that are weighted.,"
    },
    {
        id: 2,
        icon: "material-symbols:format-paint-outline-sharp",
        title: "UI/UX",
        article: "We focus on understanding user needs to deliver functional, meaningful and pleasurable experiences!,"
    },
    {
        id: 3,
        icon: "material-symbols:brush-outline",
        title: "graphics designer",
        article: "Elevate your brand with our captivating graphic design. Transforming ideas into visual masterpieces. Experience creativity today."
    },
]
</script>


<style scoped>

.before-enter{
    opacity: 0;
    transform: translateY(100px);
    transition: all 2s ease-in-out ;
}
.enter{
    opacity: 1;
    transform: translateY(0);
}
</style>