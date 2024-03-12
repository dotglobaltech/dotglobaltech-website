<template>
    <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true" />
    <div>
        <!-- <div v-if="details !== null">
            <JobDetailsContent v-bind:detailsContent="details" />
        </div> -->
        <HomeCTA />
        <FooterFour />
        <footer-eight />
        <back-to-top />
    </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
// import JobDetailsContent from '~~/components/job/JobDetailsContent.vue';
import HomeCTA from "~/components/subscribe/SubscribeNow.vue";
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';
import axios from 'axios';
import { useRoute } from 'vue-router'
export default {
    components: {
        HeaderOne,
        // JobDetailsContent,
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
        const reaponse = await axios.get(`https://cms.dotglobaltech.com/api/job-listings?filters[slug][$eq]=${slug}&populate=*`, { params: { slug } })
        this.details = reaponse.data.data;
    }
};
</script>