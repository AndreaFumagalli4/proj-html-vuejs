<script>
import { store } from '../../store';
import CareerProspCard from './CareerProspCard.vue';

export default {
    name: 'CareerProspComp',

    components: {
        CareerProspCard
    },

    data () {
        return {
            store,
            isOpen: true,
        }
    },

    methods: {
        getOtherInfo(activeIndex){

            if ((this.store.coursesInfoList[activeIndex].isActive) && ((this.isOpen === true))) {
                this.isOpen = false;
                this.store.coursesInfoList[activeIndex].isActive = false;
            } else if (!(this.store.coursesInfoList[activeIndex].isActive) && (this.isOpen === false)) {
                this.isOpen = true;
                this.store.coursesInfoList[activeIndex].isActive = true;
            } else if (!(this.store.coursesInfoList[activeIndex].isActive) && (this.isOpen === true)) {
                for (let i = 0; i < this.store.coursesInfoList.length; i++){
                    if (this.store.coursesInfoList[i].isActive) {
                        this.store.coursesInfoList[i].isActive = false;
                    }
                }
                this.store.coursesInfoList[activeIndex].isActive = !(this.store.coursesInfoList[activeIndex].isActive);
            }
        }
    }
}
</script>

<template>
    <section class="career-prospective">
        <div class="container flex">
            <div class="image-container">
                <img src="../../assets/images/about-us-03-image-01-215x300.png" alt="Career comp image">
            </div>
            <div class="cards-section">
                <h3>
                    Dream with <span>maxcoach</span>
                </h3>
                <h2>
                    Construct A <span>Stunning</span> Career Perspective
                </h2>
                <div class="cards">
                    <CareerProspCard v-for="(CoursesInfoEl, index) in store.coursesInfoList"
                        :infoTitle="CoursesInfoEl.title"
                        :infoText="CoursesInfoEl.text" 
                        :isActive="CoursesInfoEl.isActive"
                        :index="index"
                        @switchInfo="getOtherInfo"/>
                </div>
            </div>
        </div>
        <div class="bg-image">
            <img src="../../assets/images/underlay-shape-lilla.svg" alt="Background lille">
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../styles/partials/variables' as *;

    section.career-prospective {
        position: relative;
        margin-bottom: 6rem;
        
        div.container {
            height: 450px;
            justify-content: space-between;

            div.cards-section {
                width: 50%;
                padding: 1rem 1rem 1rem 0;

                h3 {
                    text-align: start;

                    span {
                        font-weight: 700;
                        color: $titles-color;
                    }
                }

                h2 {
                    text-align: start;
                    margin-bottom: 2rem;
                }
            }

            div.image-container {
                height: 100%;
                width: 50%;
                padding-left: 2rem;

                img {
                    height: 100%;
                }
            }
        }

        div.bg-image {
            height: 300px;
            width: 300px;
            position: absolute;
            top: 18%;
            left: 10%;
            z-index: -1;

            img {
                width: 100%;
            }
        }
    }
</style>