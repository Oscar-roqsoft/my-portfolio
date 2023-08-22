<template>
    <div id="contact"
    class=" max-w-[1280px] mx-auto p-4 flex flex-col items-center text-center" >
        <div class="flex justify-center text-gray-200 dark:text-gray-200 text-sm font-medium mb-4 ">
            <span class="px-3 py-1 bg-slate-700 dark:bg-gray-900 rounded-full capitalize tracking-wider font-['Shrikhand'] shadow shadow-slate-500">get in touch</span>
        </div>
        <p class="text-sm text-gray-400 dark:text-gray-900 font-['pacifico']">What’s next? Feel free to reach out to me if you're looking for a developer, 
            have a query, or simply want to connect.</p> 

        <div @click="alertv()" class="my-5">
            <a href="mailto:oscar.nnoje@gmail.com">
                <Icon name="material-symbols:stacked-email-outline-rounded"/>
            </a>
            <span class="mx-3 text-2xl font-['pacifico']">{{ emailValueCopy }}</span>
            <button @click="copy(emailValueCopy)"><Icon name="material-symbols:content-copy-outline-rounded"/></button>
        </div>

        <div @click="alertv()">
            <a href="Tel: +2348084109083">
                <Icon name="material-symbols:call-sharp"/>
            </a>
            <span  class="mx-3  text-2xl font-['pacifico']">{{ phoneNumber}}</span>
            <button @click='copy(phoneNumber)'> <Icon name="material-symbols:content-copy-outline-rounded"/></button>
        </div>

        <span class="my-7">You may also find me on these platforms!</span>

        <div class="flex">
            <nuxt-link to="https://oscar-roqsoft.github.io" class="bg-transparent shadow border-2 rounded-full p-2 inline-flex items-center ">
                <Icon name="uil:github" size="20" />
            </nuxt-link>
            <nuxt-link to="https://twitter.com/LinkNnoje?t=ykBo0-KGm0-qrxi5P2OGMQ&s=09" class="bg-transparent shadow border-2 rounded-full p-2 inline-flex items-center mx-3">
                <Icon  name="uil:twitter" size="20"/>
            </nuxt-link>
            <nuxt-link to="https://wa.me/+2348084109083" class="bg-transparent border-2 shadow  rounded-full p-2 inline-flex items-center">
                <Icon name="uil:whatsapp"  size="20"/>
            </nuxt-link>
            <nuxt-link to="https://www.linkedin.com/in/oscar-nnoje-177621268" class="bg-transparent shadow border-2 rounded-full p-2 inline-flex items-center mx-3">
                <Icon  name="entypo-social:linkedin"  size="20"/>
            </nuxt-link>
            <nuxt-link to="https://www.facebook.com/insigne.nnoje" class="bg-transparent border-2 shadow rounded-full p-2 inline-flex items-center mx-3">
                <Icon  name="uil:facebook"  size="20"/>
            </nuxt-link>
        </div>

        <div class="relative   top-10 ">
            <img src="/Cartoon.png" alt="" width="200px" >
        </div>

       
    </div>
    
</template>

<script setup>

import { useClipboard } from '@vueuse/core'

const emailValueCopy = ref('oscar.nnoje@gmail.com')
const phoneNumber = ref(+2348084109083)
const { copy, isSupported } = useClipboard({ phoneNumber,emailValueCopy })

const alertv =()=>{
    alert('copied')
}
</script>