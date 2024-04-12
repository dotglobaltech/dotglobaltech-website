<template>
  <div>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <service-breadcrumb />
    <BMCAbout />
    <services-vision />
    <WhyChooseDGT />
    <Faq />
    <HomeCTA />
    <FooterFour />
    <footer-eight />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import ServiceBreadcrumb from '~~/components/bmc/ServiceBreadcrumb.vue';
import BMCAbout from '~~/components/bmc/BMCAbout.vue';
import ServicesVision from '~~/components/bmc/ServicesVision.vue';
import WhyChooseDGT from '~~/components/bmc/WhyChooseDGT.vue';
import Faq from '~~/components/bmc/Faq.vue';
import HomeCTA from "~/components/subscribe/SubscribeNow.vue";
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    HeaderOne,
    ServiceBreadcrumb,
    BMCAbout,
    ServicesVision,
    WhyChooseDGT,
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