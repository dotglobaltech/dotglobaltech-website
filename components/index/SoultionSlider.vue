<template>
  <section id="tpabout" class="elements__carousel-area d-none d-col-block solutions-bg pt-60 pb-80">
    <div class="container justify-content-top">
      <div class="row">
        <div class="col-xxl-12">
          <div class="tp-section-wrapper-3 mb-30 text-center">
            <h3 class="section__title-7">Our<span class="section__title-7-highlight"> Solutions<svg width="220"
                  height="27" viewBox="0 0 220 27" fill="none">
                  <path
                    d="M19.6407 15.2948C33.4481 12.464 47.2752 10.3031 61.24 8.63481C48.6133 9.07487 35.9865 9.33103 23.3729 9.29162C22.4743 9.29162 21.7396 8.54942 21.7396 7.64958C21.7462 6.74318 22.4808 6.00754 23.386 6.00754C60.8398 6.12577 138.464 3.57728 175.839 1.69222C185.81 1.18648 195.563 0.739778 205.534 0.477052C208.079 0.41137 210.63 0.280046 213.175 0.188091C214.5 0.142114 217.924 -0.0286769 218.403 0.0041639C219.761 0.0895499 219.964 1.27179 219.984 1.4557C220.036 1.8892 220.003 2.53954 219.242 3.03215C219.19 3.07156 218.895 3.25544 218.232 3.33426C181.198 7.74806 103.764 7.1897 66.6842 11.3079C51.0861 13.0485 35.6783 15.3606 20.3032 18.5133C14.9311 19.6102 11.8678 20.3064 7.57803 21.4493C14.649 23.3081 21.8971 24.3393 29.2173 24.891C29.2173 24.891 19.6407 27.474 12.386 25.9286C5.13134 24.3833 4.9674 24.221 1.33353 23.0321C0.493934 22.7628 0.238148 22.2375 0.133199 21.955C-0.0963783 21.3639 -0.0701445 20.7136 0.539874 20.1159C0.703857 19.9583 1.01869 19.7349 1.51064 19.5773C2.15346 19.3737 3.48499 19.1636 4.08189 18.9994C9.9853 17.3705 13.1535 16.6216 19.6407 15.2948Z"
                    fill="currentColor"></path>
                </svg></span>
              <p>Discover a suite of cutting-edge software solutions tailored to meet your diverse needs. Our software
                solutions elevate your digital experience from streamlined efficiency to enhanced security. Explore
                innovation, reliability, and performance in every solution we offer.
              </p>
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="elements__carousel p-relative">
            <Carousel ref="detailsSlider" :items-to-show="3" :autoplay="false" :wrap-around="true" :snapAlign="'center'"
              :breakpoints="{
                992: {
                  itemsToShow: 3,
                },
                700: {
                  itemsToShow: 3,
                },
                0: {
                  itemsToShow: 1,
                },
              }" class="elements__carousel-active">


              <Slide class="elements__carousel-item w-img">
                <div class="service-card-app hoshd">
                  <img class="contact__icon" src="~/assets/img/home/event.svg" alt="">
                  <h4 class="features__title-7"><nuxt-link href="/">Event</nuxt-link>
                  </h4>
                  <nuxt-link href="/" class="mt20 link-prbs">Read More <i
                      class="fas fa fa-arrow-circle-right"></i></nuxt-link>
                </div>
              </Slide>

              <Slide class="elements__carousel-item w-img">
                <div class="service-card-app hoshd">
                  <img class="contact__icon" src="~/assets/img/home/ecommerce.svg" alt="">
                  <h4 class="features__title-7"><nuxt-link href="/">Retail<br>Ecommerce</nuxt-link>
                  </h4>
                  <nuxt-link href="/" class="mt20 link-prbs">Read More <i
                      class="fas fa fa-arrow-circle-right"></i></nuxt-link>
                </div>
              </Slide>

              <Slide class="elements__carousel-item w-img">
                <div class="service-card-app hoshd">
                  <img class="contact__icon" src="~/assets/img/home/education.svg" alt="">
                  <h4 class="features__title-7"><nuxt-link href="/software-development">Education<br>&
                      e-learning</nuxt-link>
                  </h4>
                  <nuxt-link href="/" class="mt20 link-prbs">Read More <i
                      class="fas fa fa-arrow-circle-right"></i></nuxt-link>
                </div>
              </Slide>

              <Slide class="elements__carousel-item w-img">
                <div class="service-card-app hoshd">
                  <img class="contact__icon" src="~/assets/img/home/healthcare.svg" alt="">
                  <h4 class="features__title-7"><nuxt-link href="/software-development">Healthcare<br>&
                      Fitness</nuxt-link>
                  </h4>
                  <nuxt-link href="/" class="mt20 link-prbs">Read More <i
                      class="fas fa fa-arrow-circle-right"></i></nuxt-link>
                </div>
              </Slide>

              <Slide class="elements__carousel-item w-img">
                <div class="service-card-app hoshd">
                  <img class="contact__icon" src="~/assets/img/home/logistics-distribution.svg" alt="">
                  <h4 class="features__title-7"><nuxt-link href="/software-development">Logistics<br>&
                      Distribution</nuxt-link>
                  </h4>
                  <nuxt-link href="/" class="mt20 link-prbs">Read More <i
                      class="fas fa fa-arrow-circle-right"></i></nuxt-link>
                </div>
              </Slide>

              <Slide class="elements__carousel-item w-img">
                <div class="service-card-app hoshd">
                  <img class="contact__icon" src="~/assets/img/home/social-etworking.svg" alt="">
                  <h4 class="features__title-7"><nuxt-link href="/software-development">Social<br>Networking</nuxt-link>
                  </h4>
                  <nuxt-link href="/" class="mt20 link-prbs">Read More <i
                      class="fas fa fa-arrow-circle-right"></i></nuxt-link>
                </div>
              </Slide>

              <Slide class="elements__carousel-item w-img">
                <div class="service-card-app hoshd">
                  <img class="contact__icon" src="~/assets/img/home/social-etworking.svg" alt="">
                  <h4 class="features__title-7"><nuxt-link href="/software-development">Gaming</nuxt-link>
                  </h4>
                  <nuxt-link href="/" class="mt20 link-prbs">Read More <i
                      class="fas fa fa-arrow-circle-right"></i></nuxt-link>
                </div>
              </Slide>

              <Slide class="elements__carousel-item w-img">
                <div class="service-card-app hoshd">
                  <img class="contact__icon" src="~/assets/img/home/real-estate.svg" alt="">
                  <h4 class="features__title-7"><nuxt-link href="/software-development">Real<br>Estate</nuxt-link>
                  </h4>
                  <nuxt-link href="/" class="mt20 link-prbs">Read More <i
                      class="fas fa fa-arrow-circle-right"></i></nuxt-link>
                </div>
              </Slide>

              <Slide class="elements__carousel-item w-img">
                <div class="service-card-app hoshd">
                  <img class="contact__icon" src="~/assets/img/home/finance.svg" alt="">
                  <h4 class="features__title-7"><nuxt-link href="/software-development">Finance</nuxt-link>
                  </h4>
                  <nuxt-link href="/" class="mt20 link-prbs">Read More <i
                      class="fas fa fa-arrow-circle-right"></i></nuxt-link>
                </div>
              </Slide>

              <Slide class="elements__carousel-item w-img">
                <div class="service-card-app hoshd">
                  <img class="contact__icon" src="~/assets/img/home/ondemand.svg" alt="">
                  <h4 class="features__title-7"><nuxt-link href="/software-development">On-Demand<br>Solutions</nuxt-link>
                  </h4>
                  <nuxt-link href="/" class="mt20 link-prbs">Read More <i
                      class="fas fa fa-arrow-circle-right"></i></nuxt-link>
                </div>
              </Slide>

              <Slide class="elements__carousel-item w-img">
                <div class="service-card-app hoshd">
                  <img class="contact__icon" src="~/assets/img/home/hospitality.svg" alt="">
                  <h4 class="features__title-7"><nuxt-link href="/software-development">Travel<br>&
                      Hospitality</nuxt-link>
                  </h4>
                  <nuxt-link href="/" class="mt20 link-prbs">Read More <i
                      class="fas fa fa-arrow-circle-right"></i></nuxt-link>
                </div>
              </Slide>

              <Slide class="elements__carousel-item w-img">
                <div class="service-card-app hoshd">
                  <img class="contact__icon" src="~/assets/img/home/restaurant.svg" alt="">
                  <h4 class="features__title-7"><nuxt-link href="/software-development">Food<br>& Restaurant</nuxt-link>
                  </h4>
                  <nuxt-link href="/" class="mt20 link-prbs">Read More <i
                      class="fas fa fa-arrow-circle-right"></i></nuxt-link>
                </div>
              </Slide>


              <template #addons>
                <pagination />
              </template>
            </Carousel>
            <div class="elements-arrow">
              <button @click="handlePrev" type="button" class="elements-button-prev slick-prev slick-arrow">
                <i class="fa-solid fa-angle-left"></i>
              </button>
              <button @click="handleNext" type="button" class="elements-button-next slick-next slick-arrow">
                <i class="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// external
import { Carousel, Slide, Pagination } from "vue3-carousel";
// internal

export default {
  components: { Carousel, Slide, Pagination },
  data() {
    return {

    };
  },
  methods: {
    handlePrev() {
      this.$refs.detailsSlider?.prev();
    },
    handleNext() {
      this.$refs.detailsSlider?.next();
    },
  },
};
</script>