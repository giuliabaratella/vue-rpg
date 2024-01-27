<template>
    <section class="container-fluid carousel-bg">
        <div class="container">
            <div class="section-label mb-5">
                <img src="../images/rpg_logo_high_white.png" alt="logo" />
                <h3>Characters</h3>
            </div>
            <Carousel :wrap-around="true">
                <Slide  v-for="(character,index) in store.carouselCharacter" :key="index">
                    <div class="carousel__item">
                        {{ character.name }}
                        <div class="character-portrait">
                            <img :src="store.imagePath+character.img" :alt="character.name">
                        </div>
                        {{ character.type.img }}
                    </div>
                    <div>
                        <video :src="characterVideo[index].video" autoplay no-controls muted loop >
                        </video>
                    </div>
                </Slide>
                <template #addons>
                    <Navigation />
                    <Pagination />
                </template>
            </Carousel>
        </div>
    </section>
</template>
  
<script>
import { store } from '@/data/store'
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    name: 'CharacterCarouselComponent',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data() {
        return {
            store,
            characterVideo: [
                {
                    video: '/images/paladin-demo.mp4',
                    title: 'paladin-demo',
                },
                {
                    video: '/images/sorcerer-demo.mp4',
                    title: 'sorcerer-demo',
                },
                {
                    video: '/images/ranger-demo.mp4',
                    title: 'ranger-demo',
                },
                {
                    video: '/images/barbarian-demo.mp4',
                    title: 'barbarian-demo',
                },
                {
                    video: '/images/rogue-demo.mp4',
                    title: 'rogue-demo',
                }

            ],
        }
    },
    
})
</script>
  
<style>
.carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__slide {
    padding: 10px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}

.character-portrait {
    width: 300px;
}
</style>
  