<template>
    <div >
        <nav  class="md:bg-gray-900 md:dark:bg-gray-200 text-white dark:text-black fixed  w-full z-50 font-['Shrikhand'] opacity-[0.9] " id="nav" >
            <div class="max-w-screen-xl flex flex-wrap  items-center justify-between   mx-auto md:p-4">
                <div 
                class="flex flex-wrap items-center  justify-between bg-gray-900 dark:bg-gray-200 w-full md:w-[25%] z-20 animate__animated animate__fadeInDown" id="subnav">
                    <a href="#" class="flex items-center m-4 md:m-0 ">
                        <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> -->
                        <span class="self-center text-xl  whitespace-nowrap dark:text-gray-950 capitalize ">oscar-tech</span>
                    </a>

                    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex m-4 md:m-0 items-center p-2 w-10 h-10 justify-center 
                    text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200
                     dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 
                     " aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div class="hidden w-full md:block md:w-auto  bg-gray-900 dark:bg-gray-200 px-4 md:px-0 z-10  animate__animated animate__fadeInDown 
                transition-all" @click="myToggle"
                   :class="visible ?'hidden transition-all': ''"
                 id="navbar-default">
                    <div class="flex flex-col font-medium md:items-center  border-none  md:flex-wrap   md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                        <div class="border-y dark:border-black md:border-none pb-6 md:pb-0 md:flex md:items-center md:justify-center">
                        <ul v-for="(link,index) in links" :key="link"    @click="currentheight=link"
                        class="font-medium flex flex-col  md:p-0 mt-4   
                        md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-200 dark:border-gray-700">
                            <li 
                            :id="index">
                                <a :href="`#${link}`" 
                                class="block py-1 pl-3 pr-4  mt-1 md:my-0 text-white dark:text-gray-950 rounded md:bg-transparent 
                                md:dark:text-blue-500"
                                  :class="currentheight===link ?'bg-blue-700  transition-all dark:text-white': ''">
                                {{link}}
                                </a>
                            </li>
                          
                        </ul>
                        </div>
                        <div class="flex justify-between md:border-l items-center text-lg my-2 md:my-0 py-2 pl-3  md:pl-6 ">
                            <h2 class="md:hidden">select theme</h2>
                           <div class="w-[50px] px-0.5 mr-2 md:mr-0 h-[26px] bg-gray-950 dark:bg-gray-300   shadow-2xl 
                            transition-all rounded-lg
                            inline-flex dark:justify-end items-center" @click="switchTheme">
                                <button v-if="mode === 'light'" 
                                class="inline-flex justify-start animate__animated animate__slideInRight transition">
                                    <Icon class=" md:pt-0" name="material-symbols:light-mode-outline" size="25" />
                                </button>
                                <button v-else
                                class="inline-flex justify-end text-black  animate__animated animate__slideInLeft transition">
                                <Icon class="md:pt-0"   name="material-symbols:dark-mode-outline-rounded" size="25" />
                                </button>
                           </div>
                        </div>

                        <div>
                            <button type="button" 
                            class="text-white block bg-blue-700 my-2 md:my-0  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
                            font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700
                            dark:focus:ring-blue-800">Download CV</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
// import {  } from '@vueuse/core'
import { useColorMode,useDark, useToggle} from '@vueuse/core'


const isDark = useDark()
const toggleDark = useToggle(isDark)

const mode = useColorMode()
const visible = ref(true)
let myToggle = ()=>{
   visible.value = !(visible.value)
}

const switchTheme = ()=>{
    // mode.value = mode.value === 'light' ? 'dark' : 'light',
    toggleDark()
}


// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})


const currentheight = ref("home")


const links =[
    "home",
    "about",
    "services",
    "project",
    "contact"
]

</script>