<template>
  <div>
    <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true" />
    <Breadcrumb title="Glossary" subtitle="glossary" />
    <GridArea />
    <HomeCTA />
    <FooterFour />
    <FooterEight />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import Breadcrumb from '~~/components/glossary/Breadcrumb.vue';
import GridArea from '~~/components/glossary/GridArea.vue';
import HomeCTA from "~/components/subscribe/SubscribeNow.vue";
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: { HeaderOne, Breadcrumb, GridArea, HomeCTA, FooterFour, FooterEight, BackToTop, },
  setup() {
    useHead({
      title: "Glossary - Dot Global Technologies",
    });
  },
};
</script>