<template>
  <LayoutOne>
    <HomeHero />
    <CoreServices :style_2="true" />
    <WhatWeDo />
    <SoultionSlider />
    <OurSolutions />
    <GlobalBrands />
    <CertificationsAwards />
    <EmergingTechnologies />
    <TrustedClients />
    <!-- <FunFact /> -->
    <WhyChooseUs />
    <LetsWorkTogether />
    <LocateUsHome />
    <!-- <LocateUs /> -->
    <HomeCTA />
  </LayoutOne>
</template>

<script setup>
import LayoutOne from '~/layouts/LayoutOne.vue';
import HomeHero from '~/components/index/HomeHero.vue'
import CoreServices from '~~/components/index/CoreServices.vue';
import WhatWeDo from "~/components/index/WhatWeDo.vue";
import SoultionSlider from "~/components/index/SoultionSlider.vue";
import GlobalBrands from "~/components/index/GlobalBrands.vue";
import OurSolutions from "~/components/index/OurSolutions.vue";
import CertificationsAwards from '~/components/index/CertificationsAwards.vue';
import TrustedClients from '~/components/index/TrustedClients.vue';
import EmergingTechnologies from '~/components/index/EmergingTechnologies.vue';
// import FunFact from '~/components/index/FunFact.vue';
import WhyChooseUs from '~/components/index/WhyChooseUs.vue';
import LetsWorkTogether from '~/components/index/LetsWorkTogether.vue';
import LocateUsHome from "~/components/index/LocateUsHome.vue";
// import LocateUs from "~/components/index/LocateUs.vue";
import HomeCTA from "~/components/index/HomeCTA.vue";

useHead({
  title: "Dot Global Technologies - ",
});

</script>