<template>
  <div>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <service-breadcrumb/>
    <BMCHelixDicoveryAbout/>
    <home-services :style_2="true" />
    <services-vision/>
    <HelixFaqArea />
    <HomeCTA />
    <FooterFour />
    <footer-eight/>
    <back-to-top/>
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import ServiceBreadcrumb from '~~/components/bmc-helix-discovery/ServiceBreadcrumb.vue';
import BMCHelixDicoveryAbout from '~~/components/bmc-helix-discovery/BMCHelixDicoveryAbout.vue';
import HomeServices from '~~/components/bmc-helix-discovery/HomeServices.vue';
import ServicesVision from '~~/components/bmc-helix-discovery/ServicesVision.vue';
import HelixFaqArea from '~~/components/bmc-helix-discovery/HelixFaqArea.vue';
import HomeCTA from "~/components/subscribe/SubscribeNow.vue";
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    HeaderOne,
    ServiceBreadcrumb,
    BMCHelixDicoveryAbout,
    HomeServices,
    ServicesVision,
    HelixFaqArea,
    FooterFour,
    FooterEight,
    HomeCTA,
    BackToTop,
  },

  setup() {
    useHead({
      title: "BMC Helix Discovery - Dot Global Technologies",
    });
  },
};
</script>