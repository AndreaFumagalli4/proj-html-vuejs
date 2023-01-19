<script>
import JumboComp from './JumboComp.vue';
import BuildDreamComp from './BuildDreamComp.vue';
import CareerProspComp from './CareerProspComp.vue';
import DataComp from './DataComp.vue';
import LatestCoursesComp from './LatestCoursesComp.vue';
import GetStartedComp from './GetStartedComp.vue';

export default {
    name: 'AppMAin',

    components: {
        JumboComp,
        BuildDreamComp,
        CareerProspComp,
        DataComp,
        LatestCoursesComp,
        GetStartedComp,

    }
}
</script>

<template>
    <JumboComp />
    <BuildDreamComp />
    <CareerProspComp />
    <DataComp />
    <LatestCoursesComp />
    <GetStartedComp />
</template>

<style lang="scss" scoped>
    
</style>