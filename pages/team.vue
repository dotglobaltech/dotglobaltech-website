<template>
  <div>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <team-breadcrumb
      title="We’ve Most Talented Team Members"
      subtitle="Team Members"
    />
    <team-area />
    <HomeCTA />
    <FooterFour />
    <footer-eight/>
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import TeamBreadcrumb from "~~/components/breadcrumb/CommonBreadcrumb.vue";
import TeamArea from "~~/components/teams/TeamArea.vue";
import HomeCTA from "~/components/subscribe/SubscribeNow.vue";
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from "~~/layouts/footers/component/BackToTop.vue";

export default {
  components: {
    HeaderOne,
    TeamBreadcrumb,
    TeamArea,
    HomeCTA,
    FooterFour,
    FooterEight,
    BackToTop,
  },
  setup() {
    useHead({
      title: "Team - Creative Agency & Portfolio Vue Nuxt 3 Template",
    });
  },
};
</script>
