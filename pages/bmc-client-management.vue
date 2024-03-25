<template>
  <div>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <service-breadcrumb />
    <BMCHelixclientmanagementAbout />
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
import ServiceBreadcrumb from '~~/components/bmc-client-management/ServiceBreadcrumb.vue';
import BMCHelixclientmanagementAbout from '~~/components/bmc-client-management/BMCHelixclientmanagementAbout.vue';
import ServicesKeyFeatures from '~~/components/bmc-client-management/ServicesKeyFeatures.vue';
import ServicesVision from '~~/components/bmc-client-management/ServicesVision.vue';
import WhyChooseDGT from '~~/components/bmc-client-management/WhyChooseDGT.vue';
import DiscoveryKeyFeatures from '~~/components/bmc-client-management/DiscoveryKeyFeatures.vue';
import Faq from '~~/components/bmc-client-management/Faq.vue';
import HomeCTA from "~/components/subscribe/SubscribeNow.vue";
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    HeaderOne,
    ServiceBreadcrumb,
    BMCHelixclientmanagementAbout,
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
      title: "BMC client management- Dot Global Technologies",
    });
  },
};
</script>