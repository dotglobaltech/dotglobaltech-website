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
        <div class="col-xl-6 col-lg-6">
          <div class="contact__wrapper-2">
            <div class="contact__content-2">
              <h3 class="contact-title">Ready to collaborate?</h3>
              <h5>We would love to hear from you!</h5>
              <p>At Dot Global Technologies, we are always excited to connect with new people and companies who share our
                passion for innovation. Do you have a specific project in mind or just some general questions? Do not
                hesitate to reach out!
              </p>
              <p>Quick Response Guaranteed We value your time and promise to respond to your messages within ONE BUSINESS
                DAY.
              </p>
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
                      <h5>Talk to a Real Person</h5>
                      <p>Feeling stuck or have a burning question? Give us a call! Our friendly team is available to
                        answer your questions and provide support.
                      </p>
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
                      <h5>Expert Consultation</h5>
                      <p>Need some technical guidance for your project? We offer expert consultations to help you navigate
                        the complexity and find the best solution.</p>
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
                      <h5>Free Estimates</h5>
                      <p>Got a project idea but unsure of the cost? No problem! Let us know the details, and we will
                        happily provide a free, no-obligation estimate.
                      </p>
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
                      <h5>Schedule a Meeting</h5>
                      <p>Ready to take things to the next level? Schedule an appointment to meet with our team and discuss your project in more detail.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="contact__info-box-refund">
                <p>So, what are you waiting for? Drop us a line, call us, or book an appointment today! Looking forward to a long-lasting relationship built on trust. We are excited to bring your ideas to life.</p>
                <!-- <p>See our Refund <nuxt-link href="/policy">Policies</nuxt-link> or
                  <nuxt-link href="/faq">FAQ</nuxt-link>
                </p> -->
              </div>
            </div>

          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
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