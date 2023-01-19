<script>

export default {
    name: 'CoursesCard',

    props: {
        courseImage: String,
        teachImage: String,
        teachName: String,
        lesson: String,
        numberOfLessons: String,
        numberOfStudents: String,
        price: String,
    },

    data() {
        return {
            
        }
    },

    methods: {
        getImagePath: function(imgPath) {
            return new URL(`../../assets/images/${imgPath}`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="card">
        <div class="image-container">
            <img :src="getImagePath(courseImage)" alt="Course Image">
        </div>
        <div class="teacher flex flex-align-center">
            <div class="teacher-profile-image">
                <img :src="getImagePath(teachImage)" alt="Teacher profile image">
            </div>
            <span>
                {{ teachName }}
            </span>
        </div>
        <h5>
            {{ lesson }}
        </h5>
        <div class="info flex">
            <p>
                <i class="fa-regular fa-file-lines"></i>
                {{ numberOfLessons }}
                Lessons
            </p>
            <p>
                <i class="fa-regular fa-user"></i>
                {{ numberOfStudents }}
                Students
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../styles/partials/variables' as *;
    div.card {
        margin-right: 2rem;
        width: calc((100% / 3) - 2rem);
        margin-bottom: 3rem;

        &:nth-child(3n+3) {
            margin-right: 0;
        }

        div.image-container {
            width: 100%;

            img {
                width: 100%;
            }
        }

        div.teacher {
            padding: .5rem 1rem;

            div.teacher-profile-image {
                height: 30px;
                width: 30px;
                overflow-y: hidden;
                border-radius: 20px;

                img {
                    height: 100%;
                }
            }

            span {
                font-size: .6rem;
                color: $subtitles-color;
                margin-left: .5rem;
            }
        }
        
        h5 {
            font-size: 1rem;
            font-weight: 600;
            line-height: 1.7rem;
            padding: 0 1rem 1.5rem;
        }
        div.info {
            padding-left: 1rem;
            color: $subtitles-color;

            p {
                margin-right: 1rem;

                i {
                    margin-right: .3rem;
                }
            }

        }
    }
</style>