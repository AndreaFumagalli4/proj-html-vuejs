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
                <ReviewCard v-for="review in store.reviewList"
                    :image="review.image"
                    :feedback="review.feedback"
                    :name="review.name"
                    :work="review.employment"/>
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
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../styles/partials/variables' as *;
    section.review{
        background-color: $data-bg-color;

        h2{
            padding-bottom: 6rem;
        }

        div.cards{
            display: flex;
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

</style>