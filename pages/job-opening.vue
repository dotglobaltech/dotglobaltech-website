<template>
  <div>
    <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true" />
    <job-section-title/>
    <job-thumb-area/>
    <job-list :style_2="true"/>
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
import JobList from '~~/components/job/JobList.vue';
import HomeCTA from "~/components/subscribe/SubscribeNow.vue";
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    HeaderOne,
    JobSectionTitle,
    JobThumbArea,
    JobList,
    HomeCTA,
    FooterFour,
    FooterEight,
    BackToTop, 
  },
  setup() {
    useHead({
      title: "Job - Dot Global Technologies",
    });
  },
};
</script>
