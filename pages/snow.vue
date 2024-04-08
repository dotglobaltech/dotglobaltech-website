<template>
  <div>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <ServiceBreadcrumb />
    <ServicenowAbout />
    <ServicesKeyFeatures />
    <ServicesVision />
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
import ServiceBreadcrumb from "~~/components/servicenow/ServiceBreadcrumb.vue";
import ServicenowAbout from '~~/components/servicenow/ServicenowAbout.vue';
import ServicesKeyFeatures from '~~/components/servicenow/ServicesKeyFeatures.vue';
import ServicesVision from '~~/components/servicenow/ServicesVision.vue';
import WhyChooseDGT from '~~/components/servicenow/WhyChooseDGT.vue';
import DiscoveryKeyFeatures from '~~/components/servicenow/DiscoveryKeyFeatures.vue';
import Faq from '~~/components/servicenow/Faq.vue';
import HomeCTA from "~/components/subscribe/SubscribeNow.vue";
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    HeaderOne,
    ServiceBreadcrumb,
    ServicenowAbout,
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
      title: "BMC  - Dot Global Technologies",
    });
  },
};
</script>