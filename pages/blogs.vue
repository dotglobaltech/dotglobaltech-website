<template>
  <div>
    <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true" />
    <blog-breadcrumb title="Our Blog" subtitle="Blog" />
    <blog-grid-area />
    <HomeCTA />
    <FooterFour />
    <FooterEight />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import BlogBreadcrumb from '~~/components/blog-grid/BlogBreadcrumb.vue';
import BlogGridArea from '~~/components/blog-grid/BlogGridArea.vue';
import HomeCTA from "~/components/subscribe/SubscribeNow.vue";
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: { HeaderOne, BlogBreadcrumb, BlogGridArea, HomeCTA, FooterFour, FooterEight, BackToTop, },
  setup() {
    useHead({
      title: "Blogs - Dot Global Technologies",
    });
  },
};
</script>