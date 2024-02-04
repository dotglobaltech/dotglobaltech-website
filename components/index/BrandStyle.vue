<template>
    <section class="award__area  pt-40 pb-40" data-bg-color="footer-bg-grey">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-4 col-xl-4 col-lg-4 col-md-4">
                    <div class="award__wrapper-4">
                        <div class="tp-section-wrapper-3 mb-30">
                            <h4 class="tp-section-title-3">Top App Development Companies</h4>
                            <p>News letter dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                Enter your email</p>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
                    <div class="award__slider">
                        <award-slider-items />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
import AwardSliderItems from "~~/components/awards/AwardSliderItems.vue";

export default {
    components: { AwardSliderItems },
};
</script>