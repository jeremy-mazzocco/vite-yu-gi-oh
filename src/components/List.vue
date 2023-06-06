<script>
import { store } from "../store";
import Card from './Card.vue';

export default {
    name: "List",
    components: {
        Card
    },
    data() {
        return {
            store,
        }
    }
}
</script>


<template>
    <div class="row">
        <Card v-for="(card, idx) in store.dataList" :key="idx" :details="card" />
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partiarls/mixins.scss' as*;

.row {
    @include my-dislay-flex;
    gap: 10px 15px;
}
</style>
