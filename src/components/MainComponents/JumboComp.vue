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
            <div class="image-container">
                <img src="../../assets/images/home-5-hero-image-279x300.png" alt="Jumbo image">
            </div>
        </div>
        <div class="icons-list">
            <ul>
                <li>
                    <a href="#">
                        <i class="fa-solid fa-cart-shopping fa-xs"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa-solid fa-dharmachakra fa-xs"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa-solid fa-book fa-xs"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa-solid fa-cart-shopping fa-xs"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="bg-image">
            <img src="../../assets/images/jumbo-overlay.svg" alt="Jumbo overlay">
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../styles/partials/variables' as *;

    section.jumbo {
        height: 600px;
        background-color: $third-bg-color;
        position: relative;

        div.container {
            height: 500px;
            justify-content: space-between;

            div.title-section {
                width: 40%;
                padding: 1rem 1rem 1rem 0;
                z-index: 3;

                h1 {
                    color: $titles-color;
                    font-size: $titles-fs;
                    font-weight: 600;
                }

                p {
                    padding-top: 2rem;
                    margin-bottom: 2rem;
                    font-size: 1rem;
                    line-height: 1.7rem;
                }
            }

            div.image-container {
                height: 100%;
                padding: 2rem 0;
                z-index: 3;

                img {
                    height: 100%;
                }
            }
        }

        div.icons-list {
            background-color: $sec-bg-color;
            position: absolute;
            right: 0;
            top: 25%;
            z-index: 3;

            ul li {
                padding: .25rem;
            }
        }

        div.bg-image{
            width: 100%;
            height: 400px;
            transform: rotateX(.5turn);
            position: absolute;
            bottom: 0;
            left: 0;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>