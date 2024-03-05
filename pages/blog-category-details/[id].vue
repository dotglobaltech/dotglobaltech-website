<template>
    <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true" />
    <blog-details-breadcrumb />
    <div>
        <div v-if="category !== null">
            <BlogGridCategoryArea v-bind:detailsContent="category" />
        </div>
        <HomeCTA />
        <FooterFour />
        <footer-eight />
        <back-to-top />
    </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import BlogDetailsBreadcrumb from '~~/components/blog-grid/BlogDetailsBreadcrumb.vue';
import BlogGridCategoryArea from '~~/components/blog-grid/BlogGridCategoryArea.vue';
import HomeCTA from "~/components/subscribe/SubscribeNow.vue";
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';
import axios from 'axios';
import { useRoute } from 'vue-router'
export default {
    components: {
        HeaderOne,
        BlogDetailsBreadcrumb,
        BlogGridCategoryArea,
        HomeCTA,
        FooterFour,
        FooterEight,
        BackToTop,
    },
    data() {
        return {
            category: null,
        }
    },
    created: async function () {
        const route = useRoute();
        const slug = route.params.id;
        const reaponse = await axios.get(`https://cms.dotglobaltech.com/api/blogs?filters[slug][$eq]=${slug}&populate=deep,5`, { params: { slug } })
        this.details = reaponse.data.data;
    }
};
</script>