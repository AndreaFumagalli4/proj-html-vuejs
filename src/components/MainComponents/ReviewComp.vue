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
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../styles/partials/variables' as *;
    section.review{
        background-color: $data-bg-color;

        h2{
            padding-bottom: 3rem;
        }
    }
</style>