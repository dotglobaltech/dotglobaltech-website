<template>
  <section :class="`blog__area fix pb-70 ${style_2 ? 'blog__style-2 pt-90' : 'pt-100'
    }`">
    <div class="container">
      <div v-if="!style_2" class="row align-items-center">
        <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-7 col-sm-8">
          <div class="section__title-wrapper-4 mb-60">
            <span class="section__title-pre-4">OUR</span>
            <h3 class="section__title-4">Top-Notch Global Brands</h3>
            <p>DGT Offers services, including implementation, customization, integration, up-gradation, and migrations.
            </p>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-5 col-sm-4">
          <div class="blog__nav text-sm-end d-none d-sm-block">
            <button class="blog-slider-button-prev">
              <i class="fa-light fa-angle-left"></i>
            </button>
            <button class="blog-slider-button-next">
              <i class="fa-light fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div v-if="style_2" class="row align-items-center">
        <div class="col-xxl-4 col-xl-4 col-lg-7 col-md-5 col-sm-4">
          <div class="blog__nav text-sm-end d-none d-sm-block">
            <button class="blog-slider-button-prev">
              <i class="fa-light fa-angle-left"></i>
            </button>
            <button class="blog-slider-button-next">
              <i class="fa-light fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div class="blog__slider">
            <Swiper :slidesPerView="5" class="blog__slider-active swiper-container" :spaceBetween="30" :loop="true"
              :centeredSlides="false" :modules="modules" :autoplay="{
                delay: 1000,
              }" :pagination="{
  el: '.blog-slider-4',
}" :navigation="{
  nextEl: '.blog-slider-button-next',
  prevEl: '.blog-slider-button-prev',
}" :breakpoints="{
  1400: {
    slidesPerView: 4,
  },
  1200: {
    slidesPerView: 4,
    centeredSlides: false,
  },
  992: {
    slidesPerView: 2,
    centeredSlides: false,
  },
  768: {
    slidesPerView: 2,
    centeredSlides: false,
  },
  576: {
    slidesPerView: 1,
    centeredSlides: false,
  },
  0: {
    slidesPerView: 1,
    centeredSlides: false,
  },
}">
              <SwiperSlide class="">
                <div class="features__item-7 text-center white-bg">
                  <div class="features__icon-17">
                    <span>
                      <img src="~/assets/img/home/bmc.svg" alt="Top-Notch Global Brands" />
                    </span>
                  </div>
                  <div class="features__content-7">
                    <h3 class="features__title-7">BMC</h3>
                    <div class="pricing__feature-5">
                      <ul>
                        <li>BMC Helix ITSM</li>
                        <li>BMC Remedyforce</li>
                        <li>BMC Helix Discovery</li>
                        <li>BMC TrueSight</li>
                        <li>BMC Control-M</li>
                        <li>BMC Smart Reporting</li>
                        <li>BMC Client Management</li>
                        <li>BMC Helix DWP</li>
                        <li>BMC BladeLogic</li>
                        <li>BMC Training</li>
                      </ul>
                    </div>
                    <div class="features__btn-7">
                      <nuxt-link href="/" class="tp-link-btn-3">
                        Read More
                        <span>
                          <i class="fa-regular fa-arrow-right"></i>
                        </span>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide class="">
                <div class="features__item-7 text-center white-bg">
                  <div class="features__icon-17">
                    <span>
                      <img src="~/assets/img/home/bmc.svg" alt="Top-Notch Global Brands" />
                    </span>
                  </div>
                  <div class="features__content-7">
                    <h3 class="features__title-7">BMC</h3>
                    <div class="pricing__feature-5">
                      <ul>
                        <li>BMC Helix ITSM</li>
                        <li>BMC Remedyforce</li>
                        <li>BMC Helix Discovery</li>
                        <li>BMC TrueSight</li>
                        <li>BMC Control-M</li>
                        <li>BMC Smart Reporting</li>
                        <li>BMC Client Management</li>
                        <li>BMC Helix DWP</li>
                        <li>BMC BladeLogic</li>
                        <li>BMC Training</li>
                      </ul>
                    </div>
                    <div class="features__btn-7">
                      <nuxt-link href="/" class="tp-link-btn-3">
                        Read More
                        <span>
                          <i class="fa-regular fa-arrow-right"></i>
                        </span>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide class="">
                <div class="features__item-7 text-center white-bg">
                  <div class="features__icon-17">
                    <span>
                      <img src="~/assets/img/home/bmc.svg" alt="Top-Notch Global Brands" />
                    </span>
                  </div>
                  <div class="features__content-7">
                    <h3 class="features__title-7">BMC</h3>
                    <div class="pricing__feature-5">
                      <ul>
                        <li>BMC Helix ITSM</li>
                        <li>BMC Remedyforce</li>
                        <li>BMC Helix Discovery</li>
                        <li>BMC TrueSight</li>
                        <li>BMC Control-M</li>
                        <li>BMC Smart Reporting</li>
                        <li>BMC Client Management</li>
                        <li>BMC Helix DWP</li>
                        <li>BMC BladeLogic</li>
                        <li>BMC Training</li>
                      </ul>
                    </div>
                    <div class="features__btn-7">
                      <nuxt-link href="/" class="tp-link-btn-3">
                        Read More
                        <span>
                          <i class="fa-regular fa-arrow-right"></i>
                        </span>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide class="">
                <div class="features__item-7 text-center white-bg">
                  <div class="features__icon-17">
                    <span>
                      <img src="~/assets/img/home/bmc.svg" alt="Top-Notch Global Brands" />
                    </span>
                  </div>
                  <div class="features__content-7">
                    <h3 class="features__title-7">BMC</h3>
                    <div class="pricing__feature-5">
                      <ul>
                        <li>BMC Helix ITSM</li>
                        <li>BMC Remedyforce</li>
                        <li>BMC Helix Discovery</li>
                        <li>BMC TrueSight</li>
                        <li>BMC Control-M</li>
                        <li>BMC Smart Reporting</li>
                        <li>BMC Client Management</li>
                        <li>BMC Helix DWP</li>
                        <li>BMC BladeLogic</li>
                        <li>BMC Training</li>
                      </ul>
                    </div>
                    <div class="features__btn-7">
                      <nuxt-link href="/" class="tp-link-btn-3">
                        Read More
                        <span>
                          <i class="fa-regular fa-arrow-right"></i>
                        </span>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide class="">
                <div class="features__item-7 text-center white-bg">
                  <div class="features__icon-17">
                    <span>
                      <img src="~/assets/img/home/bmc.svg" alt="Top-Notch Global Brands" />
                    </span>
                  </div>
                  <div class="features__content-7">
                    <h3 class="features__title-7">BMC</h3>
                    <div class="pricing__feature-5">
                      <ul>
                        <li>BMC Helix ITSM</li>
                        <li>BMC Remedyforce</li>
                        <li>BMC Helix Discovery</li>
                        <li>BMC TrueSight</li>
                        <li>BMC Control-M</li>
                        <li>BMC Smart Reporting</li>
                        <li>BMC Client Management</li>
                        <li>BMC Helix DWP</li>
                        <li>BMC BladeLogic</li>
                        <li>BMC Training</li>
                      </ul>
                    </div>
                    <div class="features__btn-7">
                      <nuxt-link href="/" class="tp-link-btn-3">
                        Read More
                        <span>
                          <i class="fa-regular fa-arrow-right"></i>
                        </span>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide class="">
                <div class="features__item-7 text-center white-bg">
                  <div class="features__icon-17">
                    <span>
                      <img src="~/assets/img/home/bmc.svg" alt="Top-Notch Global Brands" />
                    </span>
                  </div>
                  <div class="features__content-7">
                    <h3 class="features__title-7">BMC</h3>
                    <div class="pricing__feature-5">
                      <ul>
                        <li>BMC Helix ITSM</li>
                        <li>BMC Remedyforce</li>
                        <li>BMC Helix Discovery</li>
                        <li>BMC TrueSight</li>
                        <li>BMC Control-M</li>
                        <li>BMC Smart Reporting</li>
                        <li>BMC Client Management</li>
                        <li>BMC Helix DWP</li>
                        <li>BMC BladeLogic</li>
                        <li>BMC Training</li>
                      </ul>
                    </div>
                    <div class="features__btn-7">
                      <nuxt-link href="/" class="tp-link-btn-3">
                        Read More
                        <span>
                          <i class="fa-regular fa-arrow-right"></i>
                        </span>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide class="">
                <div class="features__item-7 text-center white-bg">
                  <div class="features__icon-17">
                    <span>
                      <img src="~/assets/img/home/bmc.svg" alt="Top-Notch Global Brands" />
                    </span>
                  </div>
                  <div class="features__content-7">
                    <h3 class="features__title-7">BMC</h3>
                    <div class="pricing__feature-5">
                      <ul>
                        <li>BMC Helix ITSM</li>
                        <li>BMC Remedyforce</li>
                        <li>BMC Helix Discovery</li>
                        <li>BMC TrueSight</li>
                        <li>BMC Control-M</li>
                        <li>BMC Smart Reporting</li>
                        <li>BMC Client Management</li>
                        <li>BMC Helix DWP</li>
                        <li>BMC BladeLogic</li>
                        <li>BMC Training</li>
                      </ul>
                    </div>
                    <div class="features__btn-7">
                      <nuxt-link href="/" class="tp-link-btn-3">
                        Read More
                        <span>
                          <i class="fa-regular fa-arrow-right"></i>
                        </span>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide class="">
                <div class="features__item-7 text-center white-bg">
                  <div class="features__icon-17">
                    <span>
                      <img src="~/assets/img/home/bmc.svg" alt="Top-Notch Global Brands" />
                    </span>
                  </div>
                  <div class="features__content-7">
                    <h3 class="features__title-7">BMC</h3>
                    <div class="pricing__feature-5">
                      <ul>
                        <li>BMC Helix ITSM</li>
                        <li>BMC Remedyforce</li>
                        <li>BMC Helix Discovery</li>
                        <li>BMC TrueSight</li>
                        <li>BMC Control-M</li>
                        <li>BMC Smart Reporting</li>
                        <li>BMC Client Management</li>
                        <li>BMC Helix DWP</li>
                        <li>BMC BladeLogic</li>
                        <li>BMC Training</li>
                      </ul>
                    </div>
                    <div class="features__btn-7">
                      <nuxt-link href="/" class="tp-link-btn-3">
                        Read More
                        <span>
                          <i class="fa-regular fa-arrow-right"></i>
                        </span>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>



            </Swiper>
            <div class="blog-slider-4 tp-swiper-dot text-center d-sm-none"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// external
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
// internal
import blogData from "~~/mixins/blogData";
import LawyerSingleBlog from "./single-blog/LawyerSingleBlog.vue";

export default {
  mixins: [blogData],
  props: {
    style_2: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    LawyerSingleBlog,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>