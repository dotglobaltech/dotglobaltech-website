<template>
  <div>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <service-breadcrumb/>
    <home-services :style_2="true" />
    <BMCServicesAbout/>
    <services-vision/>
    <home-portfolio :style_2="true" />
    <services-support-area/>
    <HomeCTA />
    <FooterFour />
    <footer-eight/>
    <back-to-top/>
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import ServiceBreadcrumb from '~~/components/react-native/ServiceBreadcrumb.vue';
import HomeServices from '~~/components/react-native/HomeServices.vue';
import BMCServicesAbout from '~~/components/react-native/BMCServicesAbout.vue';
import ServicesVision from '~~/components/react-native/ServicesVision.vue';
import HomePortfolio from '~~/components/react-native/HomePortfolio.vue';
import ServicesSupportArea from '~~/components/react-native/ServicesSupportArea.vue';
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