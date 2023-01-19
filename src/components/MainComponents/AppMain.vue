<script>
import JumboComp from './JumboComp.vue';
import BuildDreamComp from './BuildDreamComp.vue';
import CareerProspComp from './CareerProspComp.vue';
import DataComp from './DataComp.vue';
import LatestCoursesComp from './LatestCoursesComp.vue';
import GetStartedComp from './GetStartedComp.vue';
import MobileLearnComp from './MobileLearnComp.vue';

export default {
    name: 'AppMAin',

    components: {
        JumboComp,
        BuildDreamComp,
        CareerProspComp,
        DataComp,
        LatestCoursesComp,
        GetStartedComp,
        MobileLearnComp,
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
    <MobileLearnComp />
</template>

<style lang="scss" scoped>
    
</style>