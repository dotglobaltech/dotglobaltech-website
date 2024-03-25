<template>
  <div>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <service-breadcrumb />
    <BMCHelixcontrolMAbout />
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
import ServiceBreadcrumb from '~~/components/bmc-control-m/ServiceBreadcrumb.vue';
import BMCHelixcontrolMAbout from '~~/components/bmc-control-m/BMCHelixcontrolMAbout.vue';
import ServicesKeyFeatures from '~~/components/bmc-control-m/ServicesKeyFeatures.vue';
import ServicesVision from '~~/components/bmc-control-m/ServicesVision.vue';
import WhyChooseDGT from '~~/components/bmc-control-m/WhyChooseDGT.vue';
import DiscoveryKeyFeatures from '~~/components/bmc-control-m/DiscoveryKeyFeatures.vue';
import Faq from '~~/components/bmc-control-m/Faq.vue';
import HomeCTA from "~/components/subscribe/SubscribeNow.vue";
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    HeaderOne,
    ServiceBreadcrumb,
    BMCHelixcontrolMAbout,
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
      title: "BMC Control-M - Dot Global Technologies",
    });
  },
};
</script>