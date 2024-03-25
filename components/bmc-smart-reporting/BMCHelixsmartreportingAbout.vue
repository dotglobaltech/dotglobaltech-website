<template>
  <section class="about__area pt-80">
    <div class="container">
      <div class="row">
        <div class="col-xl-5 col-lg-5">
          <div class="about__thumb-wrapper-14 p-relative" data-sal="slide-up" data-sal-delay="130"
            data-sal-duration="1000">
            <div class="about__shape">
              <img class="about__shape-8" src="~/assets/img/about/14/about-shape-1.png" alt="">
              <img class="about__shape-9" src="~/assets/img/about/14/about-shape-2.png" alt="">
            </div>
            <div class="about__thumb-14 m-img">
              <img class="about-img-1" src="~/assets/img/about/14/about-img-1.jpg" alt="">
              <img class="about-img-2" src="~/assets/img/about/14/about-img-2.jpg" alt="">
            </div>
          </div>
        </div>
        <div class="col-xl-7 col-lg-7">
          <div class="about__wrapper-14 pl-75 pt-45" data-sal="slide-up" data-sal-delay="150" data-sal-duration="1000">
            <div class="tp-section-wrapper-2 mb-40">
              <span class="tp-section-subtitle-2">Dot Global Technologies </span>
              <h3 class="tp-section-title-2">Your One-Stop Shop for BMC Smart Reporting</h3>
              <p>Are you having trouble creating reports with BMC Smart Reporting? Dot Global Technologies can help! Through our BMC Smart Reporting Managed Services, we specialize in making this powerful reporting tool accessible to everyone, even non-technical users.</p>
            </div>

            <!-- <div class="about-btn">
              <nuxt-link href="/services" class="tp-btn">Our Services</nuxt-link>
            </div> -->

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],

}
</script>