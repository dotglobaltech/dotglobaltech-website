<template>
  <div>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <service-breadcrumb />
    <BMCHelixremedyforceAbout />
    <ServicesKeyFeatures />
    <services-vision />
    <WhyChooseDGT />
    <IntelligentDecision />
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
import ServiceBreadcrumb from '~~/components/bmc-helix-remedyforce/ServiceBreadcrumb.vue';
import BMCHelixremedyforceAbout from '~~/components/bmc-helix-remedyforce/BMCHelixremedyforceAbout.vue';
import ServicesKeyFeatures from '~~/components/bmc-helix-remedyforce/ServicesKeyFeatures.vue';
import ServicesVision from '~~/components/bmc-helix-remedyforce/ServicesVision.vue';
import WhyChooseDGT from '~~/components/bmc-helix-remedyforce/WhyChooseDGT.vue';
import IntelligentDecision from '~~/components/bmc-helix-remedyforce/IntelligentDecision.vue';
import DiscoveryKeyFeatures from '~~/components/bmc-helix-remedyforce/DiscoveryKeyFeatures.vue';
import Faq from '~~/components/bmc-helix-remedyforce/Faq.vue';
import HomeCTA from "~/components/subscribe/SubscribeNow.vue";
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    HeaderOne,
    ServiceBreadcrumb,
    BMCHelixremedyforceAbout,
    ServicesKeyFeatures,
    ServicesVision,
    WhyChooseDGT,
    IntelligentDecision,
    DiscoveryKeyFeatures,
    Faq,
    FooterFour,
    FooterEight,
    HomeCTA,
    BackToTop,
  },

  setup() {
    useHead({
      title: "BMC Helix Remedyforce - Dot Global Technologies",
    });
  },
};
</script>