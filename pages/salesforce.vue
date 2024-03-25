<template>
  <div>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <service-breadcrumb />
    <salesforceAbout />
    <ServicesKeyFeatures />
    <services-vision />
    <WhyChooseDGT />
    <DiscoveryKeyFeatures />
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
import ServicesKeyFeatures from '~~/components/salesforce/ServicesKeyFeatures.vue';
import ServicesVision from '~~/components/salesforce/ServicesVision.vue';
import WhyChooseDGT from '~~/components/salesforce/WhyChooseDGT.vue';
import DiscoveryKeyFeatures from '~~/components/salesforce/DiscoveryKeyFeatures.vue';
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
    ServicesKeyFeatures,
    ServicesVision,
    WhyChooseDGT,
    DiscoveryKeyFeatures,
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