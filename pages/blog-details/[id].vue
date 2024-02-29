<template>
  <div>
    <header-one :header_solid="true" :commonOffcanvas="true" />
    <blog-details-breadcrumb />

    <div v-if="details !== null">
      <blog-details-area v-bind:detailsContent="details" />
    </div>

    <FooterFour />
    <footer-eight />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import BlogDetailsBreadcrumb from '~~/components/breadcrumb/BlogDetailsBreadcrumb.vue';
import BlogDetailsArea from '~~/components/blog-details/BlogDetailsArea.vue';
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: { HeaderOne, BackToTop, BlogDetailsBreadcrumb, BlogDetailsArea, FooterFour, FooterEight, BackToTop, },
  setup() {
    useHead({
      title: "Blog Details - Creative Agency & Portfolio Vue Nuxt 3 Template",
    });
  },
  data() {
    return {
      details: null,
    }
  },
  created: async function () {
    const { slug } = this.$route.params
    const reaponse = await axios.get(`https://evolvestrapi.pbwebvision.in/api/blogs?filters[slug][$eq]=${slug}&populate=*`, { params: { slug } })
    this.details = reaponse.data.data.sort((b, a) => a.id - b.id);
    const pageData = this.details.length > 0 ? this.details[0] : {};
  },
};
</script>