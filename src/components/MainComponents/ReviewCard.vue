<script>
export default {
    name: 'ReviewCard',

    props: {
        image: String,
        feedback: String,
        name: String,
        work: String
    },

    methods: {
        getImagePath: function(imgPath) {
            return new URL(`../../assets/images/${imgPath}`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="review-card">
        <div class="img-container">
            <img :src="getImagePath(image)" alt="Profile Image">
        </div>
        <p>
            {{ feedback }}
        </p>
        <div class="text-center">
            <p>
                {{ name }}
            </p>
            <p>
                / {{ work }}
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../styles/partials/variables' as *;
    div.review-card{

        div.img-container{
            height: 100px;
            width: 100px;
            overflow: hidden;
            border-radius: 50%;

            img{
                height: 100%;
                width: 100%;
            }
        }
    }
</style>