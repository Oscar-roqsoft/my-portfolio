<template>
    <div id="contact"
    class=" max-w-[1280px] mx-auto p-4 flex flex-col items-center text-center" >
        <div class="flex justify-center text-gray-200 dark:text-gray-200 text-sm font-medium mb-4 ">
            <span class="px-3 py-1 bg-slate-700 dark:bg-gray-900 rounded-full capitalize tracking-wider font-['Shrikhand']">get in touch</span>
        </div>
        <p class="text-sm text-gray-400 dark:text-gray-900 font-['pacifico']">What’s next? Feel free to reach out to me if you're looking for a developer, 
            have a query, or simply want to connect.</p> 

        <div class="my-5">
            <a href="">
                <Icon name="material-symbols:stacked-email-outline-rounded"/>
            </a>
            <span class="mx-3 text-2xl font-['pacifico']">oscar.nnoje@gmail.com</span>
            <Icon name="material-symbols:content-copy-outline-rounded"/>
        </div>

        <div>
            <a href="">
                <Icon name="material-symbols:call-sharp"/>
            </a>
            <span class="mx-3  text-2xl font-['pacifico']">+2348084109083</span>
            <Icon name="material-symbols:content-copy-outline-rounded"/>
        </div>

        <span class="my-7">You may also find me on these platforms!</span>

        <div class="flex">
            <nuxt-link to="https://oscar-roqsoft.github.io" class="bg-transparent shadow border-2 rounded-full p-2 inline-flex items-center ">
                <Icon name="uil:github" size="20" />
            </nuxt-link>
            <nuxt-link to="https://twitter.com/LinkNnoje?t=ykBo0-KGm0-qrxi5P2OGMQ&s=09" class="bg-transparent border-2 rounded-full p-2 inline-flex items-center mx-3">
                <Icon  name="uil:twitter" size="20"/>
            </nuxt-link>
            <nuxt-link to="https://wa.me/+2348084109083" class="bg-transparent border-2  rounded-full p-2 inline-flex items-center">
                <Icon name="uil:whatsapp"  size="20"/>
            </nuxt-link>
            <nuxt-link to="https://www.linkedin.com/in/oscar-nnoje-177621268" class="bg-transparent border-2 rounded-full p-2 inline-flex items-center mx-3">
                <Icon  name="entypo-social:linkedin"  size="20"/>
            </nuxt-link>
            <nuxt-link to="https://www.facebook.com/insigne.nnoje" class="bg-transparent border-2 rounded-full p-2 inline-flex items-center mx-3">
                <Icon  name="uil:facebook"  size="20"/>
            </nuxt-link>
        </div>

        <div class="relative   top-10 ">
            <img src="/Cartoon.png" alt="" width="200px" >
        </div>

       
    </div>
    
</template>