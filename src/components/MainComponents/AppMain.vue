<script>
import JumboComp from './JumboComp.vue';
import BuildDreamComp from './BuildDreamComp.vue';
import CareerProspComp from './CareerProspComp.vue';
import DataComp from './DataComp.vue';
import LatestCoursesComp from './LatestCoursesComp.vue';
import GetStartedComp from './GetStartedComp.vue';
import MobileLearnComp from './MobileLearnComp.vue';
import EventComp from './EventComp.vue';
import ReviewComp from './ReviewComp.vue';

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
        EventComp,
        ReviewComp
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
    <EventComp />
    <ReviewComp />
</template>

<style lang="scss" scoped>
    
</style>