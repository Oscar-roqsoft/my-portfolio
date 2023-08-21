<template>
    <div >
        <!-- home section -->
        <section class="bg-gray-900 dark:text-gray-900 dark:bg-gray-200  text-white ">
            <navbar/>
            <a href="#"><button type="button" 
            class="text-white md:hidden absolute top-44 z-40 left-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
             focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2
             animate__animated  animate__flip animate__repeat-2	2">Hire Me</button></a>

            <home/>
            <about />
                
        </section>

        <section class="bg-gray-950 text-white dark:bg-gray-200">
            <Skills/>
            <Services />
            <Projects class="pb-20"/>
        </section>

        <section class="bg-gray-900 text-gray-300  min-h-[400px] dark:text-gray-900 dark:bg-gray-200">
              <Contact/>
        </section>
        <section class="bg-gray-950 dark:bg-gray-200  h-10"></section>
    </div>
</template>

<script setup>

import 'animate.css';

const currentSection = ref("")

onMounted(()=>{
    const observer = new IntersectionObserver((entries)=>{
         entries.forEach((entry)=>{
            currentSection.value= entry.target.getAttribute('id')
         })
    })
    document.querySelectorAll("h1").forEach((section)=>{
        observer.observe(section)
    })
})

</script>

