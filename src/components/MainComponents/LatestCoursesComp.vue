<script>
import { store } from '../../store';
import LatestCoursesCard from './LatestCoursesCard.vue';

export default {
    name: 'LatestCouresComp',

    components: {
        LatestCoursesCard,
    },

    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <section class="latest-courses">
        <div class="container">
            <h3>
                Choose where you'd like to begin
            </h3>
            <h2>
                Latest Featured <span>Courses</span>
            </h2>
        </div>
        <div class="cards-container container flex">
            <LatestCoursesCard v-for="courseInfoEl in store.courseInfoList" 
                :courseImage="courseInfoEl.image" 
                :teachImage="courseInfoEl.teacherProfileImage"
                :teachName="courseInfoEl.teacher"
                :lesson="courseInfoEl.title"
                :numberOfLessons="courseInfoEl.lessonsNumber"
                :numberOfStudents="courseInfoEl.studentsNumber"
                :price="courseInfoEl.price "/>
        </div>
        <div class="button">
            <button class="green-button">
                View all courses 
                <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../styles/partials/variables' as *;
    section.latest-courses {
        background-color: $sec-bg-color;
        margin-bottom: 5rem;
        padding-bottom: 2rem;
    }

    h2 {
        margin-bottom: 3rem;
    }
    div.cards-container {
        flex-wrap: wrap;
    }

    div.button {
        text-align: center;
    }

</style>