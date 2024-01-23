<template>
    <div v-for="types in store.types">
        <h1>{{ types.name }}</h1>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '@/data/store';

export default {
    name: "AppTypes",

    components: {

    },

    data() {
        return {
            store,
        };
    },

    methods: {
        getAllTypes() {
            axios
                .get(store.apiUrl + "/types").then((res) => {
                    console.log(res.data);
                    this.store.types = res.data.results;
                })
        },
    },

    mounted() {
        this.getAllTypes();
    }
}
</script>

<style lang="scss" scoped></style>