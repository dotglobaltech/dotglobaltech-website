<template>
  <section class="slider__area p-relative">
    <Swiper class="slider__active swiper-container" :slidesPerView="1" :loop="true" :speed="4000" :modules="modules" :effect="'fade'"
    :autoplay="{
        delay: 1,
        pauseOnMouseEnter: false,
    }"
      :pagination="{
      el: '.main-slider-dot',
      clickable: true,
      renderBullet: renderBullet,
    }">

      <SwiperSlide
        class="slider__item slider__height slider__overlay include-bg pt-100 pb-100 d-flex align-items-center">
        <div class="slider__bg p-relative include-bg">
          <video class="video-banner__video" autoplay muted loop>
            <source src="~/assets/img/digital-transformation.mp4" type="video/mp4">
          </video>
        </div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xxl-12">
              <div class="slider__content text-center">
                <div class="sb-title-wrap">
                  <h1 class="sb-heading">
                    Software Consulting and Development
                  </h1>
                  <div class="sb-title-row">
                    <div class="sb-title">
                      <p>Dot</p>
                    </div>
                    <div class="sb-animated-inner">
                      <div class="sb-animated-label">Action</div>
                      <div class="sb-animated wrapper">
                        <ul class="dynamic-txts">
                          <li><span>AI-Infused</span></li>
                        </ul>
                      </div>
                    </div>
                    <div class="sb-title">
                      <p>Digital Transformation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide
        class="slider__item slider__height slider__overlay include-bg pt-100 pb-100 d-flex align-items-center">
        <div class="slider__bg p-relative include-bg">
          <video class="video-banner__video" autoplay muted loop>
            <source src="~/assets/img/nature.mp4" type="video/mp4">
          </video>
        </div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xxl-12">
              <div class="slider__content text-center">
                <div class="sb-title-wrap">
                  <h1 class="sb-heading">
                    Software Consulting and Development
                  </h1>
                  <div class="sb-title-row">
                    <div class="sb-title">
                      <p>Dot</p>
                    </div>
                    <div class="sb-animated-inner">
                      <div class="sb-animated-label">Action</div>
                      <div class="sb-animated wrapper">
                        <ul class="dynamic-txts">
                          <li><span>Inspire</span></li>
                        </ul>
                      </div>
                    </div>
                    <div class="sb-title">
                      <p>Digital Transformation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide
        class="slider__item slider__height slider__overlay include-bg pt-100 pb-100 d-flex align-items-center">
        <div class="slider__bg p-relative">
          <img src="~/assets/img/drive-digital.jpg" alt="banner" />
        </div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xxl-12">
              <div class="slider__content text-center">
                <div class="sb-title-wrap">
                  <h1 class="sb-heading">
                    Software Consulting and Development
                  </h1>
                  <div class="sb-title-row">
                    <div class="sb-title">
                      <p>Dot</p>
                    </div>
                    <div class="sb-animated-inner">
                      <div class="sb-animated-label">Action</div>
                      <div class="sb-animated wrapper">
                        <ul class="dynamic-txts">
                          <li><span>Drive</span></li>
                        </ul>
                      </div>
                    </div>
                    <div class="sb-title">
                      <p>Digital Transformation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide
        class="slider__item slider__height slider__overlay include-bg pt-100 pb-100 d-flex align-items-center">
        <div class="slider__bg p-relative include-bg">
          <img src="~/assets/img/enhance-digital.jpg" alt="banner" />
        </div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xxl-12">
              <div class="slider__content text-center">
                <div class="sb-title-wrap">
                  <h1 class="sb-heading">
                    Software Consulting and Development
                  </h1>
                  <div class="sb-title-row">
                    <div class="sb-title">
                      <p>Dot</p>
                    </div>
                    <div class="sb-animated-inner">
                      <div class="sb-animated-label">Action</div>
                      <div class="sb-animated wrapper">
                        <ul class="dynamic-txts">
                          <li><span>Enhance</span></li>
                        </ul>
                      </div>
                    </div>
                    <div class="sb-title">
                      <p>Digital Transformation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide
        class="slider__item slider__height slider__overlay include-bg pt-100 pb-100 d-flex align-items-center">
        <div class="slider__bg p-relative include-bg">
          <img src="~/assets/img/ensure-digital.jpg" alt="banner" />
        </div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xxl-12">
              <div class="slider__content text-center">
                <div class="sb-title-wrap">
                  <h1 class="sb-heading">
                    Software Consulting and Development
                  </h1>
                  <div class="sb-title-row">
                    <div class="sb-title">
                      <p>Dot</p>
                    </div>
                    <div class="sb-animated-inner">
                      <div class="sb-animated-label">Action</div>
                      <div class="sb-animated wrapper">
                        <ul class="dynamic-txts">
                          <li><span>Ensure</span></li>
                        </ul>
                      </div>
                    </div>
                    <div class="sb-title">
                      <p>Digital Transformation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide
        class="slider__item slider__height slider__overlay include-bg pt-100 pb-100 d-flex align-items-center">
        <div class="slider__bg p-relative include-bg">
          <img src="~/assets/img/empower-digital.jpg" alt="banner" />
        </div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xxl-12">
              <div class="slider__content text-center">
                <div class="sb-title-wrap">
                  <h1 class="sb-heading">
                    Software Consulting and Development
                  </h1>
                  <div class="sb-title-row">
                    <div class="sb-title">
                      <p>Dot</p>
                    </div>
                    <div class="sb-animated-inner">
                      <div class="sb-animated-label">Action</div>
                      <div class="sb-animated wrapper">
                        <ul class="dynamic-txts">
                          <li><span>Empower</span></li>
                        </ul>
                      </div>
                    </div>
                    <div class="sb-title">
                      <p>Digital Transformation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <div class="main-slider-dot d-none d-lg-flex"></div>
    </Swiper>
    <div class="mouse-scroll">
      <a href="#tpabout" class="mouse-scroll-btn"></a>
    </div>
  </section>
</template>

<script>
// internal
import SliderForm from "~~/components/forms/SliderForm.vue";
// external
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, EffectFade } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
    SliderForm,
  },
  data() {
    return {

    };
  },
  setup() {

return {
    modules: [Autoplay],
};
},
  methods: {
    renderBullet: function (index, className) {
      return `<span class=${className}>
              <button>${index < 9 ? "0" : ""}${index + 1}</button>
             </span>`;
    },
  },
  setup() {
    return {
      modules: [Pagination, Navigation, EffectFade],
    };
  },
};
</script>