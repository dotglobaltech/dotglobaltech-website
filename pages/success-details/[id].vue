<template>
    <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true" />
    <DetailsBreadcrumb v-if="details !== null" :pageTitle="details[0].attributes.title" pageDesc="News and Insights" />
    <div>
        <div v-if="details !== null">
            <SuccessDetails v-bind:detailsContent="details" />
        </div>
        <HomeCTA />
        <FooterFour />
        <footer-eight />
        <back-to-top />
    </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import DetailsBreadcrumb from '~~/components/success-story/DetailsBreadcrumb.vue';
import SuccessDetails from '~~/components/success-story/SuccessDetails.vue';
import HomeCTA from "~/components/subscribe/SubscribeNow.vue";
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';
import axios from 'axios';
import { useRoute } from 'vue-router'
export default {
    components: {
        HeaderOne,
        DetailsBreadcrumb,
        SuccessDetails,
        HomeCTA,
        FooterFour,
        FooterEight,
        BackToTop,
    },
    data() {
        return {
            details: null
        }
    },
    created: async function () {
        const route = useRoute();
        const slug = route.params.id;
        const reaponse = await axios.get(`https://cms.dotglobaltech.com/api/successstories?filters[slug][$eq]=${slug}&populate=*`, { params: { slug } })
        this.details = reaponse.data.data;
    }
};
</script>