<template>
  <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true" />
  <Breadcrumb title="Success Stories Category" subtitle="Success Stories Category" />
  <div>
    <div v-if="category !== null">
      <CategoryGridContents v-bind:detailsContent="category" />
    </div>
    <HomeCTA />
    <FooterFour />
    <footer-eight />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import Breadcrumb from '~~/components/success-story/Breadcrumb.vue';
import CategoryGridContents from '~~/components/success-story/CategoryGridContents.vue';
import HomeCTA from "~~/components/subscribe/SubscribeNow.vue";
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';
import axios from 'axios';
import { useRoute } from 'vue-router'
export default {
  components: {
    HeaderOne,
    Breadcrumb,
    CategoryGridContents,
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
        const reaponse = await axios.get(`https://cms.dotglobaltech.com/api/successcategories?filters[slug][$eq]=${slug}&populate=deep,5`, { params: { slug } })
        this.category = reaponse.data.data.sort((b, a) => a.id - b.id);
        this.rows = this.category?.length;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>