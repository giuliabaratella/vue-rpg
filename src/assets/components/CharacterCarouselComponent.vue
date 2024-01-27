<template>
    <section class="container-fluid carousel-bg">
        <div class="container">
            <div class="section-label mt-2">
                <img src="../images/rpg_logo_high_white.png" alt="logo" />
                <h3>Characters</h3>
            </div>
            <Carousel id="slidecarousel" :wrap-around="true" :itemsToShow="1" :transition="500">
                <Slide v-for="(character,index) in store.carouselCharacter" :key="index">
                    <div class="row align-items-center bg align-content-center ">
                        <div class="col-lg-6 d-flex flex-column align-items-center slide">
                            <h2>
                                {{ character.name }}
                            </h2>
                            <div class="d-flex align-items-center pb-4">
                                <h3 class="me-3">
                                    Class:
                                </h3>
                                <div>
                                    <img :src="store.imagePath+character.type.img" :alt="character.type.name">
                                </div>
                            </div>
                            <div class="d-flex align-items-center pt-5">
                                <h4 class="me-3">
                                    Items:
                                </h4>
                                <div v-for="item in character.items" class="item-portrait me-3 overflow-hidden rounded-3">
                                    <img :src="store.imagePath + item.img" :alt="item.name" />
                                </div>
                            </div>
                            <div class="py-4 w-75 mb-5">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maiores iusto eligendi hic vel, beatae labore sapiente facere aspernatur doloremque.</p>
                            </div>
                            <div class="mt-4">
                                <video width="400px" :src="characterVideo[index].video" autoplay no-controls muted loop >
                                </video>
                            </div>
                        </div>
                        <div class=" col-lg-6 ">
                            <div class="mx-5 portrait-wrapper my-5 overflow-hidden rounded-3">
                                <img :src="store.imagePath+character.img" :alt="character.name">
                            </div>
                        </div>
                    </div>
                </Slide>




                <template #addons>
                    <Navigation>
                        <template #next>
                            <img src="../images/arrow-right.png" alt="arraw-right">
                        </template>
                        <template #prev>
                            <img src="../images/arrow-left.png" alt="arraw-left">
                        </template>
                    </Navigation>
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

#slidecarousel {
    
    h2 {
        font-size: 3rem !important;
    }

    h3 {
        font-size: 2.3rem !important;
    }

    p {
        font-size: 1.7rem !important;
    }

    .item-portrait {
        width: 60px;
        height: 60px;
    }

}


.carousel-bg {
    background-image: url("../images/carousel-bg.png");
    background-repeat: no-repeat;
    background-size: 90%;
    background-position: bottom;

}

.carousel__item {
    color: var(--vc-clr-white);
    border-radius: 8px;
}

.carousel__slide {
    padding: 10px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}

.portrait-wrapper {
    width: 68%;
}


</style>
  