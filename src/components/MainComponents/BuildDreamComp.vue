<script>
import { store } from '../../store';

import BuildDreamCard from './BuildDreamCard.vue';

export default {
    name: 'BuildDreamComp',

    components: {
        BuildDreamCard
    },

    data() {
        return {
            store,
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
                <BuildDreamCard v-for="categoryEl in store.categoryList"
                    :imgPath="categoryEl.image_path"
                    :cardTitle="categoryEl.title"
                    :cardText="categoryEl.text"/>
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