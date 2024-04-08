<template>
  <section class="history__area pt-30 pb-50">
    <div class="container">
      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="section__title-wrapper-4 mb-60">
            <span class="section__title-pre-4">Why Choose Dot Global Technologies</span>
            <h3 class="section__title-4">as Your Oracle Cloud Partner</h3>
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
            <span>Ready to Unleash the Power of Oracle with Dot Global Technologies?</span>
            <p><nuxt-link href="/contact">Contact</nuxt-link> today and let our experts guide you on your journey to a future powered by Oracle solutions. Dot Global Technologies is your trusted Oracle third-party vendor in India, guiding you every step of the way to unlock the limitless possibilities of the cloud for your business.We'll help you design, implement, and optimize your Oracle environment, unlocking innovation, agility, and growth. Embrace the future with Dot Global Technologies and Oracle!
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
          title: "Unmatched Expertise",
          text: "Our team of certified Oracle specialists boasts extensive experience across the entire Oracle ecosystem, ensuring exceptional guidance and support.",
        },
        {
          delay: ".5s",
          title: "Client-Centric Approach",
          text: "We prioritize your organizational goals and challenges, crafting customized Oracle solutions that perfectly align with your unique business landscape.",
        },
        {
          delay: ".7s",
          title: "Proven Track Record",
          text: "We have a successful history of delivering transformative Oracle implementations for businesses of all sizes and industries in India and beyond.",
        },
        {
          delay: ".9s",
          title: "Comprehensive Services",
          text: "From strategic planning and migration to ongoing optimization and support, we're your one-stop shop for the entire Oracle journey.",
        },
        {
          delay: ".11s",
          title: "Agile Delivery",
          text: "We embrace agile methodologies to ensure flexible and iterative deployments, minimizing disruption and maximizing value realization.",
        },
        {
          delay: ".13s",
          title: "Long-Term Commitment",
          text: "We're not just consultants but your trusted Oracle cloud partners, providing continuous guidance and support throughout your evolving Oracle journey.",
        },
      ]
    }
  }
}
</script>