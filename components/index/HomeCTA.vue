<template>
    <section :class="`cta__area ${style_2 ? 'cta__style-3' : ''
        } p-relative z-index-1 pt-115 pb-60 ${style_2 ? '' : 'homecta-bg'
        }`">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xxl-6 col-xl-6 col-lg-8">
                    <h3 class="cta__title-5">Get New Insights Weekly</h3>
                    <div class="cta__content-5"><span>Newsletter dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod <br>tempor incididunt. Enter your email.</span>
                    </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-4">
                    <div class="cta__form-13">
                        <form action="#">
                            <div class="cta__input-13">
                                <input type="email" placeholder="Enter Your Email">
                                <button type="submit" class="tp-btn">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    props: {
        style_2: {
            type: Boolean,
            default: false,
        },
    },
};
</script>