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
        <button>
            Start now
            <i class="fa-solid fa-arrow-right"></i>
        </button>
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

        p{
            color: $subtitles-color;
            margin-bottom: 1rem;
        }

        button{
            color: $subtitles-color;
            border: none;
            background-color: $sec-bg-color;
            cursor: pointer;
            padding: .5rem 3rem;
            border-radius: 5px;

            &:hover{
                color: $detail-color;
                background-color: $data-bg-color;
            }

            i{
                margin-left: .5rem;
            }
        }
    }
</style>