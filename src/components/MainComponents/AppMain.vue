<script>
import JumboComp from './JumboComp.vue';
import BuildDreamComp from './BuildDreamComp.vue';
import CareerProspComp from './CareerProspComp.vue';
import DataComp from './DataComp.vue';
import LatestCoursesComp from './LatestCoursesComp.vue';

export default {
    name: 'AppMAin',

    components: {
        JumboComp,
        BuildDreamComp,
        CareerProspComp,
        DataComp,
        LatestCoursesComp,

    }
}
</script>

<template>
    <JumboComp />
    <BuildDreamComp />
    <CareerProspComp />
    <DataComp />
    <LatestCoursesComp />
</template>

<style lang="scss" scoped>
    
</style>