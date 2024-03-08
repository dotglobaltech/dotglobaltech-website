<template>
  <div>
    <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true" />
    <Breadcrumb title="eBook" subtitle="eBook" />
    <GridArea />
    <HomeCTA />
    <FooterFour />
    <FooterEight />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import Breadcrumb from '~~/components/ebook/Breadcrumb.vue';
import GridArea from '~~/components/ebook/GridArea.vue';
import HomeCTA from "~/components/subscribe/SubscribeNow.vue";
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: { HeaderOne, Breadcrumb, GridArea, HomeCTA, FooterFour, FooterEight, BackToTop, },
  setup() {
    useHead({
      title: "eBook - Dot Global Technologies",
    });
  },
};
</script>