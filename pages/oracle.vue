<template>
  <div>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <service-breadcrumb />
    <oracleAbout />
    <services-vision />
    <oraclecloudservices />
    <whychooseDGT />
    <Faq />
    <HomeCTA />
    <FooterFour />
    <footer-eight />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import ServiceBreadcrumb from '~~/components/oracle/ServiceBreadcrumb.vue';
import oracleAbout from '~~/components/oracle/oracleAbout.vue';
import ServicesVision from '~~/components/oracle/ServicesVision.vue';
import oraclecloudservices from '~~/components/oracle/oraclecloudservices.vue';
import whychooseDGT from '~~/components/oracle/whychooseDGT.vue';
import Faq from '~~/components/oracle/Faq.vue';
import HomeCTA from "~/components/subscribe/SubscribeNow.vue";
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    HeaderOne,
    ServiceBreadcrumb,
    oracleAbout,
    ServicesVision,
    oraclecloudservices,
    whychooseDGT,
    Faq,
    FooterFour,
    FooterEight,
    HomeCTA,
    BackToTop,
  },

  setup() {
    useHead({
      title: "Oracle- Dot Global Technologies",
    });
  },
};
</script>