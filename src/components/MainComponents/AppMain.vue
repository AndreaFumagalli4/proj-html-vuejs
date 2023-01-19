<script>
import JumboComp from './JumboComp.vue';
import BuildDreamComp from './BuildDreamComp.vue';
import CareerProspComp from './CareerProspComp.vue';
import DataComp from './DataComp.vue';


export default {
    name: 'AppMAin',

    components: {
        JumboComp,
        BuildDreamComp,
        CareerProspComp,
        DataComp,

    }
}
</script>

<template>
    <JumboComp />
    <BuildDreamComp />
    <CareerProspComp />
    <DataComp />
</template>

<style lang="scss" scoped>
    
</style>