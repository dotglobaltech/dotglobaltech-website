<template>
  <div>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <service-breadcrumb />
    <BMCHelixsmartreportingAbout />
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
import ServiceBreadcrumb from '~~/components/bmc-smart-reporting/ServiceBreadcrumb.vue';
import BMCHelixsmartreportingAbout from '~~/components/bmc-smart-reporting/BMCHelixsmartreportingAbout.vue';
import ServicesKeyFeatures from '~~/components/bmc-smart-reporting/ServicesKeyFeatures.vue';
import ServicesVision from '~~/components/bmc-smart-reporting/ServicesVision.vue';
import WhyChooseDGT from '~~/components/bmc-smart-reporting/WhyChooseDGT.vue';
import DiscoveryKeyFeatures from '~~/components/bmc-smart-reporting/DiscoveryKeyFeatures.vue';
import Faq from '~~/components/bmc-smart-reporting/Faq.vue';
import HomeCTA from "~/components/subscribe/SubscribeNow.vue";
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    HeaderOne,
    ServiceBreadcrumb,
    BMCHelixsmartreportingAbout,
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
      title: "BMC smart reporting - Dot Global Technologies",
    });
  },
};
</script>