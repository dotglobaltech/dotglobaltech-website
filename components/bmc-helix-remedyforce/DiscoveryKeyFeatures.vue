<template>
  <section class="history__area pt-30 pb-50">
    <div class="container">
      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="section__title-wrapper-4 mb-60">
            <span class="section__title-pre-4">Your Trusted BMC Helix Remedyforce Partner</span>
            <h3>Experienced BMC Helix Remedyforce Consultants</h3>
          </div>
          <div class="history__thumb-wrapper d-sm-flex pr-70">
            <div class="about__thumb-14 m-img">
              <img class="about-img-1" src="~/assets/img/image-here.png" alt="">
            </div>
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="history__list pl-65 pr-90">
            <div v-for="(item, i) in history_lists" :key="i" class="history__list-item d-flex align-items-start">
              <div class="history__list-content">
                <div class="history__list-dot">
                  <span></span>
                </div>
                <div class="history__list-content-inner" data-sal="slide-left" data-sal-delay="130"
                  data-sal-duration="1000">
                  <h4 class="history__list-title">{{ item.title }}</h4>
                  <p>{{ item.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center pt-30">
        <div class="col-xxl-10 col-xl-10 col-lg-11">
          <div class="features__offer text-center mt-20" data-sal="slide-up" data-sal-delay="190"
            data-sal-duration="1000">
            <span>Ready to transform your ITSM and take your customer service to the next level?</span>
            <p><nuxt-link href="/contact">Contact</nuxt-link> Dot Global Technologies today! We are excited to help you craft a customized solution that empowers you to achieve your ITSM goals. Let Dot Global Technologies be your guide to a world of efficient, effective, and customer-centric service management.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import thumb_bg from '~/assets/img/history/history-2.jpg';
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      thumb_bg,
      history_lists: [
        {
          delay: ".3s",
          title: "We Guide You Through Every Step Of The Journey",
          text: "From initial implementation and customization to ongoing support and BMC Helix Remedyforce Training, we are here to help you succeed with BMC Helix Remedyforce.",
        },
        {
          delay: ".5s",
          title: "Benefit From Our Expertise",
          text: "Our BMC-certified consultant team has extensive experience helping businesses of all sizes get the most out of BMC Helix Remedyforce. Our technical expertise, comprehensive implementation, and ongoing support experience make us the best BMC Helix Remedyforce Support Service Provider.",
        },
        {
          delay: ".7s",
          title: "Proven Track Record",
          text: "We have successfully guided and assisted organizations of various sizes to achieve their ITSM goals. We analyze the unique challenges that modern-day enterprises face, and we are committed to providing solutions that meet their specific needs.",
        },
       ]
    }
  }
}
</script>