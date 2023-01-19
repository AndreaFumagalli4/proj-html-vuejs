<script>
import CareerProspCard from './CareerProspCard.vue';

export default {
    name: 'CareerProspComp',

    components: {
        CareerProspCard
    },

    data () {
        return {
            infoList: [
                {
                    title: 'Multiple platforms supported fot teaching & studyng',
                    text: 'MaxCoach supports the act of teaching and learning on mmultiple platforms like online or offline via material downloads. We konw things aren\'t supposed to be devoured in a  short time, you can always access our knowledge base from any device'
                },
                {
                    title: 'Multiple course participation at the same time',
                    text: 'MaxCoach supports the act of teaching and learning on mmultiple platforms like online or offline via material downloads. We konw things aren\'t supposed to be devoured in a  short time, you can always access our knowledge base from any device'
                },
                {
                    title: 'Track study progress & deliver prompt feedback',
                    text: 'MaxCoach supports the act of teaching and learning on mmultiple platforms like online or offline via material downloads. We konw things aren\'t supposed to be devoured in a  short time, you can always access our knowledge base from any device'
                },
            ],
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
                    <CareerProspCard v-for="infoEl in infoList"
                        :infoTitle="infoEl.title"
                        :infoText="infoEl.text" />
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