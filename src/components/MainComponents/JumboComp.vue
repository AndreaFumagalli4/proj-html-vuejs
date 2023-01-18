<script>
export default {
    name: 'JumboComp',

}
</script>

<template>
    <section class="jumbo">
        <div class="container flex flex-align-center">
            <div class="title-section">
                <h1>
                    Complete Your Dreams in JavaS Programming
                </h1>
                <p>
                    Learn any coding program in distance and for a reasonable fee. You don't have to struggle alone, you've got our assistance and help.
                </p>
                <button class="green-button">
                    <i class="fa-solid fa-download"></i>
                    Download free E-book
                </button>
            </div>
            <div>
                <img src="../../assets/images/home-5-hero-image-279x300.png" alt="Jumbo image">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../styles/partials/variables' as *;

    section.jumbo {
        height: 500px;
        background-image: url('../../assets/images/jumbo-overlay.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        div.container {
            height: 100%;

            div.title-section {
                width: 50%;
                padding: 1rem 3rem 1rem 0;

                h1 {
                    color: $titles-color;
                    font-size: $titles-fs;
                    font-weight: 600;
                }

                p {
                    padding-top: 1.5rem;
                    margin-bottom: 1.5rem;
                }
            }
        }
    }
</style>