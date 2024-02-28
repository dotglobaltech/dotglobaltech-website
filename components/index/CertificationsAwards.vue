<template>
    <section :class="`brand__area wide-bg pt-100 pb-100 ${spacing ? '' : ''} ${el_style ? '' : ''
        }`">
        <div class="container-fluid g-0">
            <div v-if="el_style" class="row gx-0">
                <div class="col-xxl-12">
                    <div class="tp-section-wrapper-3 mb-60 text-center">
                        <span class="tp-section-subtitle-3">Modern & Clean Design</span>
                        <h3 class="tp-section-title-3">Brand Rounded Slider</h3>
                    </div>
                </div>
            </div>
            <div class="row gx-0 gy-2">
                <div class="col-xxl-12">
                    <div :class="`services__area ${style_2 ? 'pt-120' : ''} ${el_style ? 'pt-110' : ''} `">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-xxl-8 col-xl-8 col-lg-9">
                                    <div class="section__title-wrapper-7 text-center mb-60">
                                        <h3 class="section__title-7"><span class="section__title-7-highlight">Our Wide
                                                Variety of Products
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
                            }" :slidesPerView="1" :centeredSlides="true" :centeredSlidesBounds="true" :speed="4000"
                                :modules="modules" :shortSwipes="false" :longSwipes="false" :allowTouchMove="false"
                                :grabCursor="false" :breakpoints="{
                                    '0': {
                                        slidesPerView: 1,
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
                                }">
                                <swiper-slide v-for="(brand, i) in brand_1_data" :key="i">
                                    <div class="brand__item-5">
                                        <img :src="brand.brand" alt="brand" />
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
import brand_1 from "~/assets/img/brand/5/apache.png";
import brand_2 from "~/assets/img/brand/5/dell-technologies-logo.png";
import brand_3 from "~/assets/img/brand/5/googlecloudlogo.png";
import brand_4 from "~/assets/img/brand/5/microsoft-logo.png";
import brand_5 from "~/assets/img/brand/5/nutanix-logo.png";
import brand_6 from "~/assets/img/brand/5/vmware.png";
import brand_7 from "~/assets/img/brand/5/red-hat-logo.png";
import brand_8 from "~/assets/img/brand/5/ibm_logo.png";
import brand_9 from "~/assets/img/brand/5/cisco_logo.png";
import brand_10 from "~/assets/img/brand/5/hp_logo.png";
import brand_11 from "~/assets/img/brand/5/att-business-logo.png";



export default {
    components: { Swiper, SwiperSlide },
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
    data() {
        return {
            brand_1_data: [
                { brand: brand_1 },
                { brand: brand_2 },
                { brand: brand_3 },
                { brand: brand_4 },
                { brand: brand_5 },
                { brand: brand_6 },
                { brand: brand_7 },
                { brand: brand_8 },
                { brand: brand_9 },
                { brand: brand_10 },
                { brand: brand_11 },
            ],
            brand_2_data: [
                { brand: brand_1 },
                { brand: brand_2 },
                { brand: brand_3 },
                { brand: brand_4 },
                { brand: brand_5 },
                { brand: brand_6 },
                { brand: brand_7 },
                { brand: brand_8 },
                { brand: brand_9 },
                { brand: brand_10 },
                { brand: brand_11 },
            ],
        };
    },
    setup() {

        return {
            modules: [Autoplay],
        };
    },
    mounted() { },
};
</script>