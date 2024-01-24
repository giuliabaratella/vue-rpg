<template>
    <div v-if="character">
        <main class="container py-5">
            <div class="row character-card p-3 mb-5">
                <div class="col-12 d-flex align-items-center justify-content-between py-3">
                    <h1 class="me-3">{{ character.name }}</h1>
                </div>
                <div class="col-12 col-md-3">
                    <img :src="store.imagePath + character.img" :alt="character.image">
                </div>
                <div class="col-12 col-md-4">
                    <h3>Stats</h3>
                    <div class="d-flex column-gap-3 mb-3">
                        <h4>Att: {{ character.attack }}</h4>
                        <h4>Def: {{ character.defence }}</h4>
                        <h4>Speed: {{ character.speed }}</h4>
                        <h4>Life: {{ character.life }}</h4>
                    </div>
                    <div>
                        <h4>Items:</h4>
                        <div class="d-flex column-gap-3">
                            <div v-for="item in character.items" class="item-box mb-3">
                                <router-link :to="{ name: 'single-item', params: { slug: item.slug } }">
                                    <img :src="store.imagePath+item.img" :alt="item.name">
                                </router-link>
                               
                            </div>
                        </div>
                    </div>
                    <div>{{ character.description }}</div>

                </div>
                
            </div>
            <div class="text-center">
                <button>
                    <router-link :to="{ name: 'characters'}">
                        Back to Characters
                    </router-link>
                </button>
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

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.character-card{
    border: 1px solid $color-primary;
    border-radius: 20px;
    .item-box{
        width: 200px;
        border: 1px solid $color-primary;
        &:hover{
        transition: all 0.3s;
        filter: brightness(70%);
        transform: scale(1.05);
    }
    }
}
a{
    text-decoration: none;
    color: $color-black;
}
</style>