<template>
  <div>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <service-breadcrumb />
    <BMCHelixDicoveryAbout />
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
import ServiceBreadcrumb from '~~/components/bmc-helix-discovery/ServiceBreadcrumb.vue';
import BMCHelixDicoveryAbout from '~~/components/bmc-helix-discovery/BMCHelixDicoveryAbout.vue';
import ServicesKeyFeatures from '~~/components/bmc-helix-discovery/ServicesKeyFeatures.vue';
import ServicesVision from '~~/components/bmc-helix-discovery/ServicesVision.vue';
import WhyChooseDGT from '~~/components/bmc-helix-discovery/WhyChooseDGT.vue';
import DiscoveryKeyFeatures from '~~/components/bmc-helix-discovery/DiscoveryKeyFeatures.vue';
import Faq from '~~/components/bmc-helix-discovery/Faq.vue';
import HomeCTA from "~/components/subscribe/SubscribeNow.vue";
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    HeaderOne,
    ServiceBreadcrumb,
    BMCHelixDicoveryAbout,
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
      title: "BMC Helix Discovery - Dot Global Technologies",
    });
  },
};
</script>