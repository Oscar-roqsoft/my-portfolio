<template>
    <div class="flex flex-col-reverse md:flex-row max-w-[1280px] justify-center   md:justify-between items-center mx-auto p-4 " id="home">
        <div class="md:w-[50%] relative -top-32 md:top-0 text-justify md:text-start">
            <h1 class="md:text-5xl text-2xl font-bold">Hi! I Am  <br><span class="text-blue-700">Nnoje Udochukwu</span> </h1>
            <h3 class="md:text-3xl my-2 md:my-4 text-xl">I’m a Web Designer and Developer</h3>
            <p class="text-sm md:text-lg text-gray-400 dark:text-gray-600 font-['Shrikhand']">I'm a front-End developer (Vue.js & tailwind.css) with a focus on creating (and occasionally designing) exceptional
                 digital experiences that are fast, accessible, visually appealing, and responsive.</p>

                 <div class="flex mt-6">
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
                    <nuxt-link to="https://www.facebook.com/insigne.nnoje" class="bg-transparent shadow border-2 rounded-full p-2 inline-flex items-center mx-3">
                        <Icon  name="uil:facebook"  size="20"/>
                    </nuxt-link>
                </div>

        </div>
        <div class="flex flex-col justify-end md:justify-center items-center md:w-[50%] z-20 relative">
            <div class="border-[20px] border-blue-700 rounded-full w-[270px] relative top-44   md:top-44   h-[270px] shadow-lg  shadow-blue-700 
            ">
            </div>
            <img src="/YourImagesHere.png" class="relative -top-[170px] transition md:right-40  md:left-0  w-[230px]  rounded-r-[110px] rounded-l-[110px]" alt="">
        </div>
       
    </div>

</template>