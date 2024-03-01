<template>
  <div>
    <header-one :header_solid="true" :commonOffcanvas="true" />
    <blog-breadcrumb title="Our Blog" subtitle="Blog" />
    <blog-grid-area />
    <FooterFour />
    <footer-eight />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import Footer from '~~/layouts/footers/Footer.vue';
import BlogBreadcrumb from '~~/components/breadcrumb/BlogBreadcrumb.vue';
import BlogGridArea from '~~/components/blogs/BlogGridArea.vue';
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: { HeaderOne, Footer, BlogBreadcrumb, BlogGridArea, FooterFour, FooterEight, BackToTop, },
  setup() {
    useHead({
      title: "Blog - Creative Agency & Portfolio Vue Nuxt 3 Template",
    });
  },
};
</script>