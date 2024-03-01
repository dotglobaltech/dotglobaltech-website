<template>
  <div>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <about-top-bar />
    <about-text-area />
    <personal-port-awards :style_2="true" />
    <about-faqs />
    <home-teams :style_2="true" />
    <agency-brands :spacing="true" :style_2="true" />
    <HomeCTA />
    <FooterFour />
    <footer-eight/>
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import AboutTopBar from "~~/components/abouts/about-page-com/AboutTopBar.vue";
import AboutTextArea from "~~/components/abouts/about-page-com/AboutTextArea.vue";
import PersonalPortAwards from "~~/components/awards/PersonalPortAwards.vue";
import AboutFaqs from "~~/components/faqs/AboutFaqs.vue";
import HomeTeams from "~~/components/teams/HomeTeams.vue";
import AgencyBrands from '~~/components/brands/AgencyBrands.vue';
import HomeCTA from "~/components/subscribe/SubscribeNow.vue";
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from "~~/layouts/footers/component/BackToTop.vue";

export default {
  components: {
    HeaderOne,
    BackToTop,
    AboutTopBar,
    AboutTextArea,
    PersonalPortAwards,
    AboutFaqs,
    HomeTeams,
    AgencyBrands,
    HomeCTA,
    FooterFour,
    FooterEight,
  },
  setup() {
    useHead({
      title: "About - Creative Agency & Portfolio Vue Nuxt 3 Template",
    });
  },
};
</script>
