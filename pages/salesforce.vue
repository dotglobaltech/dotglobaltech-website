<template>
  <div>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <service-breadcrumb />
    <salesforceAbout />
    <WhyChooseDGT />
    <services-vision />
    <Faq />
    <HomeCTA />
    <FooterFour />
    <footer-eight />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import ServiceBreadcrumb from '~~/components/salesforce/ServiceBreadcrumb.vue';
import salesforceAbout from '~~/components/salesforce/salesforceAbout.vue';
import WhyChooseDGT from '~~/components/salesforce/WhyChooseDGT.vue';
import ServicesVision from '~~/components/salesforce/ServicesVision.vue';
import Faq from '~~/components/salesforce/Faq.vue';
import HomeCTA from "~/components/subscribe/SubscribeNow.vue";
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    HeaderOne,
    ServiceBreadcrumb,
    salesforceAbout,
    ServicesVision,
    WhyChooseDGT,
    Faq,
    FooterFour,
    FooterEight,
    HomeCTA,
    BackToTop,
  },

  setup() {
    useHead({
      title: "Salesforce - Dot Global Technologies",
    });
  },
};
</script>