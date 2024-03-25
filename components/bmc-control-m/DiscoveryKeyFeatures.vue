<template>
  <section class="history__area pt-30 pb-50">
    <div class="container">
      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="section__title-wrapper-4 mb-60">
            <span class="section__title-pre-4">Comprehensive Support</span>
            <h3 class="section__title-4">We provide the following under our unmatched BMC Helix Control-M Support Services:</h3>
          </div>
          <div class="history__thumb-wrapper d-sm-flex pr-70">
            <div class="history__thumb">
              <img src="~/assets/img/history/history-1.jpg" alt="">
            </div>
            <div class="history__thumb-right-wrapper">
              <div class="history__thumb-right p-relative include-bg" :style="{ backgroundImage: `url(${thumb_bg})` }">
                76+
              </div>
              <div class="history-thumb-text">
                <p>Winning Awards</p>
              </div>
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
            <span>Ready to unlock the transformative power of BMC Helix Discovery for your organization?</span>
            <p><nuxt-link href="/contact">Contact</nuxt-link> Dot Global Technologies today for a free consultation and
              discuss how our comprehensive suite of BMC Helix Discovery services can help you achieve your IT goals.
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
          title: "Ongoing BMC Helix Control-M Training to your IT team, ",
        },
        {
          delay: ".5s",
          title: "Prompt BMC Helix Control-M Managed Services and maintenance, ",
        },
        {
          delay: ".7s",
          title: "Comprehensive technical support services to ensure you get the most out of your BMC Helix Control-M investment with minimal downtime.",
        },
        {
          
          title: "Ready to unlock the power of workflow orchestration?",
          text: "Contact us today to know more about the comprehensive range of implementation, training, and support services we offer as the most preferred BMC Helix Control-M Consultant. Our technically sound and friendly Customer Support Team will always be happy to help you resolve your queries, and we will get back to you soon with a quote tailored to your specific requirements.",
        },
       ]
    }
  }
}
</script>