<template>
  <section class="testimonial__area services-bg pt-100 pb-50">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xxl-8 col-xl-8 col-lg-9">
          <div class="section__title-wrapper-7 text-center mb-60">
            <h3 class="section__title-7"><span class="section__title-7-highlight">Trusted Clienteles<svg width="240"
                  height="22" viewBox="0 0 240 22" fill="none">
                  <path class="wow" fill-rule="evenodd" clip-rule="evenodd"
                    d="M0.440833 21.1152C78.9497 6.16225 158.05 4.53412 235.949 13.8239C237.497 14.0088 239.796 12.4065 239.988 9.93474C240.181 7.4176 238.026 5.44088 236.474 5.2332C157.99 -5.31675 79.1936 0.359501 0.316568 19.7785C-0.184784 19.9023 -0.0511379 21.2092 0.440833 21.1152Z"
                    fill="currentColor"></path>
                </svg></span></h3>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-xxl-12">
          <div class="testimonial__slider-9 p-relative">

            <Carousel ref="slider_1" id="gallery" class="testimonial__slider-active-9" :items-to-show="1"
              v-if="feedbacks !== null" :wrap-around="true" v-model="currentSlide">
              <Slide v-for="slide in feedbacks.singleFeedbacks" :key="slide.id" class="testimonial__item-9">
                <div class="testimonial__content-9 text-center">
                  <div class="testimonial__avater-3 mb-35 d-sm-flex justify-content-center">
                    <div class="testimonial__avater-thumb-3">
                      <img :src="slide.media.data.attributes.url" alt="image">
                    </div>
                    <div class="tesimonial__avater-info-3">
                      <h4 class="testimonial__avater-title-3">{{ slide.name }}</h4><span
                        class="testimonial__avater-designation-3">{{ slide.designation }}</span>
                    </div>
                  </div>
                  <p>{{ slide.shortDec }}</p>
                </div>
              </Slide>
            </Carousel>

            <div class="testimonial__slider-arrow-9 d-none d-md-block">
              <button @click="handlePrev" type="button" class="slick-prev testimonial-9-button-prev slick-arrow">
                <i class="fa-regular fa-arrow-left"></i><span>Preview</span>
              </button>

              <button @click="handleNext" type="button" class="slick-next testimonial-9-button-next slick-arrow">
                <span>Next</span><i class="fa-regular fa-arrow-right"></i>
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
import { Carousel, Slide } from "vue3-carousel";

import axios from 'axios'

export default {
  name: 'WhatsOurClients',
  data: () => ({
    currentSlide: 1,
    feedbacks: null,
  }),
  created: async function () {
    const response = await axios.get('https://cms.dotglobaltech.com/api/customerreview?populate=singleFeedbacks.media')
    const { data: { attributes } } = response.data
    this.feedbacks = attributes
  },
  components: { Carousel, Slide },
  methods: {
    slideTo(val) {
      this.currentSlide = val;
    },
    handlePrev() {
      this.$refs.slider_1?.prev();
    },
    handleNext() {
      this.$refs.slider_1?.next();
    },
  },
};
</script>