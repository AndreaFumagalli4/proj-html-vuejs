<script>

export default {
    name: 'BuildDreamCard',

    props: {
        imgPath: String,
        cardTitle: String,
        cardText: String
    },

    data() {
        return {
            
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
    <div class="card">
        <div class="image-container">
            <img :src="getImagePath(imgPath)" alt="Course Image">
        </div>
        <h4>
            {{ cardTitle }}
        </h4>
        <p>
            {{ cardText }}
        </p>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../styles/partials/variables' as *;
    
    div.card {
        text-align: center;
        padding: 2rem 1rem 2rem 0;

        &:last-child {
            padding-right: 0;
        }

        div.image-container {
            margin-bottom: 1rem;
        }

        h4 {
            padding: 1rem 0;
        }
    }
</style>