<template>
    <div id="project"
    class="md:flex-row max-w-[1280px] mx-auto p-4 text-center border-t font-['Lexend Deca'] dark:text-gray-900 dark:bg-gray-200">
        <div class="flex justify-center text-gray-300 dark:text-gray-200 text-sm font-bold mb-2 ">
            <span class="px-3 py-1 bg-slate-700 dark:bg-gray-900 rounded-full capitalize">works</span>
        </div>
        <p class="text-sm text-gray-400 dark:text-gray-900">Some of the noteworthy projects I have built:</p> 
         

        
        <div v-for="work in works " :key="work" class="flex flex-col md:flex-row mt-[50px] border border-blue-700 rounded-lg 
        animate__animated  animate__fadeInUp">
            <div class="p-6 md:p-[48px] bg-slate-800 rounded-t md:rounded-t-none md:rounded-l-lg">
                <img :src="work.img" alt="" class="w-full rounded-lg">
            </div>

            <div class="bg-gray-900 rounded-b md:rounded-b-none md:rounded-r-lg p-6 md:p-[48px] dark:text-gray-100 ">
                <div class="flex justify-start items-center">
                    <h1 class="text-lg text-gray-200 capitalize pb-0.5 border-b-2 border-dotted border-blue-700">{{ work.title }}</h1>
                </div>
                <p class="text-gray-400 py-3 text-sm text-start font-['Shrikhand']">{{ work.article }}</p>
                    <div class="flex flex-wrap capitalize">
                        <div v-for="tool in work.tools" :key="tool">
                            <span 
                            class="px-3 py-1 border border-blue-700 inline-flex items-center text-xs bg-slate-800 rounded-2xl mr-2 my-2 font-bold">
                            {{ tool }}
                            </span>
                        </div>
                    </div>

                <a :href="work.link" class="flex justify-start mt-10 text-gray-500">
                    <Icon name="material-symbols:ungroup" size="24"/>
                </a>
            </div>
        </div>
        
    </div>
</template>


<script setup>
import 'animate.css';
    const works = [
        {
            id:1,
            img:"/portfolio 17.13.58.png",
            title: "portfolio-project",
            article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec  urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
            tools:["html","css","vanilla javascript"],
            link:"https://oscar-roqsoft.github.io/pfolio"
        },
        {
            id:1,
            img:"/learning.png",
            title: "portfolio-project2",
            article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec  urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
            tools:["html","css","bootstraph"],
            link:"#"
        },
        {
            id:1,
            img:"/luxterior.png",
            title: "portfolio-project2",
            article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec  urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
            tools:["html","css","bootstraph"],
            link:"#"
        }
    ]
</script>