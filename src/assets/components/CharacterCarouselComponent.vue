<template>
    <section class="container-fluid carousel-bg">
        <div class="container">
            <div class="section-label mt-2">
                <img src="../images/rpg_logo_high_white.png" alt="logo" />
                <h3 class="pe-2">Most Rated Characters</h3>
            </div>
            <Carousel id="slidecarousel" :wrap-around="true" :itemsToShow="1" :transition="500">
                <Slide v-for="(character, index) in store.carouselCharacter" :key="index">
                    <div class="row align-items-center align-content-center">
                        <div class="col-lg-6 d-flex flex-column align-items-center slide">
                            <h2>
                                {{ character.name }}
                            </h2>
                            <div class="d-flex align-items-center pb-4">
                                <h3 class="me-3">
                                    Class:
                                </h3>
                                <div>
                                    <img :src="store.imagePath + character.type.img" :alt="character.type.name">
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
                            <div class="py-4 w-50 mb-4">
                                <p>
                                    {{ characterVideo[index].plot }}
                                </p>
                            </div>
                            <div class="mt-4 video-wrapper">
                                <video width="400px" :src="characterVideo[index].video" autoplay no-controls muted loop>
                                </video>
                            </div>
                        </div>
                        <div class=" col-lg-6">
                            <div class="portrait-wrapper my-5 overflow-hidden rounded-3">
                                <img :src="store.imagePath + character.img" :alt="character.name">
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
                    plot: 'Captain of the knightly Order of the White Dragons. Despite his youth, he is more than capable of leading the forces of an entire kingdom.'
                },
                {
                    video: '/images/sorcerer-demo.mp4',
                    title: 'sorcerer-demo',
                    plot: "Don't let her small size fool you. This young mage is eager to showcase her impressive talent. She vows to bring her skills to the world."

                },
                {
                    video: '/images/ranger-demo.mp4',
                    title: 'ranger-demo',
                    plot: 'A man of valor and kindness, he pours his heart and soul into protecting his homeland, the poor ones, his friends, and his comrades-in-arms.'

                },
                {
                    video: '/images/barbarian-demo.mp4',
                    title: 'barbarian-demo',
                    plot: 'This towering Draph warrior belongs to an organization which hunts primal beasts. He has formed a contract with the Great Scythe Grynoth.'

                },
                {
                    video: '/images/rogue-demo.mp4',
                    title: 'rogue-demo',
                    plot: 'Born to a clan renowned for their mastery of all forms of martial arts, this swordswoman trains every day in order to reach even greater heights.'

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
}

.portrait-wrapper {
    width: 68%;
}

@media screen and (max-width: 1199px) {

    .video-wrapper {
        display: none;
    }

    .portrait-wrapper {
        width: 300px;
        margin: auto;
    }
}
</style>
  