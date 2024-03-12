<template>
    <section :class="`brand__area wide-bg ${spacing ? '' : ''} ${el_style ? '' : ''
        }`">
        <div class="container-fluid g-0">
            <div class="row gx-0 gy-2">
                <div class="col-xxl-12">
                    <div :class="`services__area ${style_2 ? 'pt-100' : ''} ${el_style ? 'pt-110' : ''} `">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-xxl-8 col-xl-8 col-lg-9">
                                    <div class="section__title-wrapper-7 text-center mb-60">
                                        <h3 class="section__title-7"><span class="section__title-7-highlight">Our
                                                Clients
                                                <svg width="240" height="22" viewBox="0 0 240 22" fill="none">
                                                    <path class="wow" fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M0.440833 21.1152C78.9497 6.16225 158.05 4.53412 235.949 13.8239C237.497 14.0088 239.796 12.4065 239.988 9.93474C240.181 7.4176 238.026 5.44088 236.474 5.2332C157.99 -5.31675 79.1936 0.359501 0.316568 19.7785C-0.184784 19.9023 -0.0511379 21.2092 0.440833 21.1152Z"
                                                        fill="currentColor"></path>
                                                </svg></span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div :class="`brand__slider-5 ${square ? square : ''}`">
                        <div class="brand__slider-5">
                            <swiper class="brand__slider-active-5" :freeMode="true" :loop="true" :autoplay="{
        delay: 1,
        pauseOnMouseEnter: true,
    }" :slidesPerView="1" :centeredSlides="true" :centeredSlidesBounds="true" :speed="4000" :modules="modules"
                                :shortSwipes="false" :longSwipes="false" :allowTouchMove="false" :grabCursor="false"
                                :breakpoints="{
        '0': {
            slidesPerView: 2,
        },
        '576': {
            slidesPerView: 2,
        },
        '768': {
            slidesPerView: 4,
        },
        '991': {
            slidesPerView: 5,
        },
        '1200': {
            slidesPerView: 7,
        },
    }" v-if="partners !== null">
                                <swiper-slide v-for="slide in partners.partnerSlides" :key="slide.id">
                                    <div class="brand__item-5">
                                        <img :src="slide.image.data.attributes.url" alt="Variety Product">
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// external
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from 'swiper';
// internal
import axios from 'axios'

export default {
    components: { Swiper, SwiperSlide },
    data: () => ({
        partners: null,
    }),
    created: async function () {
        const response = await axios.get('https://cms.dotglobaltech.com/api/client?populate=partnerSlides.image')
        const { data: { attributes } } = response.data
        this.partners = attributes
    },
    props: {
        spacing: {
            type: Boolean,
            default: false,
        },
        style_2: {
            type: Boolean,
            default: false,
        },
        el_style: {
            type: Boolean,
            default: false,
        },
        square: {
            type: String,
            default: "",
        },
    },
    setup() {

        return {
            modules: [Autoplay],
        };
    },
    mounted() { },
};
</script>