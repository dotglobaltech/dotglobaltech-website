<template>
  <section class="history__area pt-30 pb-50">
    <div class="container">
      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="section__title-wrapper-4 mb-60">
            <span class="section__title-pre-4">Exploring the Benefits of 
</span>
            <h3 class="section__title-4">BMC Helix ITSM</h3>
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
          title: "Effortless Service Requests",
          text: "Users can easily submit requests and resolve common IT issues independently through self-service options, while automation streamlines service delivery and frees agents for complex tasks. We take pride in being the most preferred BMC Helix ITSM Third-Party vendor, helping our clients take their service management to new heights.",
        },
        {
          delay: ".5s",
          title: "Productive Service Management",
          text: "Benefit from the proven capabilities of BMC Remedy now with enhanced mobility scalability, and agility for exceptional IT support that adapts to your needs As BMC Helix ITSM Vendors, we possess technical expertise and capabilities to help clients get the most out of their investments.",
        },
        {
          delay: ".7s",
          title: "Effective IT Asset Management",
          text: "Gain comprehensive lifecycle management of IT assets, ensuring compliance, optimizing software licenses, and informing strategic IT decisions through better asset data Leverage automation for streamlined management and improved efficiency.",
        },
        {
          delay: ".9s",
          title: "Intelligent Incident & Problem Management",
          text: "We are the most trusted BMC Helix ITSM Third Party Vendor in India, empowering clients through ground-breaking features of the solution we deploy AI helps identify recurring incidents, automates tasks, and prioritizes issues, while real-time correlation allows proactive problem-solving.",
        },
        {
          delay: ".11s",
          title: "Effortless Change Management",
          text: "Drag-and-drop functionality simplifies change requests, automates conflict detection, and streamlines the approval process for smooth implementations.",
        },
        {
          delay: ".13s",
          title: "Actionable Reporting & Analytics",
          text: "Gain valuable insights through powerful analytics, customized reports, and clear visualizations for effective data communication.",
        },
      ]
    }
  }
}
</script>