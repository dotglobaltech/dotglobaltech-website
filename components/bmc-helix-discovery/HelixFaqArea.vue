<template>
  <section class="faq__area pt-100 pb-25">
    <div class="container">
      <div v-if="el_style" class="row">
        <div class="col-xxl-12">
            <div class="tp-section-wrapper-3 mb-50 text-center">
              <span class="tp-section-subtitle-3">Minimal &amp; Clean Design</span>
              <h3 class="tp-section-title-3">Accordion with tab</h3>
            </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div class="faq__tab-2 tp-tab mb-50">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="general-tab" data-bs-toggle="tab" data-bs-target="#general"
                  type="button" role="tab" aria-controls="general" aria-selected="true">
                  <span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.4"
                        d="M8.1105 1.19849H6.53039C2.58011 1.19849 1 2.7786 1 6.72888V11.4692C1 15.4195 2.58011 16.9996 6.53039 16.9996H11.2707C15.221 16.9996 16.8011 15.4195 16.8011 11.4692V9.8891"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M12.0917 2.00434L5.86607 8.22998C5.62906 8.467 5.39204 8.93313 5.34464 9.27286L5.00491 11.6509C4.8785 12.5121 5.48685 13.1125 6.34801 12.994L8.72608 12.6543C9.0579 12.6069 9.52403 12.3699 9.76895 12.1329L15.9946 5.90722C17.0691 4.83274 17.5747 3.58445 15.9946 2.00434C14.4145 0.42423 13.1662 0.929866 12.0917 2.00434Z"
                        stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path opacity="0.4" d="M11.2031 2.89703C11.7325 4.78527 13.2099 6.26267 15.106 6.79991"
                        stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                  </span>
                  General Questions
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="faq__item-wrapper">

        <div class="tab-content" id="faqTabContent">

          <div v-for="(item, i) in tab_faqs" :key="i" 
          :class="`tab-pane fade ${item.active ? 'show active' : ''}`"
            :id="item.id" role="tabpanel" :aria-labelledby="`${item.id}-tab`">
            <div v-for="(faq_item, index) in item.faq_content" :key="index" class="faq__item pb-95">
              <div class="row">
                <div class="col-xl-3 col-lg-3 col-md-4">
                  <div class="faq__content">
                    <h3 class="faq__title-2" v-html="faq_item.title"></h3>
                  </div>
                </div>
                <div class="col-xl-9 col-lg-9 col-md-8">
                  <div class="faq__wrapper faq__style-4 tp-accordion">
                    <div class="accordion" :id="`${faq_item.id}-${index + 1}_accordion`">
                      <single-faq v-for="(faq, i) in faq_item.accordions" :key="i" :item="faq" />
                    </div>
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
import SingleFaq from './SingleFaq.vue';
export default {
  components: { SingleFaq },
  props:{
    el_style:{
      type:Boolean,
      default:false,
    }
  },
  data() {
    return {
      tab_faqs: [
        {
          id: "general",
          active: true,
          faq_content: [
            {
              id: "general",
              title: "FAQ's",
              accordions: [
                {
                  id: "One",
                  title: "What is the cost of BMC Helix Discovery?",
                  show: true,
                  desc: "As your trusted BMC Helix Discovery Partner, we understand that pricing needs vary based on your specific requirements. Contact Dot Global Technologies today for a personalized quote tailored to your unique needs and budget.",
                  parent: "general-1_accordion",
                },
                {
                  id: "Two",
                  title: " Is BMC Helix Discovery cloud-based?",
                  desc: "Yes! BMC Helix Discovery is a SaaS-based solution that can be deployed in cloud, hybrid, or on-premises environments, offering maximum flexibility and scalability.",
                  parent: "general-1_accordion",
                },
                {
                  id: "Three",
                  title: "Do I need a BMC Helix Discovery partner?",
                  desc: "Absolutely! Partnering with a BMC Helix Discovery expert like Dot Global Technologies ensures you get the most out of your solution with customized implementation, ongoing support, and expert guidance, maximizing your return on investment. 1.Get BMC Helix Discovery Managed Services to access expert guidance and customized solutions. 2. Delegate the management of your BMC Helix Discovery solution to the best BMC Helix Discovery Third-Party Vendor in Bengaluru. 3. Enjoy BMC Helix Discovery Support Services for ongoing support and maintenance to ensure the continued success of your implementation. 4. Upskill your IT team with our BMC Helix Discovery Trainings - comprehensive training programs that empower your teams. ",
                  parent: "general-1_accordion",
                },
              ]
            },
          ],
        },
      ],
    };
  },
};
</script>
