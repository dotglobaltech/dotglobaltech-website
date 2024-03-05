<template>
  <div>
    <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true" />
    <job-section-title/>
    <job-thumb-area/>
    <job-area :style_2="true"/>
    <HomeCTA />
    <FooterFour />
    <FooterEight />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import JobSectionTitle from '~~/components/job/JobSectionTitle.vue';
import JobThumbArea from '~~/components/job/JobThumbArea.vue';
import JobArea from '~~/components/job-position/JobArea.vue';
import HomeCTA from "~/components/subscribe/SubscribeNow.vue";
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    HeaderOne,
    JobSectionTitle,
    JobThumbArea,
    JobArea,
    HomeCTA,
    FooterFour,
    FooterEight,
    BackToTop, 
  },
  setup() {
    useHead({
      title: "Job - ",
    });
  },
};
</script>
