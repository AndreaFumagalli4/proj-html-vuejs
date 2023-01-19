<script>
import { store } from '../../store';
import CoursesCard from './CoursesCard.vue';

export default {
    name: 'LatestCouresComp',

    components: {
        CoursesCard,
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
            <CoursesCard v-for="courseInfoEl in store.courseInfoList" 
                :courseImage="courseInfoEl.image" 
                :teachImage="courseInfoEl.teacherProfileImage"
                :teachName="courseInfoEl.teacher"
                :lesson="courseInfoEl.title"
                :numberOfLessons="courseInfoEl.lessonsNumber"
                :numberOfStudents="courseInfoEl.studentsNumber"
                :price="courseInfoEl.price "/>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../styles/partials/variables' as *;

    h2 {
        margin-bottom: 3rem;
    }
    div.cards-container {
        flex-wrap: wrap;
    }
</style>