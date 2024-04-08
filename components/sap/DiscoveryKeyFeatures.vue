<template>
  <section class="history__area pt-30 pb-50">
    <div class="container">
      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="section__title-wrapper-4 mb-60">
            <span class="section__title-pre-4"></span>
            <h3 class="section__title-4">Benifits</h3>
          </div>
          <div class="history__thumb-wrapper d-sm-flex pr-70">
            <div class="about__thumb-wrapper-14 p-relative" data-sal="slide-up" data-sal-delay="130"
              data-sal-duration="1000">
              <div class="about__shape">
                <img class="about__shape-8" src="~/assets/img/about/14/about-shape-1.png" alt="">
                <img class="about__shape-9" src="~/assets/img/about/14/about-shape-2.png" alt="">
              </div>
              <div class="about__thumb-14 m-img">
                <img class="about-img-1" src="~/assets/img/image-here.png" alt="">
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
            <span>Sustainable Future</span>
            <p>SAP Cloud's energy-efficient infrastructure and reduced paper waste lead to a more sustainable business
              model.</p>
            <p>SAP Cloud offers various features and benefits that cater to the diverse needs of businesses of all sizes
              and industries. By embracing SAP Cloud, you unlock opportunities to streamline operations, optimize costs,
              and propel your business towards a thriving future.</p>
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
          title: "Reduced Costs",
          text: "Eliminate the need for expensive hardware and IT infrastructure, resulting in significant cost savings.",
        },
        {
          delay: ".5s",
          title: "Increased Efficiency",
          text: "Streamlined processes and automated workflows boost operational efficiency and free up resources for strategic initiatives.",
        },
        {
          delay: ".7s",
          title: "Improved Decision-Making",
          text: "Real-time access to data and powerful analytics equip you to make informed decisions based on accurate insights.",
        },
        {
          delay: ".9s",
          title: "Enhanced Agility",
          text: "Respond quickly to market changes and adapt to new business demands with the flexibility of the cloud.",
        },
        {
          delay: ".11s",
          title: "Boosted Employee Productivity",
          text: "Empower employees with mobile access and user-friendly interfaces. Achieve better engagement and productivity.",
        },
        {
          delay: ".13s",
          title: "Competitive Advantage",
          text: "Gain a strategic edge over competitors by leveraging the cutting-edge technology and innovation of SAP Cloud.",
        },
      ]
    }
  }
}
</script>