<template>
  <div>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <service-breadcrumb/>
    <home-services :style_2="true" />
    <BMCServicesAbout/>
    <services-vision/>
    <home-portfolio :style_2="true" />
    <services-support-area/>
    <CertificationsAwards />
    <TrustedClients />
    <HomeCTA />
    <FooterFour />
    <footer-eight/>
    <back-to-top/>
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import ServiceBreadcrumb from '~~/components/breadcrumb/ServiceBreadcrumb.vue';
import HomeServices from '~~/components/bmc-helix-itsm/HomeServices.vue';
import BMCServicesAbout from '~~/components/bmc-helix-itsm/BMCServicesAbout.vue';
import ServicesVision from '~~/components/vision/ServicesVision.vue';
import HomePortfolio from '~~/components/portfolios/HomePortfolio.vue';
import ServicesSupportArea from '~~/components/supports/ServicesSupportArea.vue';
import CertificationsAwards from '~/components/index/CertificationsAwards.vue';
import TrustedClients from '~/components/index/TrustedClients.vue'
import HomeCTA from "~/components/index/HomeCTA.vue";
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    HeaderOne,
    ServiceBreadcrumb,
    HomeServices,
    BMCServicesAbout,
    ServicesVision,
    HomePortfolio,
    ServicesSupportArea,
    FooterFour,
    FooterEight,
    TrustedClients,
    CertificationsAwards,
    HomeCTA,
    BackToTop,
  },

  setup() {
    useHead({
      title: "Services - Creative Agency & Portfolio Vue Nuxt 3 Template",
    });
  },
};
</script>