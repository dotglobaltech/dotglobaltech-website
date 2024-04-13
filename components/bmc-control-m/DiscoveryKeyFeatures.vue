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
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.text }}</p>
                </div>
              </div>
            </div>
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