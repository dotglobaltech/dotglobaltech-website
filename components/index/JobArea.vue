<template>
  <section :class="`cta__area ${style_2 ? 'cta__style-3' : ''
    } p-relative z-index-1 pt-40 ${style_2 ? 'grey-bg-7' : 'green-light-bg-4'
    }`">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xxl-12 col-lg-12">
          <div class="cta__btn-wrapper-7 d-sm-flex align-items-center justify-content-lg-center mb-20">
            <nuxt-link href="/" class="tp-cta-btn mb-20">
              Staffing <i class="fa-light fa-arrow-up-right"></i>
            </nuxt-link>
            <nuxt-link href="/" class="tp-cta-btn-yellow mb-20">
              AI/ML <i class="fa-light fa-arrow-up-right"></i>
            </nuxt-link>
            <nuxt-link href="/" class="tp-cta-btn mb-20">
              AR <i class="fa-light fa-arrow-up-right"></i>
            </nuxt-link>
            <nuxt-link href="/" class="tp-cta-btn-yellow mb-20">
              VR<i class="fa-light fa-arrow-up-right"></i>
            </nuxt-link>
            <nuxt-link href="/" class="tp-cta-btn mb-20">
              Metaverse <i class="fa-light fa-arrow-up-right"></i>
            </nuxt-link>
            <nuxt-link href="/" class="tp-cta-btn-yellow mb-20">
              IoT <i class="fa-light fa-arrow-up-right"></i>
            </nuxt-link>
            <nuxt-link href="/" class="tp-cta-btn mb-20">
              BigData <i class="fa-light fa-arrow-up-right"></i>
            </nuxt-link>
            <nuxt-link href="/" class="tp-cta-btn-yellow mb-20">
              Web <i class="fa-light fa-arrow-up-right"></i>
            </nuxt-link>
            <nuxt-link href="/" class="tp-cta-btn mb-20">
              Blockchain <i class="fa-light fa-arrow-up-right"></i>
            </nuxt-link>
            <nuxt-link href="/" class="tp-cta-btn-yellow mb-20">
              RPA <i class="fa-light fa-arrow-up-right"></i>
            </nuxt-link>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    style_2: {
      type: Boolean,
      default: false,
    },
  },
};
</script>