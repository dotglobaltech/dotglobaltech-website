<template>
    <section :class="`cta__area ${style_2 ? 'cta__style-3' : ''
        } p-relative z-index-1 pt-115 pb-60 ${style_2 ? '' : 'homecta-bg'
        }`">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xxl-6 col-xl-6 col-lg-8">
                    <h3 class="cta__title-5">Get New Insights Weekly</h3>
                    <div class="cta__content-5"><span>Stay ahead of the curve with our weekly insights delivered straight to
                            your inbox. Sign up now to receive the latest trends, analysis, and expert perspectives on the
                            IT Industry. Enter your email to subscribe.</span>
                    </div>
                </div>

                <div class="col-xxl-6 col-xl-7 col-lg-8 col-md-10 col-sm-11">
                    <div class="subscribe__wrapper text-center">
                        <div class="subscribe__form text-start">
                            <form>
                                <div class="subscribe__input">
                                    <input type="email" placeholder="Enter your email address..." />
                                    <button class="bg-btn lnk" type="submit">Subscribe
                                        <i class="fas fa-chevron-right fa-icon"></i>
                                        <span class="circle"></span>
                                    </button>
                                </div>
                            </form>
                        </div>
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