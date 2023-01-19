<script>
export default {
    name: 'GetStartedComp',

    data() {
        return {
            optionsList: [
                'Select & customize courses to your preferences',
                'Change the tutore and make arrangements',
                'Participate in events to join others',
                'Get the desired certificate delivered at house'
            ]
        }
    }
}
</script>

<template>
    <section class="get-started">
        <div class="container flex">
            <div class="left-section">
                <h3>
                    Why hesitate to register?
                </h3>
                <h2>
                    Lean At Your Own <span>Pace</span>
                </h2>
                <ul>
                    <li v-for="optionsListEl in optionsList">
                        <i class="fa-solid fa-check fa-lg"></i>
                        {{ optionsListEl }}
                    </li>
                </ul>
                <button class="green-button">
                    Get started for free
                </button>
            </div>
            <div class="image-container">
                <img src="../../assets/images/home-5-image-01-269x300.png" alt="Get Free image">
            </div>
        </div>
        <div class="bg-image grey-bg-img">
            <img src="../../assets/images/underlay-shape-grey.svg" alt="Background grey">
        </div>
        <div class="bg-image bg-image-dots">
            <img src="../../assets/images/maxcoach-shape-05-100x100.png" alt="Dots">
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../styles/partials/variables' as *;

    section.get-started {
        position: relative;
        margin-bottom: 10rem;
        div.container {
            height: 450px;
            justify-content: space-between;

            div.left-section {
                width: 40%;
                padding: 1rem 1rem 1rem 0;
                text-align: start;

                h3,
                h2 {
                    text-align: start;
                }

                h2 {
                    padding-bottom: 1rem;
                }

                ul {
                    font-size: $text-fs;
                    padding-bottom: 1rem;

                    li {
                        padding-bottom: 1rem;

                        i{
                            color: $detail-color;
                            margin-right: 1rem;
                        }
                    }
                }
            }

            div.image-container {
                height: 100%;
                padding-right: 6rem;

                img {
                    height: 100%;
                }
            }
        }

        .bg-image{
            position: absolute;
        }
        div.grey-bg-img {
            height: 400px;
            width: 400px;
            top: 25%;
            right: 28%;
            z-index: -1;

            img {
                width: 100%;
            }
        }

        div.bg-image-dots{
            height: 150px;
            width: 150px;
            position: absolute;
            top: 58%;
            right: 17%;

            img {
                width: 100%;
            }
        }
    }
</style>