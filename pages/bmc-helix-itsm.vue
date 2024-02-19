<template>
  <div>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <service-breadcrumb/>
    <home-services :style_2="true" />
    <services-about/>
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
import ServiceBreadcrumb from '~~/components/breadcrumb/ServiceBreadcrumb.vue';
import HomeServices from '~~/components/bmc-helix-itsm/HomeServices.vue';
import ServicesAbout from '~~/components/abouts/ServicesAbout.vue';
import ServicesVision from '~~/components/vision/ServicesVision.vue';
import HomePortfolio from '~~/components/portfolios/HomePortfolio.vue';
import ServicesSupportArea from '~~/components/supports/ServicesSupportArea.vue';
import HomeCTA from "~/components/index/HomeCTA.vue";
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    HeaderOne,
    ServiceBreadcrumb,
    HomeServices,
    ServicesAbout,
    ServicesVision,
    HomePortfolio,
    ServicesSupportArea,
    FooterFour,
    FooterEight,
    BackToTop,
  },

  setup() {
    useHead({
      title: "Services - Creative Agency & Portfolio Vue Nuxt 3 Template",
    });
  },
};
</script>