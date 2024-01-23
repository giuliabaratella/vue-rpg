<template>
  <div v-if="type">
    <h1>Show Type</h1>
    <h3>{{ type.name }}</h3>
    <img :src="store.imagePath + type.img" :alt="type.name">
  </div>
</template>
  
<script>
import axios from "axios";
import { store } from "@/data/store";
export default {
  name: "TypeDetail",
  data() {
    return {
      store,
      type: null
    }
  },
  methods: {
    getTypeData() {
      axios.get(this.store.apiUrl + "/types/" + this.$route.params.slug).then((res) => {
        if (res.data.results) {
          this.type = res.data.results;
        } else {
          this.$router.push({name:"not-found"})
        }
      })
    },
  },
  mounted() {
    this.getTypeData();
  }
};
</script>
  
<style lang="scss" scoped></style>
  