<template>
  <section class="history__area pt-30 pb-50">
    <div class="container">
      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="section__title-wrapper-4 mb-60">
            <span class="section__title-pre-4"></span>
            <h3 class="section__title-4">Benefits of DWP for Your Business</h3>
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
            <span></span>
            <p><nuxt-link href="/contact">Contact Dot Global Technologies</nuxt-link> today and let us help you create a seamless and efficient digital workplace experience for your employeesOur dedicated customer support team is here to answer your questions and let you know what best we offer to be the best BMC Helix Digital Workplace Consultant.
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
          title: "Improved Employee Productivity And Satisfaction",
          text: "DWP empowers employees with self-service capabilities and a user-friendly interface, leading to faster issue resolution and a more streamlined work experience.",
        },
        {
          delay: ".5s",
          title: "Streamlined IT Service Operations",
          text: "DWP automates workflows, centralizes service requests, and simplifies IT asset management, allowing your IT team to focus on more strategic initiatives.",
        },
        {
          delay: ".7s",
          title: "Enhanced Visibility And Control Over IT Resources",
          text: "DWP provides real-time insights into IT service performance and resource utilization, enabling data-driven decision-making and improved control over IT costs. As BMC Helix Digital Workplace Vendor, we empower clients to enjoy enhanced technical capabilities by implementing the right solution.",
        },
        {
          delay: ".9s",
          title: "Reduced Costs",
          text: "DWP helps reduce IT support costs by automating routine tasks and empowering employees to self-service their needs. As the best BMC Helix Digital Workplace Consultant, we help clients make their ITSM cost-efficient through the best BMC solution.",
        },
      ]
    }
  }
}
</script>