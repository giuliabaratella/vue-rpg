<template>
    <div class="continaer-fluid coming-bg">
        <div class="container">
            <Carousel  :itemsToShow="1.50" :wrapAround="true" :transition="500">
                <Slide v-for="slide in slideImgs" :key="slide">
                    <div class="carousel__item">
                        <img :src="slide.img" :alt="slide.title" />
                    </div>
                </Slide>
                <template #addons>
                    <Pagination/>
                    <Navigation>
                        <template #next id="right">
                            <img src="../images/arrow-right.png" alt="arraw-right">
                        </template>
                        <template #prev>
                            <img src="../images/arrow-left.png" alt="arraw-left">
                        </template>
                    </Navigation>
                </template>
            </Carousel>
        </div>
    </div>
</template>
  
<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    name: 'ComingCarouselComponent',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation
    },
    data() {
        return {
            slideImgs: [
                {
                    img: '../../../public/images/carousel_comingsoon_1.jpg',
                    title: 'Coming-Soon-01',
                },
                {
                    img: '../../../public/images/carousel_comingsoon_2.jpg',
                    title: 'Coming-Soon-02',
                },
                {
                    img: '../../../public/images/carousel_comingsoon_3.jpg',
                    title: 'Coming-Soon-03',
                },
                {
                    img: '../../../public/images/carousel_comingsoon_4.jpg',
                    title: 'Coming-Soon-04',
                }
                
            ]
        }
    },
})
</script>
  
<style lang="scss" scoped>
.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
    transform: rotateY(13.5deg) scale(0.95);
}

.carousel__slide--prev {
    opacity: 1;
    filter: brightness(60%);
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    opacity: 1;
    filter: brightness(60%);
    transform: rotateY(10deg) scale(0.85);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.10);
}


.coming-bg {
    background-image: url(../images/bg-coming-soon.jpg);
    background-size: contain;
}



</style>
  