<script>
import { store } from "../store";

export default {
    name: "Select",

    data() {
        return {
            store,
        }
    }
}
</script>


<template>
    <select @change="$emit('myArchetype')" v-model="store.selectedArchetype">
        <option v-for="archet in store.dataArchetype" :value="archet.archetype_name">{{
            archet.archetype_name }}</option>
    </select>
</template>


<style lang="scss" scoped>
select {
    padding: 5px;
    width: 100px;
    margin: 20px 0px;
}
</style>
