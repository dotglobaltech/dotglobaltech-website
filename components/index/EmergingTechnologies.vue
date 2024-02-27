<template>
    <section :class="`team__area ${style_2 ? 'pt-100 pb-110' : 'pb-50 pt-50'}`">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xxl-10 col-xl-10 col-lg-10">
                    <div class="section__title-wrapper-7 text-center mb-60"><span class="section__title-pre-7">Our</span>
                        <h3 class="section__title-7"><span class="section__title-7-highlight">Emerging Technologies<svg
                                    width="240" height="22" viewBox="0 0 240 22" fill="none">
                                    <path class="wow" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M0.440833 21.1152C78.9497 6.16225 158.05 4.53412 235.949 13.8239C237.497 14.0088 239.796 12.4065 239.988 9.93474C240.181 7.4176 238.026 5.44088 236.474 5.2332C157.99 -5.31675 79.1936 0.359501 0.316568 19.7785C-0.184784 19.9023 -0.0511379 21.2092 0.440833 21.1152Z"
                                        fill="currentColor"></path>
                                </svg></span></h3>
                        <p>Embark on the future with our implementation of cutting-edge emerging technologies. From
                            artificial intelligence and blockchain to the Internet of Things and beyond, we leverage the
                            latest innovations to propel your business into new realms of efficiency and competitiveness.
                            Explore a transformative journey with the technologies that define tomorrow.</p>
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
                                                    <div class="tp-section-wrapper-3-big mb-25">
                                                        <h2 class="tp-section-title-3-big">
                                                            Big Data
                                                        </h2>
                                                        <p>We specialize in processing vast datasets, extracting valuable
                                                            insights for informed decision-making. From integration to
                                                            advanced analytics, our services empower businesses to navigate
                                                            big data complexities.</p>
                                                    </div>
                                                    <div
                                                        class="pricing__content-5-inner d-flex flex-column justify-content-between">
                                                        <div class="pricing__feature-5-big">
                                                            <p>Services we offer:</p>
                                                            <ul>
                                                                <li><nuxt-link href="/">Consulting and
                                                                        implementation</nuxt-link></li>
                                                                <li><nuxt-link href="/">Data governance</nuxt-link></li>
                                                                <li><nuxt-link href="/">Support and evolution</nuxt-link>
                                                                </li>
                                                                <li><nuxt-link href="/">Data security</nuxt-link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-6 col-lg-6">
                                                <div class="about__thumb-15 p-relative z-index-1 w-img" data-sal="slide-up"
                                                    data-sal-delay="130" data-sal-duration="1000">
                                                    <img src="~/assets/img/home/bigdata.png" alt="shape" />
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
                                                    <div class="tp-section-wrapper-3-big mb-25">
                                                        <h2 class="tp-section-title-3-big">
                                                            Artificial Intelligence
                                                        </h2>
                                                        <p>Harnessing the power of AI, we offer innovative solutions that
                                                            optimize processes, drive efficiency, and unlock new
                                                            possibilities. Our services are tailored to transform your
                                                            operations and propel you into the future of intelligent
                                                            business solutions.</p>
                                                    </div>
                                                    <div
                                                        class="pricing__content-5-inner d-flex flex-column justify-content-between">
                                                        <div class="pricing__feature-5-big">
                                                            <p>Services we offer:</p>
                                                            <ul>
                                                                <li><nuxt-link href="/">Machine learning (including deep
                                                                        learning)</nuxt-link></li>
                                                                <li><nuxt-link href="/">Natural language
                                                                        processing</nuxt-link></li>
                                                                <li><nuxt-link href="/">Robotics</nuxt-link></li>
                                                                <li><nuxt-link href="/">Image recognition</nuxt-link></li>
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
                                                    <div class="tp-section-wrapper-3-big mb-25">
                                                        <h2 class="tp-section-title-3-big">
                                                            Computer Vision
                                                        </h2>
                                                        <p>We deploy cutting-edge technologies to empower machines to
                                                            interpret and understand the visual world. From image
                                                            recognition to object detection, our services redefine
                                                            possibilities, enabling businesses to extract meaningful
                                                            insights and enhance decision-making through the lens of
                                                            advanced visual analytics.</p>
                                                    </div>
                                                    <div
                                                        class="pricing__content-5-inner d-flex flex-column justify-content-between">
                                                        <div class="pricing__feature-5-big">
                                                            <p>Services we offer:</p>
                                                            <ul>
                                                                <li><nuxt-link href="/">Detection of visual defects and
                                                                        anomalies</nuxt-link></li>
                                                                <li><nuxt-link href="/">Barcode verification and
                                                                        validation</nuxt-link></li>
                                                                <li><nuxt-link href="/">Recognition of item location and
                                                                        positioning</nuxt-link></li>
                                                                <li><nuxt-link href="/">3D modelling and mapping</nuxt-link>
                                                                </li>
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
                                                    <div class="tp-section-wrapper-3-big mb-25">
                                                        <h2 class="tp-section-title-3-big">
                                                            Internet Of Things
                                                        </h2>
                                                        <p>Explore the transformative impact of our tailored IoT solutions.
                                                            Embrace the future of connected possibilities with our Internet
                                                            of Things (IoT) services. We specialize in creating intelligent
                                                            ecosystems that seamlessly link devices and data for
                                                            unprecedented insights and control. </p>
                                                    </div>
                                                    <div
                                                        class="pricing__content-5-inner d-flex flex-column justify-content-between">
                                                        <div class="pricing__feature-5-big">
                                                            <p>Services we offer:</p>
                                                            <ul>
                                                                <li><nuxt-link href="/">IoT consulting</nuxt-link></li>
                                                                <li><nuxt-link href="/">IoT analytics</nuxt-link></li>
                                                                <li><nuxt-link href="/">IoT solution deployment </nuxt-link>
                                                                </li>
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
                                                    <div class="tp-section-wrapper-3-big mb-25">
                                                        <h2 class="tp-section-title-3-big">
                                                            Blockchain
                                                        </h2>
                                                        <p> We provide secure and decentralized solutions that revolutionize
                                                            business operations and information exchange. From smart
                                                            contracts to distributed ledger technology, our services
                                                            leverage blockchain to enhance security, streamline processes,
                                                            and create a foundation for innovative, tamper-proof systems..
                                                        </p>
                                                    </div>
                                                    <div
                                                        class="pricing__content-5-inner d-flex flex-column justify-content-between">
                                                        <div class="pricing__feature-5-big">
                                                            <p>Services we offer:</p>
                                                            <ul>
                                                                <li><nuxt-link href="/">Blockchain-based product development
                                                                        for product companies</nuxt-link></li>
                                                                <li><nuxt-link href="/">Blockchain consulting and
                                                                        implementation for non-IT enterprises</nuxt-link>
                                                                </li>
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
                                                    <div class="tp-section-wrapper-3-big mb-25">
                                                        <h2 class="tp-section-title-3-big">
                                                            Mixed Reality
                                                        </h2>
                                                        <p>Explore the endless possibilities of Mixed Reality as we
                                                            transform your ideas into captivating, interactive realities.
                                                            From augmented to virtual reality, our services push the limits
                                                            of innovation, offering solutions that enhance training,
                                                            visualization, and engagement. .</p>
                                                    </div>
                                                    <div
                                                        class="pricing__content-5-inner d-flex flex-column justify-content-between">
                                                        <div class="pricing__feature-5-big">
                                                            <p>Services we offer:</p>
                                                            <ul>
                                                                <li><nuxt-link href="/">Virtual Reality
                                                                        development</nuxt-link></li>
                                                                <li><nuxt-link href="/">Augmented Reality
                                                                        development</nuxt-link></li>
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