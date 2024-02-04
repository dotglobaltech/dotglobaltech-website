<template>
  <div>
    <HeaderOne />

    <main>
      <slot></slot>
    </main>

    <Footer />
    <BrandStyle />
    <footer-eight/>
    <BackToTop/>
  </div>
</template>

<script>
import HeaderOne from "./headers/HeaderOne.vue";
import Footer from "./footers/FooterFour.vue";
import BrandStyle from '~/components/index/BrandStyle.vue';
import FooterEight from './footers/FooterEight.vue';
import BackToTop from "./footers/component/BackToTop.vue";

export default {
  components: {
    HeaderOne,
    Footer,
    BrandStyle,
    FooterEight,
    BackToTop,
  },
};
</script>
