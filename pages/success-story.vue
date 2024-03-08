<template>
  <div>
    <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true" />
    <Breadcrumb title="Success Story" subtitle="Success Story" />
    <GridArea />
    <HomeCTA />
    <FooterFour />
    <FooterEight />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import Breadcrumb from '~~/components/success-story/Breadcrumb.vue';
import GridArea from '~~/components/success-story/GridArea.vue';
import HomeCTA from "~/components/subscribe/SubscribeNow.vue";
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: { HeaderOne, Breadcrumb, GridArea, HomeCTA, FooterFour, FooterEight, BackToTop, },
  setup() {
    useHead({
      title: "Success Story - Dot Global Technologies",
    });
  },
};
</script>