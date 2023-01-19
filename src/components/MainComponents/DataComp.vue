<script>
export default {
    name: 'DataComp',

    data() {
        return {
            dataList: [
                {
                    number: '1.926',
                    text: 'finished sessions'
                },
                {
                    number: '3.092+',
                    text: 'enrolled learners'
                },
                {
                    number: '200',
                    text: 'online instruction'
                },
                {
                    number: '100%',
                    text: 'satisfaction rate'
                },
            ]
        }
    }
}
</script>

<template>
    <section class="data">
        <div class="container">
            <ul class="flex">
                <li v-for="dataEl in dataList">
                    <p class="num">
                        {{ dataEl.number }}
                    </p>
                    <p class="txt">
                        {{ dataEl.text }}
                    </p>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../styles/partials/variables' as *;

    section.data {
        background-color: $data-bg-color;
    }

    div.container ul {
        justify-content: center;
        text-align: center;

        li {
            padding: 3rem;
        }
    }

    p.num {
        color: $detail-color;
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    p.txt {
        text-transform: uppercase;
        font-weight: 500;
        color: $titles-color;
    }
</style>