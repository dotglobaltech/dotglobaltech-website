<template>
  <section class="features__area p-relative z-index-1 pb-90 pt-110">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="section__title-wrapper-2 text-center mb-40">
            <span class="section__title-pre-2">All Creative Works</span>
            <h3 class="section__title-2">Creative Works</h3>
            <p>Featured projects, which my best projects be choice to show</p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-xl-12 col-lg-12">
          <div class="about__gallery-slider pl-50 pr-50 p-relative">
            <Carousel ref="detailsSlider" :items-to-show="3" :wrap-around="true" :snapAlign="'center'" :loop="true"
              :breakpoints="{
                1200: {
                  itemsToShow: 3,
                },
                992: {
                  itemsToShow: 3,
                },
                700: {
                  itemsToShow: 3,
                },
                0: {
                  itemsToShow: 1,
                },
              }" class="about__gallery-slider-active">

              <Slide class="elements__carousel-item w-img">
                <div class="features__item-7 text-center mb-30 white-bg transition-3" data-sal="slide-up"
                  data-sal-duration="1000">
                  <div class="features__icon-7">
                    <span>
                      <img src="~/assets/img/features/7/features-icon-1.png" alt="logo" />
                    </span>
                  </div>
                  <div class="features__content-7">
                    <h3 class="features__title-7">Manage Exhggfghfgpenses</h3>
                    <p>
                      Build an online store that rank higher & sell more and integrates easily.
                    </p>
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
              </Slide>

              <Slide class="elements__carousel-item w-img">
                <div class="features__item-7 text-center mb-30 white-bg transition-3" data-sal="slide-up"
                  data-sal-duration="1000">
                  <div class="features__icon-7">
                    <span>
                      <img src="~/assets/img/features/7/features-icon-1.png" alt="logo" />
                    </span>
                  </div>
                  <div class="features__content-7">
                    <h3 class="features__title-7">Manage Exhggfghfgpenses</h3>
                    <p>
                      Build an online store that rank higher & sell more and integrates easily.
                    </p>
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
              </Slide>

              <Slide class="elements__carousel-item w-img">
                <div class="features__item-7 text-center mb-30 white-bg transition-3" data-sal="slide-up"
                  data-sal-duration="1000">
                  <div class="features__icon-7">
                    <span>
                      <img src="~/assets/img/features/7/features-icon-1.png" alt="logo" />
                    </span>
                  </div>
                  <div class="features__content-7">
                    <h3 class="features__title-7">Manage Exhggfghfgpenses</h3>
                    <p>
                      Build an online store that rank higher & sell more and integrates easily.
                    </p>
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
              </Slide>

            </Carousel>

            <div class="about__gallery-arrow d-none d-sm-block">
              <button @click="handlePrev" type="button" class="about-button-prev slick-prev slick-arrow">
                <span><i class="fa-regular fa-arrow-left"></i></span>
              </button>
              <button @click="handleNext" type="button" class="about-button-next slick-next slick-arrow">
                <span><i class="fa-regular fa-arrow-right"></i></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// external
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
// internal
import img_1 from "~/assets/img/slider/about/about-gallery-slider-1.jpg";
import img_2 from "~/assets/img/slider/about/about-gallery-slider-2.jpg";
import img_3 from "~/assets/img/slider/about/about-gallery-slider-3.jpg";
import img_4 from "~/assets/img/slider/about/about-gallery-slider-2.jpg";

export default {
  props: {
    el_style: {
      type: Boolean,
      default: false,
    }
  },
  components: { Carousel, Slide, Pagination, Navigation },
  data() {
    return {

    };
  },
  methods: {
    handlePrev() {
      this.$refs.detailsSlider?.prev();
    },
    handleNext() {
      this.$refs.detailsSlider?.next();
    },
  },
};
</script>