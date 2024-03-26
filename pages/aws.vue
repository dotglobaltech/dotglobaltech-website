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
import ServiceBreadcrumb from '~~/components/aws/ServiceBreadcrumb.vue';
import BMCHelixDicoveryAbout from '~~/components/aws/BMCHelixDicoveryAbout.vue';
import ServicesKeyFeatures from '~~/components/aws/ServicesKeyFeatures.vue';
import ServicesVision from '~~/components/aws/ServicesVision.vue';
import WhyChooseDGT from '~~/components/aws/WhyChooseDGT.vue';
import DiscoveryKeyFeatures from '~~/components/aws/DiscoveryKeyFeatures.vue';
import Faq from '~~/components/aws/Faq.vue';
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
      title: "AWS- Dot Global Technologies",
    });
  },
};
</script>