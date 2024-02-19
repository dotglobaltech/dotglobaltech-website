<template>
  <section class="contact__area form-bg-4 pb-120 pt-110">
    <div class="container">
      <!-- <div class="row justify-content-center">
          <div class="col-xl-7 col-lg-8">
            <div class="tp-section-wrapper-2 text-center mb-70">
              <h3 class="tp-section-title-2">Can’t find what you’re looking for?</h3>
            </div>
          </div>
        </div> -->
      <div class="row row contact__form-3">
        <div class="col-xl-5 col-lg-5">
          <div class="contact__wrapper-2">
            <div class="contact__content-2">
              <h3 class="contact-title">Let’s Work Together</h3>
              <p>We love working with new people and companies. please take a moment to tell us about your project. Your
                messages will be responded to within ONE BUSINESS DAY.</p>
            </div>
            <div class="contact__info">
              <div class="row align-items-center">
                <div class="col-xl-6 col-xl-6 col-lg-6 col-md-6">
                  <div class="contact__info-item">
                    <div class="contact__info-icon">
                      <span>
                        <img src="~/assets/img/home/24-hours.png" alt="" />
                      </span>
                    </div>
                    <div class="contact__info-content">
                      <h5>Call Enquiry Assistance</h5>
                      <p>We are always available on call to assist you with any questions you may have.</p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-xl-6 col-lg-6 col-md-6">
                  <div class="contact__info-item">
                    <div class="contact__info-icon">
                      <span>
                        <img src="~/assets/img/home/schedule.png" alt="" />
                      </span>
                    </div>
                    <div class="contact__info-content">
                      <h5>Schedule Your Appointment</h5>
                      <p>We assist you in scheduling appointments whenever you wish to meet us.</p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-xl-6 col-lg-6 col-md-6">
                  <div class="contact__info-item">
                    <div class="contact__info-icon">
                      <span>
                        <img src="~/assets/img/home/clarification.png" alt="" />
                      </span>
                    </div>
                    <div class="contact__info-content">
                      <h5>Project Consultation</h5>
                      <p>We provide you with all technical consultations for your project.</p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-xl-6 col-lg-6 col-md-6">
                  <div class="contact__info-item">
                    <div class="contact__info-icon">
                      <span>
                        <img src="~/assets/img/home/project-management.png" alt="" />
                      </span>
                    </div>
                    <div class="contact__info-content">
                      <h5>Project Estimation</h5>
                      <p>You come to us with your project, and we do all of the planning and costing for you.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="contact__info-box-refund">
                <p>See our Refund <nuxt-link href="/policy">Policies</nuxt-link> or
                  <nuxt-link href="/faq">FAQ</nuxt-link>
                </p>
              </div>
            </div>

          </div>
        </div>
        <div class="col-xl-7 col-lg-7">
          <div class="contact__form-3 ml-30">
            <!-- form start -->
            <help-center-form />
            <!-- form end -->
            <p class="ajax-response"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script>
import HelpCenterForm from '../forms/HelpCenterForm.vue';

export default {
  components: { HelpCenterForm },

}
</script>