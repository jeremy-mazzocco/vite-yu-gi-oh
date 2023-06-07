<script>
import { store } from "../store";

export default {
    name: "Card",
    props: {
        details: Object,
    },
    data() {
        return {
            store,
        }
    }
}

</script>


<template>
    <div class="card">
        <div class="img">
            <img :src="details.card_images[0].image_url">
        </div>
        <h3>
            {{ details.name }}
        </h3>
        <p>
            {{ store.selectedArchetype }}
        </p>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partiarls/colors.scss' as*;

.card {
    width: calc((100% / 5) - 15px);
    text-align: center;
    background-color: $bcc;

    h3 {
        color: white;
    }
}
</style>
