<template>
  <div>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <service-breadcrumb/>
    <home-services :style_2="true" />
    <services-about/>
    <services-vision/>
    <home-portfolio :style_2="true" />
    <services-support-area/>
    <FooterFour />
    <footer-eight/>
    <back-to-top/>
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import ServiceBreadcrumb from '~~/components/breadcrumb/ServiceBreadcrumb.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';
import HomeServices from '~~/components/services/HomeServices.vue';
import ServicesAbout from '~~/components/abouts/ServicesAbout.vue';
import ServicesVision from '~~/components/vision/ServicesVision.vue';
import HomePortfolio from '~~/components/portfolios/HomePortfolio.vue';
import ServicesSupportArea from '~~/components/supports/ServicesSupportArea.vue';
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';

export default {
  components: {
    HeaderOne,
    ServiceBreadcrumb,
    BackToTop,
    HomeServices,
    ServicesAbout,
    ServicesVision,
    HomePortfolio,
    ServicesSupportArea,
    FooterFour,
    FooterEight,
  },
  setup() {
    useHead({
      title: "Services - Creative Agency & Portfolio Vue Nuxt 3 Template",
    });
  },
};
</script>