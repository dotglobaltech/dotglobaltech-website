<template>
  <section class="elements__carousel-area pt-110">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="tp-section-wrapper-3 mb-30 text-center">
            <h3 class="section__title"> Top-Notch Global <span class="section__title-highlight">Brands <svg width="220"
                  height="27" viewBox="0 0 220 27" fill="none">
                  <path
                    d="M19.6407 15.2948C33.4481 12.464 47.2752 10.3031 61.24 8.63481C48.6133 9.07487 35.9865 9.33103 23.3729 9.29162C22.4743 9.29162 21.7396 8.54942 21.7396 7.64958C21.7462 6.74318 22.4808 6.00754 23.386 6.00754C60.8398 6.12577 138.464 3.57728 175.839 1.69222C185.81 1.18648 195.563 0.739778 205.534 0.477052C208.079 0.41137 210.63 0.280046 213.175 0.188091C214.5 0.142114 217.924 -0.0286769 218.403 0.0041639C219.761 0.0895499 219.964 1.27179 219.984 1.4557C220.036 1.8892 220.003 2.53954 219.242 3.03215C219.19 3.07156 218.895 3.25544 218.232 3.33426C181.198 7.74806 103.764 7.1897 66.6842 11.3079C51.0861 13.0485 35.6783 15.3606 20.3032 18.5133C14.9311 19.6102 11.8678 20.3064 7.57803 21.4493C14.649 23.3081 21.8971 24.3393 29.2173 24.891C29.2173 24.891 19.6407 27.474 12.386 25.9286C5.13134 24.3833 4.9674 24.221 1.33353 23.0321C0.493934 22.7628 0.238148 22.2375 0.133199 21.955C-0.0963783 21.3639 -0.0701445 20.7136 0.539874 20.1159C0.703857 19.9583 1.01869 19.7349 1.51064 19.5773C2.15346 19.3737 3.48499 19.1636 4.08189 18.9994C9.9853 17.3705 13.1535 16.6216 19.6407 15.2948Z"
                    fill="currentColor"></path>
                </svg></span>
              <p>DGT Offers services, including implementation, customization,<br>integration, up-gradation, and
                migrations.
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
                  itemsToShow: 2,
                },
                0: {
                  itemsToShow: 1,
                },
              }" class="elements__carousel-active">

              <Slide class="elements__carousel-item w-img">
                <div class="features__item-7 text-center white-bg">
                  <div class="features__icon-17">
                    <span>
                      <img src="~/assets/img/home/bmc.svg" alt="Top-Notch Global Brands" />
                    </span>
                  </div>
                  <div class="features__content-7">
                    <div class="features__item-10 pricing__feature-5">
                      <h3 class="features__title-7">BMC</h3>
                      <ul>
                        <li>BMC Helix ITSM</li>
                        <li>BMC Remedyforce</li>
                        <li>BMC Helix Discovery</li>
                        <li>BMC TrueSight</li>
                        <li>BMC Control-M</li>
                        <li>BMC Smart Reporting</li>
                        <li>BMC Client Management</li>
                        <li>BMC Helix DWP</li>
                        <li>BMC BladeLogic</li>
                        <li>BMC Training</li>
                      </ul>
                    </div>
                    <div class="features__btn-7">
                      <nuxt-link href="/" class="tp-link-btn-3">
                        Read More
                        <span>
                          <i class="fa-regular fa-arrow-right"></i>
                        </span>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </Slide>

              <Slide class="elements__carousel-item w-img">
                <div class="features__item-7 text-center mb-30 white-bg transition-3" data-sal="slide-up"
                  data-sal-duration="1000">
                  <div class="features__icon-10">
                    <span>
                      <img src="~/assets/img/home/oracle.svg" alt="logo" />
                    </span>
                  </div>
                  <div class="features__content-7">
                    <h3 class="features__title-7">Oracle</h3>
                    <div class="pricing__feature-5">
                      <ul>
                        <li>Oracle EBS</li>
                        <li>Oracle Cloud</li>
                      </ul>
                    </div>
                    <div class="features__btn-7">
                      <nuxt-link href="/" class="tp-link-btn-3">
                        Read More
                        <span>
                          <i class="fa-regular fa-arrow-right"></i>
                        </span>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </Slide>

              <Slide class="elements__carousel-item w-img">
                <div class="features__item-7 text-center mb-30 white-bg transition-3" data-sal="slide-up"
                  data-sal-duration="1000">
                  <div class="features__icon-10">
                    <span>
                      <img src="~/assets/img/home/salesforce.svg" alt="logo" />
                    </span>
                  </div>
                  <div class="features__content-7">
                    <h3 class="features__title-7">Saleforce</h3>
                    <div class="pricing__feature-5">
                      <ul>
                        <li>Salesforce Sales Cloud</li>
                        <li>Salesforce Service Clou</li>
                        <li>Salesforce Commerce Cloud</li>
                        <li>Salesforce Marketing Cloud</li>
                        <li>Salesforce Community Cloud</li>
                        <li>Salesforce Integration Cloud</li>
                      </ul>
                    </div>
                    <div class="features__btn-7">
                      <nuxt-link href="/" class="tp-link-btn-3">
                        Read More
                        <span>
                          <i class="fa-regular fa-arrow-right"></i>
                        </span>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </Slide>

              <Slide class="elements__carousel-item w-img">
                <div class="features__item-7 text-center mb-30 white-bg transition-3" data-sal="slide-up"
                  data-sal-duration="1000">
                  <div class="features__icon-10">
                    <span>
                      <img src="~/assets/img/home/servicenow.svg" alt="logo" />
                    </span>
                  </div>
                  <div class="features__content-7">
                    <h3 class="features__title-7">Saleforce</h3>
                    <div class="pricing__feature-5">
                      <ul>
                        <li>IT Service Management</li>
                        <li>IT Workflows</li>
                        <li>Knowledge Management</li>
                        <li>Audit Management</li>
                        <li>Configuration Compliance</li>
                      </ul>
                    </div>
                    <div class="features__btn-7">
                      <nuxt-link href="/" class="tp-link-btn-3">
                        Read More
                        <span>
                          <i class="fa-regular fa-arrow-right"></i>
                        </span>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </Slide>

              <Slide class="elements__carousel-item w-img">
                <div class="features__item-7 text-center mb-30 white-bg transition-3" data-sal="slide-up"
                  data-sal-duration="1000">
                  <div class="features__icon-10">
                    <span>
                      <img src="~/assets/img/home/aws.svg" alt="logo" />
                    </span>
                  </div>
                  <div class="features__content-7">
                    <h3 class="features__title-7">AWS</h3>
                    <div class="pricing__feature-5">
                      <ul>
                        <li>AWS Consulting</li>
                        <li>AWS Cloud Migration</li>
                        <li>AWS Cloud Security</li>
                        <li>Managed Cloud Services</li>
                        <li>Serverless Computing</li>
                        <li>AWS Market Enablement</li>
                      </ul>
                    </div>
                    <div class="features__btn-7">
                      <nuxt-link href="/" class="tp-link-btn-3">
                        Read More
                        <span>
                          <i class="fa-regular fa-arrow-right"></i>
                        </span>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </Slide>

              <Slide class="elements__carousel-item w-img">
                <div class="features__item-7 text-center mb-30 white-bg transition-3" data-sal="slide-up"
                  data-sal-duration="1000">
                  <div class="features__icon-10">
                    <span>
                      <img src="~/assets/img/home/sap.svg" alt="logo" />
                    </span>
                  </div>
                  <div class="features__content-7">
                    <h3 class="features__title-7">SAP</h3>
                    <div class="pricing__feature-5">
                      <ul>
                        <li>SAP HANA</li>
                        <li>SAP CRM</li>
                        <li>SAP ERP</li>
                        <li>SAP HR</li>
                        <li>SAP PLM</li>
                        <li>SAP PLM</li>
                      </ul>
                    </div>
                    <div class="features__btn-7">
                      <nuxt-link href="/" class="tp-link-btn-3">
                        Read More
                        <span>
                          <i class="fa-regular fa-arrow-right"></i>
                        </span>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </Slide>

              <Slide class="elements__carousel-item w-img">
                <div class="features__item-7 text-center mb-30 white-bg transition-3" data-sal="slide-up"
                  data-sal-duration="1000">
                  <div class="features__icon-10">
                    <span>
                      <img src="~/assets/img/home/dynamic.svg" alt="logo" />
                    </span>
                  </div>
                  <div class="features__content-7">
                    <h3 class="features__title-7">Microsoft Dynamics 365</h3>
                    <div class="pricing__feature-5">
                      <ul>
                        <li>Business Central</li>
                        <li>Finance</li>
                        <li>Supply Chain Management</li>
                        <li>Sales</li>
                        <li>Customer Service</li>
                        <li>Field Service</li>
                        <li>Project Operations</li>
                        <li>Marketing</li>
                        <li>Human Resource</li>
                      </ul>
                    </div>
                    <div class="features__btn-7">
                      <nuxt-link href="/" class="tp-link-btn-3">
                        Read More
                        <span>
                          <i class="fa-regular fa-arrow-right"></i>
                        </span>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </Slide>

              <Slide class="elements__carousel-item w-img">
                <div class="features__item-7 text-center mb-30 white-bg transition-3" data-sal="slide-up"
                  data-sal-duration="1000">
                  <div class="features__icon-10">
                    <span>
                      <img src="~/assets/img/home/analytics.svg" alt="logo" />
                    </span>
                  </div>
                  <div class="features__content-7">
                    <h3 class="features__title-7">Analytics and Reporting</h3>
                    <div class="pricing__feature-5">
                      <ul>
                        <li>QlikView</li>
                        <li>Tableau</li>
                        <li>Power BI</li>
                        <li>Qlik Sense</li>
                        <li>SAP Analytics</li>
                      </ul>
                    </div>
                    <div class="features__btn-7">
                      <nuxt-link href="/" class="tp-link-btn-3">
                        Read More
                        <span>
                          <i class="fa-regular fa-arrow-right"></i>
                        </span>
                      </nuxt-link>
                    </div>
                  </div>
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