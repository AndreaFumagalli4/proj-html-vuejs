<script>

export default {
    name: 'CareerProspCard',

    props: {
        infoTitle: String,
        infoText: String,
        isActive: Boolean,
        index: Number
    },

    methods: {

    }
}
</script>

<template>
    <div class="card">
        <div class="top-section flex" 
        :class="(isActive) ? 'bg-green' : ''" 
        @click="$emit('switchInfo', index)">
            <h5>
                {{ infoTitle }}
            </h5>
            <i v-if="(!isActive)" class="fa-regular fa-square-plus"></i>
            <i v-else class="fa-regular fa-square-minus"></i>
        </div>
        <div v-show="(isActive)" class="bottom-section">
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
            cursor: pointer;

            &:hover {
                background-color: $detail-color;
            }
        }

        div.bottom-section {
            padding: 1.5rem;
        }
    }
</style>