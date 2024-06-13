<template>
  <section class="counter__area p-relative z-index-1 solutions-bg pt-200 pb-200 fix d-none d-sm-block">
    <div class="counter__border-animation"></div>
    <div v-if="!el_style" class="counter__shape">

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-3">
        <img class="contact__icon" src="~/assets/img/home/erp.svg" alt="">
        <p>ERP</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-13">
        <img class="contact__icon" src="~/assets/img/home/operations-management.svg" alt="">
        <p>Operations<br>Management</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-14">
        <img class="contact__icon" src="~/assets/img/home/finance.svg" alt="">
        <p>Financial<br>Management</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-15">
        <img class="contact__icon" src="~/assets/img/home/payment-gateway.svg" alt="">
        <p>Payment<br>Management</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-16">
        <img class="contact__icon" src="~/assets/img/home/logistics-distribution.svg" alt="">
        <p>Supply Chain<br>Management</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-17">
        <img class="contact__icon" src="~/assets/img/home/data-analytics.svg" alt="">
        <p>Data<br>Analytics</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-18">
        <img class="contact__icon" src="~/assets/img/home/asset-management.svg" alt="">
        <p>Asset<br>Management</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-19">
        <img class="contact__icon" src="~/assets/img/home/fleet-management.svg" alt="">
        <p>Fleet<br>Management</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-20">
        <img class="contact__icon" src="~/assets/img/home/human-resources.svg" alt="">
        <p>Human<br>Resources</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-21">
        <img class="contact__icon" src="~/assets/img/home/ondemand.svg" alt="">
        <p>eLearning</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-22">
        <img class="contact__icon" src="~/assets/img/home/document-management.svg" alt="">
        <p>Document<br>Management</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-23">
        <img class="contact__icon" src="~/assets/img/home/project-management.svg" alt="">
        <p>Project<br>Management</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-24">
        <img class="contact__icon" src="~/assets/img/home/crm.svg" alt="">
        <p>CRM</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-25">
        <img class="contact__icon" src="~/assets/img/home/ecommerce.svg" alt="">
        <p>Ecommerce</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-26">
        <img class="contact__icon" src="~/assets/img/home/marketing.svg" alt="">
        <p>Marketing &<br>Advertising</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-27">
        <img class="contact__icon" src="~/assets/img/home/content-management.svg" alt="">
        <p>Content<br>Management</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-28">
        <img class="contact__icon" src="~/assets/img/home/web-portals.svg" alt="">
        <p>Web<br>Portals</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-29">
        <img class="contact__icon" src="~/assets/img/home/enterprise-application.svg" alt="">
        <p>Enterprise<br>Application</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-30">
        <img class="contact__icon" src="~/assets/img/home/mobile-application.svg" alt="">
        <p>Mobile<br>Applications</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-31">
        <img class="contact__icon" src="~/assets/img/home/product-solution.svg" alt="">
        <p>Collaboration &<br>Productivity<br>Solutions</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-32">
        <img class="contact__icon" src="~/assets/img/home/itsm.svg" alt="">
        <p>ITSM</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-33">
        <img class="contact__icon" src="~/assets/img/home/real-estate.svg" alt="">
        <p>Real<br>Estate</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-34">
        <img class="contact__icon" src="~/assets/img/home/kiosk.svg" alt="">
        <p>Kiosk<br>Software</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-35">
        <img class="contact__icon" src="~/assets/img/home/travel-hospitality.svg" alt="">
        <p>Travel &<br>Hospitality</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-36">
        <img class="contact__icon" src="~/assets/img/home/healthcare.svg" alt="">
        <p>Health &<br>Fitness</p>
      </div>

    </div>
    <div class="container">
      <div v-if="!el_style" class="row justify-content-center">
        <div class="col-xxl-4 col-xl-4 col-lg-4">
          <div class="section__title-wrapper-7 mb-60 text-center">
            <div class="circle">
              <div class="circle__inner">
                <div class="circle__wrapper">
                  <div class="circle__content circle-bg-5">
                    <h3 class="services__title-7"><a href="/service-details" class="">Our Solutions</a></h3>
                    <!-- <h5>We Have Worked Across Multiple Industries</h5> -->
                    <p>Discover a suite of cutting-edge software solutions tailored to meet your diverse needs. Our software solutions elevate your digital experience from streamlined efficiency to enhanced security. Explore innovation, reliability, and performance in every solution we offer.</p>
                    <div class="services__btn-7"><a href="/" class="tp-link-btn-3">View all
                        <span><i class="fa-regular fa-arrow-right"></i></span></a></div>
                  </div>
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
export default {
  props: {
    el_style: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      counter_data: [
        {
          icon: `<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <path
                    d="M31.4834 57.9998H7.90788C4.65995 57.9998 2 55.3959 2 52.2039V10.6528C2 3.31695 7.45989 -0.0149813 14.1518 3.26095L26.5835 9.36483C29.2714 10.6808 31.4834 14.1807 31.4834 17.1487V57.9998Z"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M57.9989 38.5684V49.1522C57.9989 55.2001 55.1989 58 49.151 58H31.4834V25.5767L32.7994 25.8567L45.3991 28.6846L51.083 29.9446C54.7789 30.7566 57.8029 32.6605 57.9709 38.0364C57.9989 38.2044 57.9989 38.3724 57.9989 38.5684Z"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path opacity="0.4" d="M11.8838 21.6003H21.5996" stroke="#2CAE76" stroke-width="2.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path opacity="0.4" d="M11.8838 32.8H21.5996" stroke="#2CAE76" stroke-width="2.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M45.3995 28.6841V37.7C45.3995 41.1719 42.5716 43.9998 39.0997 43.9998C35.6277 43.9998 32.7998 41.1719 32.7998 37.7V25.8562L45.3995 28.6841Z"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M57.9712 38.0361C57.8032 41.3401 55.0592 44 51.6993 44C48.2274 44 45.3994 41.1721 45.3994 37.7001V28.6843L51.0833 29.9443C54.7792 30.7563 57.8032 32.6602 57.9712 38.0361Z"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>`,
          num: 98,
          text: "%",
          title: "Private Office",
        },
      ],
    };
  },
};
</script>