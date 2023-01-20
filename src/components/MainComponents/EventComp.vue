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
            <div class="events-cards flex">
                <EventCard v-for="event in store.eventsList"
                    :state="event.place"
                    :nation="event.nation"
                    :eventTitle="event.typeOfEvent"
                    :date="event.dayNumber"
                    :month="event.month"/>
            </div>
            <p>
                Excited about our event? 
                <a href="#">
                    View all events
                    <i class="fa-solid fa-arrow-right-long"></i>
                </a>
            </p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../styles/partials/variables' as *;

    section.events{
        margin-bottom: 5rem;

        h2{
            padding-bottom: 2rem;
        }

        div.events-cards {
            flex-wrap: wrap;
        }

        p{
            text-align: center;
            color: $subtitles-color;

            a{
                color: $detail-color;
                font-weight: 600;
                text-decoration: underline;
            }
        }
    }
</style>