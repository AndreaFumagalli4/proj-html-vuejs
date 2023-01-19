<script>
import { store } from '../../store';
import EventCard from './EventCard.vue';

export default {
    name: 'EventComp',

    components: {
        EventCard
    },

    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <section class="events">
        <div class="container">
            <h3>
                Get in contact now
            </h3>
            <h2>
                Upcoming <span>Events</span>
            </h2>
            <div class="events-cards">
                <EventCard v-for="event in store.eventsList"
                    :state="event.place"
                    :nation="event.nation"
                    :eventTitle="event.typeOfEvent"
                    :date="event.dayNumber"
                    :month="event.month"/>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../styles/partials/variables' as *;

</style>