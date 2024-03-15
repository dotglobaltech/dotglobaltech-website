<template>
  <div>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <service-breadcrumb/>
    <home-services :style_2="true" />
    <services-vision/>
    <RemedyFaqArea />
    <HomeCTA />
    <FooterFour />
    <footer-eight/>
    <back-to-top/>
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import ServiceBreadcrumb from '~~/components/bmc-helix-remedyforce/ServiceBreadcrumb.vue';
import HomeServices from '~~/components/bmc-helix-remedyforce/HomeServices.vue';
import ServicesVision from '~~/components/bmc-helix-remedyforce/ServicesVision.vue';
import RemedyFaqArea from '~~/components/bmc-helix-remedyforce/RemedyFaqArea.vue';
import HomeCTA from "~/components/subscribe/SubscribeNow.vue";
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';


export default {
  components: {
    HeaderOne,
    ServiceBreadcrumb,
    HomeServices,
    ServicesVision,
    RemedyFaqArea,
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