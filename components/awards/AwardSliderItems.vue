<template>
  <Swiper :slidesPerView="3" :spaceBetween="100" class="award__item-wrapper" :loop="true"
  :breakpoints="{
                1200: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 1,
                },
                0: {
                  slidesPerView: 1,
                },
              }"
  >
    <SwiperSlide v-for="(img, i) in award_data" :key="i" class="award__item-4 mr-30">
      <img :src="img" alt="image" />
    </SwiperSlide>
  </Swiper>
</template>

<script>
// external
import { Swiper, SwiperSlide } from "swiper/vue";
// internal
import award_img_1 from "~/assets/img/award/badges-a.png";
import award_img_2 from "~/assets/img/award/badges-b.png";
import award_img_3 from "~/assets/img/award/badges-c.png";
import award_img_4 from "~/assets/img/award/badges-d.png";

export default {
  data() {
    return {
      award_data: [
        award_img_1,
        award_img_2,
        award_img_3,
        award_img_4,
        award_img_1,
        award_img_2,
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>