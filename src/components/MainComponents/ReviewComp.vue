<script>
import { store } from '../../store';
import ReviewCard from './ReviewCard.vue';

export default {
    name: 'ReviewComp',

    components: {
        ReviewCard
    },

    data() {
        return{
            store,
        }
    },

    methods: {
        
    }
}
</script>

<template>
    <section class="review">
        <div class="container">
            <h3>    
                People are praising maxcoach
            </h3>
            <h2>
                What make they <span>love us?</span>
            </h2>
            <div class="cards">
                <ReviewCard v-for="(review, index) in store.reviewList"
                    :image="review.image"
                    :feedback="review.feedback"
                    :name="review.name"
                    :work="review.employment"
                    :isView="review.isView" 
                    :index="index" />
            </div>
            <div class="carousel-control">
                <i class="fa-solid fa-circle fa-2xs"
                    @click="switchFirstCard"></i>
                <i class="fa-solid fa-circle fa-2xs"
                    @click="switchSecondCard"></i>
                <i class="fa-solid fa-circle fa-2xs"
                    @click="switchThirdCard"></i>
                <i class="fa-solid fa-circle fa-2xs"
                    @click="switchFourthCard"></i>
            </div>
            <div class="sub-text">
                <h2>
                    Start today for getting <span>Online Certification</span>
                </h2>
                <h2>
                    You can be your own guiding star with our help!
                </h2>
                <button class="green-button">
                    Get started now
                </button>
                <div class="bg-image lines">
                    <img src="../../assets/images/maxcoach-shape-01.png" alt="Colored lines">
                </div>
                <div class="bg-image rims">
                    <img src="../../assets/images/maxcoach-shape-02.png" alt="Rims">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../styles/partials/variables' as *;

    .bg-image{
        position: absolute;
    }
    section.review{
        padding-top: 3rem;
        background-color: $data-bg-color;
        position: relative;

        h2{
            padding-bottom: 6rem;
        }

        div.cards{
            display: flex;
            flex-wrap: wrap;
        }
        div.carousel-control {
            text-align: center;
            margin-bottom: 3rem;

            i{
                margin: 0 .5rem;
                cursor: pointer;
                color: $subtitles-color;
                font-size: .5rem;

                &:hover{
                    font-size: .8rem;
                }
            }
        }

        div.sub-text{
            text-align: center;
        }

        div.sub-text h2:first-of-type{
            padding-bottom: .3rem;
            font-size: 1.5rem;
        }

        div.sub-text h2:last-of-type{
            font-size: 2rem;
            padding-bottom: 2rem;
        }

        div.sub-text button{
            padding: 1rem 4rem;
            margin-bottom: 5rem;
        }
    }

    div.lines {
        height: 35px;
        width: 130px;
        bottom: 15%;
        left: 13%;

        img {
            width: 100%;
            height: 100%;
        }
    }

    div.rims {
        height: 120px;
        width: 120px;
        bottom: 5%;
        right: 13%;

        img {
            width: 100%;
            height: 100%;
        }
    }

</style>