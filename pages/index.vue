<template>
  <LayoutOne>
    <HomeHero />
    <TailoredServices />
    <Statistics />
    <FunFact />
    <OurProducts />
    <DeliveryChannels />
    <OurMediaAssets />
    <DataStrategy />
    <CertificationsAwards />
    <LetsWorkTogether />
    <LocateUs />
    <HomeCTA />
  </LayoutOne>
</template>

<script setup>
import LayoutOne from '~/layouts/LayoutOne.vue';
import HomeHero from '~/components/index/HomeHero.vue'
import TailoredServices from '~/components/index/TailoredServices.vue';
import Statistics from '~/components/index/Statistics.vue';
import FunFact from '~~/components/index/FunFact.vue';
import OurProducts from "~/components/index/OurProducts.vue";
import DeliveryChannels from "~/components/index/DeliveryChannels.vue";
import OurMediaAssets from '~/components/index/OurMediaAssets.vue';
import DataStrategy from "~/components/index/DataStrategy";
import CertificationsAwards from '~/components/index/CertificationsAwards.vue';
import LetsWorkTogether from '~/components/index/LetsWorkTogether.vue';
import LocateUs from "~/components/index/LocateUs.vue";
import HomeCTA from "~/components/index/HomeCTA.vue";

useHead({
  title: "Dot Global Technologies - ",
});

</script>