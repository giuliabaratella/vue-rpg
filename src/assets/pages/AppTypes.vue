<template>
    <div>

    </div>
</template>

<script>
    import axios from 'axios';
    import { store } from "../../data/store.js";

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
                    this.store.types = res.data.result.data;
                })
            },
        },

        mounted() {
            this.getAllTypes();
        }
    }
</script>

<style lang="scss" scoped>

</style>