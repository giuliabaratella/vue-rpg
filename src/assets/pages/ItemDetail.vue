<template>
    <div v-if="Item">
        <h1>{{ item.name }}</h1>
        <div class="w-25">
            <img :src="store.imagePath+item.img"  :alt="item.name">
        </div>
        <h6>{{ item.category }}</h6>
        <h6>{{ item.type }}</h6>
        <h6>{{ item.weight }}</h6>
        <h6>{{ item.cost }}</h6>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from "@/data/store";
export default {
    name: 'ItemDetails',
    data() {
        return {
            store,
            item: null
        }
    },
    methods: {
        getItemData() {
            axios.get(this.store.apiUrl+"/items/"+this.$route.params.slug).then((res)=>{
                // console.log(res.data);
                if(res.data.results) {
                    this.item = res.data.results
                }else{
                    this.$route.push({name: "not-found"})
                }
            })
        },
    },
    mounted() {
        this.getItemData();
    }
}
</script>

<style lang="scss" scoped></style>