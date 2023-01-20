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
        <p class="feedback">
            {{ feedback }}
        </p>
        <div class="text-center">
            <p class="name">
                {{ name }}
            </p>
            <p class="work">
                / {{ work }}
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../styles/partials/variables' as *;
    div.review-card{
        background-color: $sec-bg-color;
        color: $titles-color;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        margin-right: 1rem;
        padding: 1rem;
        text-align: center;
        width: calc(100% / 3);
        position: relative;
        margin-bottom: 5rem;
        div.img-container{
            height: 100px;
            width: 100px;
            overflow: hidden;
            border-radius: 50%;
            position: absolute;
            top: -50px;
            left: 50%;
            transform: translateX(-50%);

            img{
                height: 100%;
                width: 100%;
            }
        }

        p.feedback{
            padding-top: 3rem;
        }

        div.text-center{
            padding-top: 1.5rem;

            p.name {
                text-transform: uppercase;
                font-weight: 600;
                color: black;
            }

            p.work {
                padding-top: .5rem;
                color: $subtitles-color;
            }
        }
    }
</style>