<script>

export default {
    name: 'CareerProspCard',

    props: {
        infoTitle: String,
        infoText: String
    },

    data() {
        return {
            
        }
    }
}
</script>

<template>
    <div class="card">
        <div class="top-section flex">
            <h5>
                {{ infoTitle }}
            </h5>
            <i class="fa-regular fa-square-plus"></i>
            <i class="fa-regular fa-square-minus"></i>
        </div>
        <div class="bottom-section">
            <p>
                {{ infoText }}
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../styles/partials/variables' as *;
    div.card {
        margin-bottom: 1rem;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        div.top-section {
            padding: 1rem;
            justify-content: space-between;
            
            i.fa-square-minus {
                display: none;
            }
        }

        div.bottom-section {
            padding: 1rem;
            display: none;
        }
    }
</style>