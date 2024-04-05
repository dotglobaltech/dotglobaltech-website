<template>
  <div>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <ServiceBreadcrumb />
    <awsAbout />
    <CloudMigration />
    <WhyChooseUs />
    <BenefitsofAWS />
    <UnlockAWSFullest />
    <Faq /> 
    <HomeCTA />
    <FooterFour />
    <footer-eight />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import ServiceBreadcrumb from '~~/components/aws/ServiceBreadcrumb.vue';
import awsAbout from '~~/components/aws/awsAbout.vue';
import CloudMigration from '~~/components/aws/CloudMigration.vue';
import WhyChooseUs from '~~/components/aws/WhyChooseUs.vue';
import BenefitsofAWS from '~~/components/aws/BenefitsofAWS.vue';
import UnlockAWSFullest from '~~/components/aws/UnlockAWSFullest.vue';
import Faq from '~~/components/aws/Faq.vue';
import HomeCTA from "~/components/subscribe/SubscribeNow.vue";
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    HeaderOne,
    ServiceBreadcrumb,
    awsAbout,
    CloudMigration,
    WhyChooseUs,
    BenefitsofAWS,
    UnlockAWSFullest,
    Faq,
    HomeCTA,
    FooterFour,
    FooterEight,
    BackToTop,
  },

  setup() {
    useHead({
      title: "AWS - Dot Global Technologies",
    });
  },
};
</script>