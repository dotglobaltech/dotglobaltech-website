<template>
  <section class="history__area pt-30 pb-50">
    <div class="container">
      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="section__title-wrapper-4 mb-60">
            <span class="section__title-pre-4">Comprehensive Support Services</span>
            <h4>We offer ongoing support, including:</h4>
          </div>
          <div class="history__thumb-wrapper d-sm-flex pr-70">
            <div class="about__thumb-14 m-img">
              <img class="about-img-1" src="~/assets/img/bmc-helix-itsm/We_offer_ongoing_support.png" alt="bmc-helix-itsm">
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
            <span>Don't navigate the complexities of BMC Helix ITSM alone</span>
            <p><nuxt-link href="/contact">Contact Dot Global Technologies</nuxt-link> today and unlock the complete
              potential of your service management capabilities!
            </p>
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
          title: "BMC Helix ITSM Managed Services",
        },
        {
          delay: ".5s",
          title: "BMC Helix ITSM Support Services",
        },
        {
          delay: ".7s",
          title: "BMC Helix ITSM Maintenance",
        },
        {
          delay: ".9s",
          title: "BMC Helix ITSM Training",
        },
        {
          delay: ".11s",
          text: "Thus, we ensure you get the most out of your investment. Our team is here to help you every step of the way, from initial implementation to ongoing optimization. Whether you're looking to leverage the power of BMC Helix ITSM for the first time or optimize your existing deployment, Dot Global Technologies, the best BMC Helix ITSM Support Service provider in Bengaluru, is your one-stop shop.",
        },
      ]
    }
  }
}
</script>