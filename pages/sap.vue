<template>
  <div>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <service-breadcrumb />
    <sapAbout />
    <ServicesKeyFeatures />
    <services-vision />
    <DiscoveryKeyFeatures />
    <WhyChooseDGT />
    <CompetitiveAdvantage />
    <Faq />
    <HomeCTA />
    <FooterFour />
    <footer-eight />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import ServiceBreadcrumb from '~~/components/sap/ServiceBreadcrumb.vue';
import sapAbout from '~~/components/sap/sapAbout.vue';
import ServicesKeyFeatures from '~~/components/sap/ServicesKeyFeatures.vue';
import ServicesVision from '~~/components/sap/ServicesVision.vue';
import DiscoveryKeyFeatures from '~~/components/sap/DiscoveryKeyFeatures.vue';
import WhyChooseDGT from '~~/components/sap/WhyChooseDGT.vue';
import CompetitiveAdvantage from '~~/components/sap/CompetitiveAdvantage.vue';
import Faq from '~~/components/sap/Faq.vue';
import HomeCTA from "~/components/subscribe/SubscribeNow.vue";
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    HeaderOne,
    ServiceBreadcrumb,
    sapAbout,
    ServicesKeyFeatures,
    ServicesVision,
    WhyChooseDGT,
    DiscoveryKeyFeatures,
    CompetitiveAdvantage,
    Faq,
    FooterFour,
    FooterEight,
    HomeCTA,
    BackToTop,
  },

  setup() {
    useHead({
      title: "sap - Dot Global Technologies",
    });
  },
};
</script>