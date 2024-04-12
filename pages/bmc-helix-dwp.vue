<template>
  <div>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <service-breadcrumb />
    <BMCHelixDWPAbout />
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
import ServiceBreadcrumb from '~~/components/bmc-helix-dwp/ServiceBreadcrumb.vue';
import BMCHelixDWPAbout from '~~/components/bmc-helix-dwp/BMCHelixDWPAbout.vue';
import WhyChooseDGT from '~~/components/bmc-helix-dwp/WhyChooseDGT.vue';
import DiscoveryKeyFeatures from '~~/components/bmc-helix-dwp/DiscoveryKeyFeatures.vue';
import Faq from '~~/components/bmc-helix-dwp/Faq.vue';
import HomeCTA from "~/components/subscribe/SubscribeNow.vue";
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    HeaderOne,
    ServiceBreadcrumb,
    BMCHelixDWPAbout,
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
      title: "BMC Helix DWP - Dot Global Technologies",
    });
  },
};
</script>