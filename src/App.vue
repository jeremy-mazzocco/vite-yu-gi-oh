<script>
import { store } from './store';
import axios from 'axios';
import List from './components/List.vue';

export default {
  components: {
    List
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getApiData() {
      axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0")
        .then(reponse => {
          store.dataList = reponse.data.data;
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  created() {
    this.getApiData();
  }
}

</script>


<template>
  <header>
    <h2>
      Yu-Gi-Oh Api
    </h2>
  </header>
  <main>
    <div class="container">
      <select name="" id="">
        <option value="Alien">Alien</option>
      </select>
    </div>
    <div class="container" id="bcc-card">
      <List />
    </div>
  </main>
</template>


<style lang="scss">
@use './styles/layout.scss' as*;
@use './styles/partiarls/colors.scss' as*;

main {
  height: 100%;
  background-color: $bcc;

  .container {

    .select {
      margin: 10px 0px;
      padding: 4px;
      border-radius: 5px;
      width: 100px;
    }

  }

  #bcc-card {
    padding: 50px;
    background-color: white;
  }
}
</style>
