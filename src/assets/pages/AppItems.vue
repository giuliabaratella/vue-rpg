<template>
    <main>
        <ul>
            <li v-for="item in this.store.items">
                <router-link :to="{ name: 'single-item', params: { slug: item.slug } }" class="link">
                    {{ item.name }}
                </router-link>
            </li>
        </ul>
    </main>
</template>

<script>
import axios from 'axios';
import { store } from "@/data/store";

export default {
    name: 'AppItems',
    data() {
        return {
            store
        }
    },
    methods: {
        getAllItems() {
            axios.get(store.apiUrl + '/items').then((res) => {
                console.log(res.data);
                this.store.items = res.data.results;
            })
        },
    },
    mounted() {
        this.getAllItems();
    }
}
</script>

<style lang="scss" scoped></style>