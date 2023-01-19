<script>
export default {
    name: 'MobileLearnComp',

    data() {
        return {
            
        }
    }
}
</script>

<template>
    <section class="mobile-learn">
        <div class="container flex flex-align-center">
            <div class="image-container">
                <img src="../../assets/images/home-5-image-02-222x300.png" alt="Mobile phone image">
            </div>
            <div class="right-section">
                <h3>
                    What are you looking for?
                </h3>
                <h2>
                    Learn on your <span>mobile</span> anytime!
                </h2>
                <p>
                    Save lessons for later and revise or wirte notes at any time and on multiple devices on your way. Never interfere with activites of enjoyment or other precious moments.
                </p>
                <button class="green-button">
                    Download Our App
                </button>
            </div>
        </div>
        <div class="bg-image grey-bg-img">
            <img src="../../assets/images/underlay-shape-grey.svg" alt="Background grey">
        </div>
        <div class="bg-image dots">
            <img src="../../assets/images/maxcoach-shape-07.png" alt="Dots">
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../styles/partials/variables' as *;

    section.mobile-learn {
        position: relative;

        div.container {
            height: 450px;
            justify-content: space-between;

            div.right-section {
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

                p {
                    font-size: $text-fs;
                    padding-bottom: 2rem;

                }
            }

            div.image-container {
                height: 100%;
                padding-left: 5rem;

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
            top: 18%;
            left: 10%;
            z-index: -1;

            img {
                width: 100%;
            }
        }

        div.dots{
            height: 150px;
            width: 100px;
            position: absolute;
            top: 58%;
            left: 44.5%;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>