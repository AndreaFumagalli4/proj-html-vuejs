<script>
export default {
    name: 'EventCard',

    props: {
        state: String,
        nation: String,
        eventTitle: String,
        date: String,
        month: String
    },
}
</script>

<template>
    <div class="card flex">
        <div class="left-section">
            <p>
                <i class="fa-solid fa-location-dot"></i>
                {{ state }}, {{ nation }}
            </p>
            <h5>
                {{ eventTitle }}
            </h5>
        </div>
        <div class="right-section">
            <div class="date">
                {{ date }}
            </div>
            <div class="month">
                {{ month }}
            </div>
            <button class="green-button">
                Get ticket
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../styles/partials/variables' as *;

    div.card{
        background-color: $data-bg-color;
        justify-content: space-between;
        padding: 1rem;
        margin-right: 2rem;
        margin-bottom: 2rem;
        width: calc((100% / 2) - 2rem);
        
        div.left-section p{
            color: $subtitles-color;
            padding-bottom: .5rem;

            i{
                margin-right: .3rem;
            }
        }

        div.left-section h5{
            font-weight: 600;
        }

        div.right-section{
            text-align: center;
            div.date{
                font-size: 2.5rem;
                color: $detail-color;
            }
            div.month{
                text-transform: uppercase;
                font-size: .8rem;
                font-weight: 600;
                margin-bottom: 1rem;
            }

            button{
                padding: .5rem 2rem;
            }
        }

    }
</style>