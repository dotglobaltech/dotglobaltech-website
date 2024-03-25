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
import ServiceBreadcrumb from '~~/components/aws-main/ServiceBreadcrumb.vue';
import BMCHelixDicoveryAbout from '~~/components/aws-main/BMCHelixDicoveryAbout.vue';
import ServicesKeyFeatures from '~~/components/aws-main/ServicesKeyFeatures.vue';
import ServicesVision from '~~/components/aws-main/ServicesVision.vue';
import WhyChooseDGT from '~~/components/aws-main/WhyChooseDGT.vue';
import DiscoveryKeyFeatures from '~~/components/aws-main/DiscoveryKeyFeatures.vue';
import Faq from '~~/components/aws-main/Faq.vue';
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