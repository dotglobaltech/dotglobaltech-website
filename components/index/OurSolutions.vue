<template>
  <section class="counter__area p-relative z-index-1 green-light-bg-4 pt-200 pb-200 fix">
    <div class="counter__border-animation"></div>
    <div v-if="!el_style" class="counter__shape">
      <!-- <img class="counter__shape-13" src="~/assets/img/counter/7/counter-shape-1.png" alt="counter__shape" />
      <img class="counter__shape-14" src="~/assets/img/counter/7/counter-shape-2.png" alt="counter__shape" />
      <img class="counter__shape-15" src="~/assets/img/counter/7/counter-shape-3.png" alt="counter__shape" /> -->


      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-3">
        <img class="contact__icon" src="~/assets/img/home/event.svg" alt="">
        <p>Event</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-13">
        <img class="contact__icon" src="~/assets/img/home/ecommerce.svg" alt="">
        <p>Retail<br>Ecommerce</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-14">
        <img class="contact__icon" src="~/assets/img/home/education.svg" alt="">
        <p>Education<br>& e-learning</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-15">
        <img class="contact__icon" src="~/assets/img/home/healthcare.svg" alt="">
        <p>Healthcare<br>& Fitness</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-16">
        <img class="contact__icon" src="~/assets/img/home/logistics-distribution.svg" alt="">
        <p>Logistics<br>& Distribution</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-17">
        <img class="contact__icon" src="~/assets/img/home/social-etworking.svg" alt="">
        <p>Social<br>Networking</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-18">
        <img class="contact__icon" src="~/assets/img/home/gaming.svg" alt="">
        <p>Gaming</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-19">
        <img class="contact__icon" src="~/assets/img/home/real-estate.svg" alt="">
        <p>Real<br>Estate</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-20">
        <img class="contact__icon" src="~/assets/img/home/finance.svg" alt="">
        <p>Finance</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-21">
        <img class="contact__icon" src="~/assets/img/home/ondemand.svg" alt="">
        <p>On-Demand<br>Solutions</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-22">
        <img class="contact__icon" src="~/assets/img/home/hospitality.svg" alt="">
        <p>Travel<br>& Hospitality</p>
      </div>

      <div class="contact__item text-center transition-3 white-bg contact__content features__shape-23">
        <img class="contact__icon" src="~/assets/img/home/restaurant.svg" alt="">
        <p>Food<br>& Restaurant</p>
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