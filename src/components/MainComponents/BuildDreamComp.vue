<script>
import BuildDreamCard from './BuildDreamCard.vue';

export default {
    name: 'BuildDreamComp',

    components: {
        BuildDreamCard
    },

    data() {
        return {
            coursesList: [
                {
                    image_path: 'home-5-image-box-01.png',
                    title: 'Idea Discussion',
                    text: 'Get teamed up with the specialists who work and teach coding for years at famous universities.'
                },
                {
                    image_path: 'home-5-image-box-02.png',
                    title: 'Web Development',
                    text: 'Learn to start building a webpage from scratch. You decide your own pace, course and speed.'
                },
                {
                    image_path: 'home-5-image-box-03.png',
                    title: 'System Administration',
                    text: 'Learners are encouraged to study the mechanism and structure of system administration.'
                },
                {
                    image_path: 'home-5-image-box-04.png',
                    title: 'Graphic Design',
                    text: 'Have a passion for graphics and arts? Show your talents with confidance and self-assertiveness.'
                },
            ]
        }
    },

    methods: {
        getImagePath: function(imgPath) {
            return new URL(`../../assets/images/${imgPath}`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <section class="build-dream">
        <div class="container">
            <h3>
                Start learning coding languages
            </h3>
            <h2>
                Build Your Dream <span>Today</span>
            </h2>
            <div class="cards flex">
                <BuildDreamCard v-for="courseEl in coursesList"
                    :imgPath="courseEl.image_path"
                    :cardTitle="courseEl.title"
                    :cardText="courseEl.text"/>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    
    section.build-dream{
        margin-bottom: 5rem;
    }

    h2 {
        padding-bottom: 3rem;

        span {
            text-transform: uppercase;
        }
    }
</style>