<template>
  <section class="history__area pt-30 pb-50">
    <div class="container">
      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="section__title-wrapper-4 mb-60">
            <span class="section__title-pre-4"></span>
            <h3 class="section__title-4">Benefits of Using BMC Smart Reporting</h3>
          </div>
          <div class="history__thumb-wrapper d-sm-flex pr-70">
            <div class="about__thumb-14 m-img">
              <img class="about-img-1" src="~/assets/img/bmc-smart-reporting/benifits.png" alt="benifits">
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
            <span>Ready to Get Started?</span>
            <p><nuxt-link href="/contact">Contact Dot Global Technologies</nuxt-link> today to learn more about how we can help you unlock the power of BMC Smart Reporting. Our friendly and technically sound Customer Support Team will be happy to resolve your queries, schedule your meetings with our experts, and guide you to get a customized quote tailored to your business-specific requirements.
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
          title: "Improved Decision-Making",
          text: "Gain valuable insights from your IT data to make better decisions for your business. Being a reputed  BMC Smart Reporting Third-Party Vendor in India, we take pride in empowering our clients to make data-driven, well-informed decisions by leveraging the smart reporting tool.",
        },
        {
          delay: ".5s",
          title: "Increased Efficiency",
          text: "Create reports quickly and easily to save time and effort. We are the preferred BMC Smart Reporting Third-Party Vendor in Bengaluru, enabling our clients to achieve the utmost productivity through the right solutions.",
        },
        {
          delay: ".7s",
          title: "Enhanced Collaboration",
          text: " Share reports and dashboards with your team to improve communication and collaboration.BMC Smart Reporting includes features like storyboards, conversation streams, and dashboards. As the most recognized BMC Smart Reporting Support Service Provider in India, we deploy the most feature-rich smart reporting tool to enhance collaborations.",
        },
      ]
    }
  }
}
</script>