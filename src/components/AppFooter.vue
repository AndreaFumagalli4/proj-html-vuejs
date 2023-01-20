<script>
export default {
    name: 'AppFooter',

    data() {
        return {
            contactsList: [
                '382 NE 191st # 87394 Miami, FL 33179-3899',
                '+1(305) 547-9909 (9am - 5pm EST, Monday - Friday)',
                'support@maxcoach.com'
            ],
            exploreList: [
                'Start here',
                'blog',
                'About us'
            ],
            infoFooterList: [
                'Success story',
                'Courses',
                'Coutact us'
            ],
            informationsList: [
                'Membership',
                'Purchase guide',
                'Privacy policy',
                'Terms of services'
            ]
        }
    },
}
</script>

<template>
    <div class="container flex">
        <div class="left-section">
            <h4>
                Address
            </h4>
            <ul>
                <li v-for="contact in contactsList">
                    {{ contact }}
                </li>
                <li>
                    <ul class="flex">
                        <li>
                            <a href="#">
                                <i class="fa-brands fa-square-facebook fa-2x"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-brands fa-twitter fa-2x"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-brands fa-instagram fa-2x"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-brands fa-linkedin fa-2x"></i>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="right-section flex">
            <div class="left-list">
                <h4>
                    Explore
                </h4>
                <ul>
                    <li v-for="exploreEl in exploreList">
                        <a href="#">
                            {{ exploreEl }}
                        </a>
                    </li>
                </ul>
            </div>
            <div class="center-list">
                <ul>
                    <li v-for="infoFootEl in infoFooterList">
                        <a href="#">
                            {{ infoFootEl }}
                        </a>
                    </li>
                </ul>
            </div>
            <div class="right-list">
                <h4>
                    Information
                </h4>
                <ul>
                    <li v-for="informationEl in informationsList">
                        <a href="#">
                            {{ informationEl }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="copyright">
        <p>
            <i class="fa-regular fa-copyright"></i> 
            2020 Maxcoach. All Rights Reserved
        </p>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;

    div.container {
        justify-content: space-between;
        margin-bottom: 4rem;
    }

    h4 {
        padding-bottom: .5rem;
    }
    ul.flex li{
        padding-right: 1.5rem;
    }

    a{
        color: $subtitles-color;
    }

    div.right-section div{
        margin-right: 4rem;
    }

    div.center-list ul{
        padding-top: 1.75rem;
    }

    div.copyright{
        text-align: center;
        margin-bottom: 4rem;

        p{
            color: $subtitles-color;
        }
    }
</style>