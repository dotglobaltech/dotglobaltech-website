<template>
  <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true" />
  <blog-breadcrumb title="Case Studies Category" subtitle="Blog" />
  <div>
    <div v-if="category !== null">
      <CaseStudiesCategoryArea v-bind:detailsContent="category" />
    </div>
    <HomeCTA />
    <FooterFour />
    <footer-eight />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import BlogBreadcrumb from '~~/components/case-studies/BlogBreadcrumb.vue';
import CaseStudiesCategoryArea from '~~/components/case-studies/CaseStudiesCategoryArea.vue';
import HomeCTA from "~~/components/subscribe/SubscribeNow.vue";
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';
import axios from 'axios';
import { useRoute } from 'vue-router'
export default {
  components: {
    HeaderOne,
    BlogBreadcrumb,
    CaseStudiesCategoryArea,
    HomeCTA,
    FooterFour,
    FooterEight,
    BackToTop,
  },
  data() {
    return {
      category: null,
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const route = useRoute();
        const slug = route.params.id;
        const reaponse = await axios.get(`https://cms.dotglobaltech.com/api/case-study-categories?filters[slug][$eq]=${slug}&populate=deep,5`, { params: { slug } })
        this.category = reaponse.data.data.sort((b, a) => a.id - b.id);
        this.rows = this.category?.length;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>