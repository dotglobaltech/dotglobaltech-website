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
                  title: "What is BMC Helix Remedyforce?",
                  show: true,
                  desc: "BMC Helix Remedyforce is a comprehensive IT service management solution that easily scales to meet the needs of mid-sized businesses.It integrates seamlessly with Salesforce to combine IT operations management (ITOM) and cognitive capabilities, ensuring improved security, compliance, and productivity for your business.",
                  parent: "general-1_accordion",
                },
                {
                  id: "Two",
                  title: "What is BMC Helix Remedyforce Used For?",
                  desc: "BMC Helix Remedyforce serves various purposes, including 1.Ticket tracking and incident management 2. Release management and change management 3. Service request fulfillment and knowledge management 4. Service level management and asset management",
                  parent: "general-1_accordion",
                },
                {
                  id: "Three",
                  title: "How Much Does BMC Helix Remedyforce Cost?",
                  desc: "As a BMC Helix Remedyforce third-party vendor, we analyze our client's unique needs and requirements and offer custom BMC Helix Remedyforce pricing based on your needs. Contact us today for a free consultation and a tailored quote,",
                  parent: "general-1_accordion",
                },
                {
                  id: "Four",
                  title: "Is BMC Helix Remedyforce Cloud-based?",
                  desc: "BMC Helix Remedyforce is a cloud-based solution built on the Salesforce cloud platform. As a user-friendly, cloud-based solution, it eliminates the need for on-premise infrastructure and allows easy access from anywhere, anytime.",
                  parent: "general-1_accordion",
                },
                {
                  id: "Five",
                  title: "Why Choose Dot Global Technologies for BMC Helix Remedyforce Support Services?",
                  desc: "Our certified BMC Helix Remedyforce consultant team provides custom-built solutions based on your unique operational needs. We offer comprehensive BMC Helix Remedyforce support services, including 1. Implementation and customization 2. BMC Helix Remedyforce Training and ongoing support 3. Maintenance and troubleshooting As a trusted BMC Helix Remedyforce Partner, we are committed to your success and helping you maximize your ITSM investment.",
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
