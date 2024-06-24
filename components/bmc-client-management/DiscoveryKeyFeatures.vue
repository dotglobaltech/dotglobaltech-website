<template>
  <section class="history__area pt-30 pb-50">
    <div class="container">
      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="section__title-wrapper-4 mb-60">
            <span class="section__title-pre-4">Why Choose Us</span>
            <h3 class="section__title-4">as Your BMC Helix Client Management Partners</h3>
          </div>
          <div class="history__thumb-wrapper d-sm-flex pr-70">
            <div class="about__thumb-14 m-img">
              <img class="about-img-1" src="~/assets/img/bmc-helix-client-management/why_choose_us.png" alt="why_choose_us">
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
            <p><nuxt-link href="/contact">Contact Dot Global Technologies</nuxt-link> today to discuss your BMC Helix Client Management needs. Our friendly and technically sound customer support team would be happy to resolve your queries, schedule your meeting with our experts, and guide you to get a customized quote suiting your business-specific BMC Helix Client Management needs.
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
          title: "Customized Solutions",
          text: "As a globally acclaimed BMC Helix Client Management Third-Party Vendor in India, we deploy a team of BMC-certified experts to tailor the solution to your specific needs and maximize its features and benefits.",
        },
        {
          delay: ".5s",
          title: "One-Stop Shop for All Your Service Needs",
          text: "Dot Global Technologies takes pride in providing a complete range of services that cover all your needs, including design, customization, deployment, and ongoing support. Similarly, we organize BMC Helix Client Management Training to upskill your team.",
        },
        {
          delay: ".7s",
          title: "Enhanced Security",
          text: "As the best BMC Helix Client Management Support Service provider, we ensure your devices comply with IT policies and industry regulations, keeping your data safe.",
        },
        {
          delay: ".9s",
          title: "Improved Efficiency",
          text: "As BMC Helix Client Management Third-Party Vendor in Bengaluru, we help you automate client management tasks to free up IT resources for more strategic initiatives.",
        },
        {
          delay: ".11s",
          title: "Reduced Costs",
          text: "Minimize service desk calls and optimize software licensing to make IT endpoint management cost-effective.",
        },
      ]
    }
  }
}
</script>