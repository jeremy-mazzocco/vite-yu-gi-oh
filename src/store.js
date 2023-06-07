import { reactive } from 'vue'

export const store = reactive({
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=1000&offset=0",
    apiArchetypeName: "https://db.ygoprodeck.com/api/v7/archetypes.php?",
    dataList: [],
    dataArchetype: [],
    selectedArchetype: '',
    loading: true

});