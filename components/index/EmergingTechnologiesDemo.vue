<template>
    <section :class="`team__area ${style_2 ? 'pt-110 pb-110' : 'pt-115'}`">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xxl-8 col-xl-8 col-lg-9">
                    <div class="section__title-wrapper-7 text-center mb-60"><span class="section__title-pre-7">Our</span>
                        <h3 class="section__title-7"><span class="section__title-7-highlight">Emerging Technologies<svg
                                    width="240" height="22" viewBox="0 0 240 22" fill="none">
                                    <path class="wow" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M0.440833 21.1152C78.9497 6.16225 158.05 4.53412 235.949 13.8239C237.497 14.0088 239.796 12.4065 239.988 9.93474C240.181 7.4176 238.026 5.44088 236.474 5.2332C157.99 -5.31675 79.1936 0.359501 0.316568 19.7785C-0.184784 19.9023 -0.0511379 21.2092 0.440833 21.1152Z"
                                        fill="currentColor"></path>
                                </svg></span></h3>
                        <p>Customer satisfaction is our greatest achievement. We take pride in our commitment to excellence
                            and delivering exceptional service. Catch a glimpse of our customers' stories and the
                            exceptional experiences they've had with us.</p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xxl-12">
                    <div class="team__slider wow fadeInUp" data-sal="slide-up" data-sal-delay="130"
                        data-sal-duration="1200">
                        <swiper :slidesPerView="1" :autoplay="5000" :spaceBetween="30"
                            class="team__slider-active swiper-container" :loop="true" :modules="modules" :pagination="{
                                el: '.team-slider-dot',
                                clickable: true,
                            }" :breakpoints="{
    1200: {
        slidesPerView: 1,
    },
    992: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    576: {
        slidesPerView: 1,
    },
    0: {
        slidesPerView: 1,
    },
}">
                            <swiper-slide>
                                <section :class="`pricing__area p-relative z-index-1 black-bg-5 ${el_style ? 'pt-100 pb-50' : 'pt-80 pb-50'
                                    }`">
                                    <div class="pricing__shape">
                                        <img class="pricing__shape-1" src="~/assets/img/price/price-shape-1.png" alt="" />
                                    </div>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-xl-6 col-lg-6">
                                                <div class="about__wrapper-15 pl-45" data-sal="slide-up"
                                                    data-sal-delay="160" data-sal-duration="1000">
                                                    <div class="tp-section-wrapper-3 mb-25">
                                                        <h2 class="tp-section-title-3">
                                                            Big Data
                                                        </h2>
                                                        <p>Tame your big data through robust solutions that empower data
                                                            collection, storage, processing and analysis.</p>
                                                    </div>
                                                    <div
                                                        class="pricing__content-5-inner d-flex flex-column justify-content-between">
                                                        <div class="pricing__feature-5">
                                                            <p>Services we offer:</p>
                                                            <ul>
                                                                <li>Consulting and implementation</li>
                                                                <li>Support and evolution</li>
                                                                <li>Product UI/UX Design</li>
                                                                <li>Design System</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-6 col-lg-6">
                                                <div class="about__thumb-15 p-relative z-index-1 w-img" data-sal="slide-up"
                                                    data-sal-delay="130" data-sal-duration="1000">
                                                    <div class="about__thumb-15-shape">
                                                        <img src="~/assets/img/about/15/about-thumb-shape.png"
                                                            alt="shape" />
                                                    </div>
                                                    <img class="about__thumb-15-shape-2"
                                                        src="~/assets/img/about/15/about-thumb-shape-2.png" alt="" />
                                                    <img src="~/assets/img/about/15/about-img-1.jpg" alt="shape" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </section>
                            </swiper-slide>

                            <swiper-slide>
                                <section :class="`pricing__area p-relative z-index-1 black-bg-5 ${el_style ? 'pt-100 pb-50' : 'pt-80 pb-50'
                                    }`">
                                    <div class="pricing__shape">
                                        <img class="pricing__shape-1" src="~/assets/img/price/price-shape-1.png" alt="" />
                                    </div>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-xl-6 col-lg-6">
                                                <div class="about__wrapper-15 pl-45" data-sal="slide-up"
                                                    data-sal-delay="160" data-sal-duration="1000">
                                                    <div class="tp-section-wrapper-3 mb-25">
                                                        <h2 class="tp-section-title-3">
                                                            Big Data
                                                        </h2>
                                                        <p>Tame your big data through robust solutions that empower data
                                                            collection, storage, processing and analysis.</p>
                                                    </div>
                                                    <div
                                                        class="pricing__content-5-inner d-flex flex-column justify-content-between">
                                                        <div class="pricing__feature-5">
                                                            <p>Services we offer:</p>
                                                            <ul>
                                                                <li>Consulting and implementation</li>
                                                                <li>Support and evolution</li>
                                                                <li>Product UI/UX Design</li>
                                                                <li>Design System</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-6 col-lg-6">
                                                <div class="about__thumb-15 p-relative z-index-1 w-img" data-sal="slide-up"
                                                    data-sal-delay="130" data-sal-duration="1000">
                                                    <div class="about__thumb-15-shape">
                                                        <img src="~/assets/img/about/15/about-thumb-shape.png"
                                                            alt="shape" />
                                                    </div>
                                                    <img class="about__thumb-15-shape-2"
                                                        src="~/assets/img/about/15/about-thumb-shape-2.png" alt="" />
                                                    <img src="~/assets/img/about/15/about-img-1.jpg" alt="shape" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </section>
                            </swiper-slide>
                        </swiper>
                        <div class="team-slider-dot tp-swiper-dot text-center mt-50"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
// external
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, EffectFade } from "swiper";
// internal
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
    mixins: [
        SalScrollAnimationMixin
    ],
    props: {
        style_2: {
            type: Boolean,
            default: false
        },
        el_style: {
            type: Boolean,
            default: false
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Navigation, EffectFade],
        };
    },
};
</script>