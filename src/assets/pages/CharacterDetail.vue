<template>
    <div v-if="character">
        <main class="container">
            <div class="d-flex align-items-center justify-content-between py-3">
                <h1 class="me-3">{{ character.name }}</h1>
                <div class="bg-success">Life: {{ character.life }}</div>
            </div>
            <div class="w-100 mb-3">
                <img :src="store.imgPath + character.image" :alt="character.image">
            </div>

            <div class="card mb-3">
                <h3>Stats</h3>
                <div class="d-flex">
                    <h4>Att: {{ character.attack }}</h4>
                    <h4>Def: {{ character.defence }}</h4>
                    <h4>Speed: {{ character.speed }}</h4>
                </div>

            </div>


            <div class="d-flex column-gap-3 mb-3">
                <h4>Items:</h4>
                <div v-for="item in character.items" class="badge bg-success">
                    {{ item.name }}
                </div>
            </div>

        </main>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from "@/data/store";
export default {
    name: 'CharacterDetail',
    data() {
        return {
            character: null,
            store,
        }
    },
    methods: {
        getCharacterData() {
            axios.get(this.store.apiUrl + '/characters/' + this.$route.params.slug).then((res) => {
                // console.log(res.data);
                if (res.data.results) {
                    this.character = res.data.results;
                } else {
                    this.$router.push({ name: "not-found"});
                }
            })
        },
    },
    mounted() {
        this.getCharacterData();
    }

}
</script>

<style lang="scss" scoped></style>